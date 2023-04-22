
const { JsonRpc } = require("node-jsonrpc-client");
export const rpc_client = new JsonRpc("http://localhost:8339");

export const get_nodes = async ()=>{
    
    try{

      let resp = rpc_client.call("get_tips", { active_only: false });
      let data = (await resp).result;
      return data;

    } catch (err){

      console.log(err)
      return null;

    }
}


export const get_block = async (block,height=false)=>{
    
    try{
      let params = {}
      if (height){
        params = {height: block}
      }
      else{
        params = {hash: block}
      }
      let resp = rpc_client.call("get_block", params);
      let data = (await resp).result;
      return data;

    
    } catch (err){

      console.log(err)
      return null;

    }
}


export const get_block_from_peer = async (block_hash)=>{
    
    try{

      let resp = rpc_client.call("get_block_from_peer", { hash: block_hash });
      let data = (await resp).result;
      return data;

    
    } catch (err){

      console.log(err)
      return null;

    }
}


export const get_peers = async (peer_id)=>{
    
    try{

      let resp = rpc_client.call("get_peers", { id: peer_id });
      let data = (await resp).result;
      return data;

    
    } catch (err){

      console.log(err)
      return null;

    }
}

export const remove_node = async (peer_id)=>{
    
  try{

    let resp = rpc_client.call("remove_node", { id: peer_id });
    let data = (await resp).result;
    return data;

  
  } catch (err){

    console.log(err)
    return null;

  }
}

export const get_node = async ()=>{
    
  try{

    let resp = rpc_client.call("get_nodes");
    let data = (await resp).result;
    return data;

  
  } catch (err){

    console.log(err)
    return null;

  }
}

export const add_node = async (name,rpc_host,rpc_port,mirror_rpc_port,user,pass,archive)=>{
    
  try{

    let params  = {
      name,
      rpc_host,
      rpc_port,
      mirror_rpc_port,
      user,
      pass,
      archive
    }

    let resp = rpc_client.call("add_node",params);
    let data = (await resp).result;
    return data;

  
  } catch (err){

    console.log(err)
    return null;

  }
}



