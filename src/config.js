
export const host = "192.168.1.10"

const { JsonRpc } = require("node-jsonrpc-client");
export const rpc_client = new JsonRpc(`http://${host}:8339`);


