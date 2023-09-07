/* tslint:disable */
/* eslint-disable */
/**
*/
export function initialize_veilid_wasm(): void;
/**
* @param {string} platform_config
*/
export function initialize_veilid_core(platform_config: string): void;
/**
* @param {string} layer
* @param {string} log_level
*/
export function change_log_level(layer: string, log_level: string): void;
/**
* @param {Function} update_callback_js
* @param {string} json_config
* @returns {Promise<any>}
*/
export function startup_veilid_core(update_callback_js: Function, json_config: string): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function get_veilid_state(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function attach(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function detach(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function shutdown_veilid_core(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function routing_context(): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function release_routing_context(id: number): number;
/**
* @param {number} id
* @returns {number}
*/
export function routing_context_with_privacy(id: number): number;
/**
* @param {number} id
* @param {string} safety_selection
* @returns {number}
*/
export function routing_context_with_custom_privacy(id: number, safety_selection: string): number;
/**
* @param {number} id
* @param {string} sequencing
* @returns {number}
*/
export function routing_context_with_sequencing(id: number, sequencing: string): number;
/**
* @param {number} id
* @param {string} target
* @param {string} request
* @returns {Promise<any>}
*/
export function routing_context_app_call(id: number, target: string, request: string): Promise<any>;
/**
* @param {number} id
* @param {string} target
* @param {string} message
* @returns {Promise<any>}
*/
export function routing_context_app_message(id: number, target: string, message: string): Promise<any>;
/**
* @param {number} id
* @param {string} schema
* @param {number} kind
* @returns {Promise<any>}
*/
export function routing_context_create_dht_record(id: number, schema: string, kind: number): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string | undefined} writer
* @returns {Promise<any>}
*/
export function routing_context_open_dht_record(id: number, key: string, writer?: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @returns {Promise<any>}
*/
export function routing_context_close_dht_record(id: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @returns {Promise<any>}
*/
export function routing_context_delete_dht_record(id: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {number} subkey
* @param {boolean} force_refresh
* @returns {Promise<any>}
*/
export function routing_context_get_dht_value(id: number, key: string, subkey: number, force_refresh: boolean): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {number} subkey
* @param {string} data
* @returns {Promise<any>}
*/
export function routing_context_set_dht_value(id: number, key: string, subkey: number, data: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string} subkeys
* @param {string} expiration
* @param {number} count
* @returns {Promise<any>}
*/
export function routing_context_watch_dht_values(id: number, key: string, subkeys: string, expiration: string, count: number): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string} subkeys
* @returns {Promise<any>}
*/
export function routing_context_cancel_dht_watch(id: number, key: string, subkeys: string): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function new_private_route(): Promise<any>;
/**
* @param {string} stability
* @param {string} sequencing
* @returns {Promise<any>}
*/
export function new_custom_private_route(stability: string, sequencing: string): Promise<any>;
/**
* @param {string} blob
* @returns {Promise<any>}
*/
export function import_remote_private_route(blob: string): Promise<any>;
/**
* @param {string} route_id
* @returns {Promise<any>}
*/
export function release_private_route(route_id: string): Promise<any>;
/**
* @param {string} call_id
* @param {string} message
* @returns {Promise<any>}
*/
export function app_call_reply(call_id: string, message: string): Promise<any>;
/**
* @param {string} name
* @param {number} column_count
* @returns {Promise<any>}
*/
export function open_table_db(name: string, column_count: number): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function release_table_db(id: number): number;
/**
* @param {string} name
* @returns {Promise<any>}
*/
export function delete_table_db(name: string): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function table_db_get_column_count(id: number): number;
/**
* @param {number} id
* @param {number} col
* @returns {Promise<any>}
*/
export function table_db_get_keys(id: number, col: number): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function table_db_transact(id: number): number;
/**
* @param {number} id
* @returns {number}
*/
export function release_table_db_transaction(id: number): number;
/**
* @param {number} id
* @returns {Promise<any>}
*/
export function table_db_transaction_commit(id: number): Promise<any>;
/**
* @param {number} id
* @returns {Promise<any>}
*/
export function table_db_transaction_rollback(id: number): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @param {string} value
* @returns {Promise<any>}
*/
export function table_db_transaction_store(id: number, col: number, key: string, value: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @returns {Promise<any>}
*/
export function table_db_transaction_delete(id: number, col: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @param {string} value
* @returns {Promise<any>}
*/
export function table_db_store(id: number, col: number, key: string, value: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @returns {Promise<any>}
*/
export function table_db_load(id: number, col: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @returns {Promise<any>}
*/
export function table_db_delete(id: number, col: number, key: string): Promise<any>;
/**
* @returns {string}
*/
export function valid_crypto_kinds(): string;
/**
* @returns {number}
*/
export function best_crypto_kind(): number;
/**
* @param {string} node_ids
* @param {string} data
* @param {string} signatures
* @returns {Promise<any>}
*/
export function verify_signatures(node_ids: string, data: string, signatures: string): Promise<any>;
/**
* @param {string} data
* @param {string} key_pairs
* @returns {Promise<any>}
*/
export function generate_signatures(data: string, key_pairs: string): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function generate_key_pair(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @returns {Promise<any>}
*/
export function crypto_cached_dh(kind: number, key: string, secret: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @returns {Promise<any>}
*/
export function crypto_compute_dh(kind: number, key: string, secret: string): Promise<any>;
/**
* @param {number} kind
* @param {number} len
* @returns {Promise<any>}
*/
export function crypto_random_bytes(kind: number, len: number): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_default_salt_length(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} password
* @param {string} salt
* @returns {Promise<any>}
*/
export function crypto_hash_password(kind: number, password: string, salt: string): Promise<any>;
/**
* @param {number} kind
* @param {string} password
* @param {string} password_hash
* @returns {Promise<any>}
*/
export function crypto_verify_password(kind: number, password: string, password_hash: string): Promise<any>;
/**
* @param {number} kind
* @param {string} password
* @param {string} salt
* @returns {Promise<any>}
*/
export function crypto_derive_shared_secret(kind: number, password: string, salt: string): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_random_nonce(kind: number): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_random_shared_secret(kind: number): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_generate_key_pair(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} data
* @returns {Promise<any>}
*/
export function crypto_generate_hash(kind: number, data: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @returns {Promise<any>}
*/
export function crypto_validate_key_pair(kind: number, key: string, secret: string): Promise<any>;
/**
* @param {number} kind
* @param {string} data
* @param {string} hash
* @returns {Promise<any>}
*/
export function crypto_validate_hash(kind: number, data: string, hash: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key1
* @param {string} key2
* @returns {Promise<any>}
*/
export function crypto_distance(kind: number, key1: string, key2: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @param {string} data
* @returns {Promise<any>}
*/
export function crypto_sign(kind: number, key: string, secret: string, data: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} data
* @param {string} signature
* @returns {Promise<any>}
*/
export function crypto_verify(kind: number, key: string, data: string, signature: string): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_aead_overhead(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} body
* @param {string} nonce
* @param {string} shared_secret
* @param {string | undefined} associated_data
* @returns {Promise<any>}
*/
export function crypto_decrypt_aead(kind: number, body: string, nonce: string, shared_secret: string, associated_data?: string): Promise<any>;
/**
* @param {number} kind
* @param {string} body
* @param {string} nonce
* @param {string} shared_secret
* @param {string | undefined} associated_data
* @returns {Promise<any>}
*/
export function crypto_encrypt_aead(kind: number, body: string, nonce: string, shared_secret: string, associated_data?: string): Promise<any>;
/**
* @param {number} kind
* @param {string} body
* @param {string} nonce
* @param {string} shared_secret
* @returns {Promise<any>}
*/
export function crypto_crypt_no_auth(kind: number, body: string, nonce: string, shared_secret: string): Promise<any>;
/**
* @returns {bigint}
*/
export function now(): bigint;
/**
* @param {string} command
* @returns {Promise<any>}
*/
export function debug(command: string): Promise<any>;
/**
* @returns {string}
*/
export function veilid_version_string(): string;
/**
* @returns {any}
*/
export function veilid_version(): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly initialize_veilid_wasm: () => void;
  readonly initialize_veilid_core: (a: number, b: number) => void;
  readonly change_log_level: (a: number, b: number, c: number, d: number) => void;
  readonly startup_veilid_core: (a: number, b: number, c: number) => number;
  readonly release_routing_context: (a: number) => number;
  readonly routing_context_with_privacy: (a: number) => number;
  readonly routing_context_with_custom_privacy: (a: number, b: number, c: number) => number;
  readonly routing_context_with_sequencing: (a: number, b: number, c: number) => number;
  readonly routing_context_app_call: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_app_message: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_create_dht_record: (a: number, b: number, c: number, d: number) => number;
  readonly routing_context_open_dht_record: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_close_dht_record: (a: number, b: number, c: number) => number;
  readonly routing_context_delete_dht_record: (a: number, b: number, c: number) => number;
  readonly routing_context_get_dht_value: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_set_dht_value: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly routing_context_watch_dht_values: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly routing_context_cancel_dht_watch: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly new_custom_private_route: (a: number, b: number, c: number, d: number) => number;
  readonly import_remote_private_route: (a: number, b: number) => number;
  readonly release_private_route: (a: number, b: number) => number;
  readonly app_call_reply: (a: number, b: number, c: number, d: number) => number;
  readonly open_table_db: (a: number, b: number, c: number) => number;
  readonly release_table_db: (a: number) => number;
  readonly delete_table_db: (a: number, b: number) => number;
  readonly table_db_get_column_count: (a: number) => number;
  readonly table_db_transact: (a: number) => number;
  readonly release_table_db_transaction: (a: number) => number;
  readonly table_db_transaction_store: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly table_db_transaction_delete: (a: number, b: number, c: number, d: number) => number;
  readonly table_db_store: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly table_db_load: (a: number, b: number, c: number, d: number) => number;
  readonly table_db_delete: (a: number, b: number, c: number, d: number) => number;
  readonly valid_crypto_kinds: (a: number) => void;
  readonly verify_signatures: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly generate_signatures: (a: number, b: number, c: number, d: number) => number;
  readonly crypto_cached_dh: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_compute_dh: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_hash_password: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_verify_password: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_derive_shared_secret: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_generate_hash: (a: number, b: number, c: number) => number;
  readonly crypto_validate_key_pair: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_validate_hash: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_distance: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_sign: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly crypto_verify: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly crypto_decrypt_aead: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly crypto_encrypt_aead: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly crypto_crypt_no_auth: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly debug: (a: number, b: number) => number;
  readonly veilid_version_string: (a: number) => void;
  readonly veilid_version: () => number;
  readonly table_db_transaction_rollback: (a: number) => number;
  readonly routing_context: () => number;
  readonly now: () => number;
  readonly best_crypto_kind: () => number;
  readonly generate_key_pair: (a: number) => number;
  readonly crypto_default_salt_length: (a: number) => number;
  readonly crypto_random_nonce: (a: number) => number;
  readonly crypto_random_shared_secret: (a: number) => number;
  readonly crypto_generate_key_pair: (a: number) => number;
  readonly crypto_aead_overhead: (a: number) => number;
  readonly get_veilid_state: () => number;
  readonly attach: () => number;
  readonly detach: () => number;
  readonly shutdown_veilid_core: () => number;
  readonly new_private_route: () => number;
  readonly crypto_random_bytes: (a: number, b: number) => number;
  readonly table_db_get_keys: (a: number, b: number) => number;
  readonly table_db_transaction_commit: (a: number) => number;
  readonly main_rs: () => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he6fb74fb374c53de: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4269506a73edef79: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h41b1447527fd9546: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb0acb57701004635: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8fa36414e0f86b22: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0261f606fab4f95e: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h239933b8c8481c7a: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
