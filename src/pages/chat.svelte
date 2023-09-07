<script lang="ts">
    import { Veilid } from "../veilid";

    const urlParams = new URLSearchParams(window.location.search);
    const peer = urlParams.get("peer");

    const veilid = new Veilid();

    let status = veilid.status;
    let color = statusColor();

    let context: Awaited<ReturnType<typeof veilid.routingContext>>;

    veilid.on("initialized", () => {
        console.log("Veilid initialized");
        veilid.start();
    });

    veilid.on("status", (_status: typeof status) => {
        status = _status;
        color = statusColor();
    });

    veilid.on("update", (data: any) => {
        console.log(data);
    });

    veilid.on("started", async () => {
        await veilid.generateKeyPair();
        context = await veilid.routingContext();

        if (peer) {
            await context.connnect(peer);
            console.log("Connected to peer");
        }
    });

    function statusColor() {
        switch (status) {
            case "initializing":
            case "starting":
                return "bg-yellow-200";
            case "initialized":
            case "started":
                return "bg-green-200";
            case "stopped":
            case "stopping":
                return "bg-red-200";
        }
    }
</script>

<div class="flex gap-2">
    <span class={`border px-1 ${color}`}>{status}</span>
    {#if peer}
        <span class="border px-1 bg-green-200">Peer found</span>
    {:else}
        <span class="border px-1 bg-red-200">No peer</span>
    {/if}
    <span class="border px-1 bg-blue-200">{veilid.getPublicKey()}</span>
</div>
<div class="flex-1 border pt-2 py-1">Chat!</div>
<div class="flex gap-1 pb-2">
    <input
        type="text"
        class="flex-1 border px-2 py-1"
        placeholder="Type your message here..."
    />
    <button class="border px-2 py-1 hover:bg-gray-100">Send</button>
</div>
