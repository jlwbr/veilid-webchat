import veilid_load_wasm, * as veilid from './wasm/veilid_wasm.js';
import {
  veilidCoreInitConfig,
  veilidCoreStartupConfig,
} from './veilid-config.js';

const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export class Veilid {
  private _veilidCoreInitConfig: any;
  private _veilidCoreStartupConfig: any;
  public status: "initializing" | 'initialized' | 'stopped' | 'starting' | 'started' | 'stopping' = 'initializing';
  public subscriptions: Record<string, { [id: string]: Function }> = {};

  constructor(initConfig?: any, startupConfig?: any) {
    this._veilidCoreInitConfig = initConfig || veilidCoreInitConfig;
    this._veilidCoreStartupConfig = startupConfig || veilidCoreStartupConfig;
    this.init();
  }

  private async init() {
    await veilid_load_wasm();
    veilid.initialize_veilid_wasm();

    this.changeStatus('initialized');
  }

  public async on(event: string, callback: Function) {
    const id = uid();

    if (!this.subscriptions[event]) {
      this.subscriptions[event] = {};
    }

    this.subscriptions[event][id] = callback;

    return {
      unsubscribe: () => {
        delete this.subscriptions[event][id]
        if (Object.keys(this.subscriptions[event]).length === 0)
          delete this.subscriptions[event]
      }
    }
  }

  private publish(event: string, args: any[]) {
    if (!this.subscriptions[event])
      return

    Object.keys(this.subscriptions[event])
      .forEach(id => this.subscriptions[event][id](...args))
  }

  private changeStatus(status: typeof this.status) {
    this.status = status;
    this.publish('status', [status]);
    this.publish(status, []);
  }

  public async start() {
    this.changeStatus('starting');
    veilid.initialize_veilid_core(JSON.stringify(this._veilidCoreInitConfig));

    await veilid.startup_veilid_core(async (update: string) => {
      const data = JSON.parse(update);

      this.publish('update', [data]);

      if (data.kind === 'Log' && data?.message?.includes('Veilid API startup complete')) {
        veilid.attach();
      }

    }, JSON.stringify(this._veilidCoreStartupConfig));

    this.changeStatus('started');
  }

  public async stop() {
    this.changeStatus('stopping');
    await veilid.shutdown_veilid_core();
    this.changeStatus('stopped');
  }

  public async generateKeyPair() {
    const currentKey = localStorage.getItem("keyPair");
    if (currentKey) return;

    const kind = veilid.best_crypto_kind();
    const key = await veilid.generate_key_pair(kind) as string;

    localStorage.setItem("keyPair", key);
  }

  public getPublicKey() {
    const currentKey = localStorage.getItem("keyPair");
    if (!currentKey) return;

    const parts = currentKey.split(':');
    return parts[1];
  }

  public async routingContext() {
    const id = await veilid.routing_context();

    return {
      id,
      send: (target: string, message: string) => this.send(id, target, message),
      connnect: (peer: string) => this.connect(id, peer),
      release: () => veilid.release_routing_context(id),
    }
  }

  public async connect(id: number, peer: string) {
    const publicKey = this.getPublicKey();
    if (!publicKey) return;

    await veilid.routing_context_app_call(id, peer, publicKey);
  }

  public async send(id: number, target: string, message: string) {
    await veilid.routing_context_app_message(id, target, message);
  }
}
