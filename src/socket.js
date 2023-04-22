
export default function Subscriptions(setNotification){
     
    function* Genrator(){
        let count = 0;
        while (true){
            count++;
            yield count;
        }
      }

    const WebSocket = require('websocket').w3cwebsocket;
    const gen = Genrator();
    var subscriptions = {};

    const ws = new WebSocket('ws://192.168.1.10:8340');
    ws.addEventListener('open', () => {
    console.log('Sending request');

    ws.send(JSON.stringify({
        jsonrpc: "2.0",
        id: "active_fork",
        method: "subscribe_active_fork",
        params: null,
    }));

    ws.send(JSON.stringify({
        jsonrpc: "2.0",
        id: "forks",
        method: "subscribe_forks",
        params: null,
    }));

    ws.send(JSON.stringify({
        jsonrpc: "2.0",
        id: "validation_checks",
        method: "validation_checks",
        params: null,
    }));

    ws.send(JSON.stringify({
        jsonrpc: "2.0",
        id: "invalid_block_checks",
        method: "invalid_block_checks",
        params: null,
    }));

    ws.send(JSON.stringify({
        jsonrpc: "2.0",
        id: "lagging_nodes_checks",
        method: "lagging_nodes_checks",
        params: null,
    }));

    ws.send(JSON.stringify({
        jsonrpc: "2.0",
        id: "watched_address_checks",
        method: "watched_address_checks",
        params: {
            watch: [
                "bc1qm34lsc65zpw79lxes69zkqmk6ee3ewf0j77s3h"
            ],
            watch_until: "2026-09-30T00:00:00Z",
        }
    }));
    });


    ws.addEventListener('message', (message) => {
    const obj = JSON.parse(message.data);

    if (obj.id !== undefined) {
        console.log('Subscription id: ', obj.result);
        subscriptions[obj.id] = obj.result;
    } else {
        if (obj.method == "forks") {
            console.log(`Got forks method: ${JSON.stringify(obj.params)}`);

            obj.params.map(fork => {
                setNotification(prevNotifications => [{
                    id: gen.next(),
                    title: "Got Forks",
                    message: `Recieved a fork at block height ${fork.height} with Block hash: ${fork.block} found by Node ${fork.node}`
                },...prevNotifications]);
            })
        } else if (obj.method == "watched_address_checks") {
            console.log(`Got watched address method: ${JSON.stringify(obj.params)}`);
        } else if (obj.method == "active_fork") {
            console.log(`Got active fork method: ${JSON.stringify(obj.params)}`);
        } else if (obj.method == "validation_checks") {
            console.log(`Got checks method: ${JSON.stringify(obj.params)}`);
        } else if (obj.method == "invalid_block_checks") {
            console.log(`Got invalid block checks method: ${JSON.stringify(obj.params)}`);
        } else if (obj.method == "lagging_nodes_checks") {
            console.log(`Got lagging node checks method: ${JSON.stringify(obj.params)}`);
        }
    }
    });

}