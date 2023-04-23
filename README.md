## ForkScanner Frontend

![Forkscanner Logo](https://github.com/HackArchive/Forkscanner-Frontend/blob/4d27f9aa5d5be151f590ad6a461c5dd3b336c84e/src/assests/logo.png)

### About Forkscanner 
[Forkscanner](https://github.com/twilight-project/forkscanner/) is a sophisticated tool designed to actively monitor the Bitcoin blockchain in real-time, providing users with valuable insights into the state of the network. By continuously scanning the blockchain, Forkscanner is able to keep track of various critical aspects of the network's operations, including chain forks, double-spent transactions, replace-by-fee transactions, inflation checks, miner rewards, block templates, fee calculation, and soft forks.

With its comprehensive monitoring capabilities, Forkscanner provides users with unparalleled visibility into the inner workings of the Bitcoin network, allowing them to make informed decisions about their transactions and investments. Its robust feature set and real-time monitoring capabilities make it an essential tool for anyone looking to stay ahead of the curve in the fast-paced world of cryptocurrency.

# About This Project
This project involves the implementation of a frontend for Forkscanner, as part of the MIT Bitcoin Hackathon challenge. The frontend leverages backend RPC calls and socket connections to subscribe to real-time events on the network and obtain relevant information, thereby enhancing the functionality of the backend and simplifying user interaction with the tool. Through this implementation, the frontend extends the capabilities of Forkscanner and makes it easier for users to access and use its features.

# Development Setup

## Setup 

## Backend 
[setup backend from here](https://github.com/twilight-project/forkscanner/blob/main/README.md)

## Run Frontend
```
    src/config.js
    change host = "localhost" or your local ip address
```
```sh
    cd Forkscanner-Frontend 
    npm install
    npm start
```

### Ready to go now

Then go to `http://0.0.0.0:3000/` to see the frontend


# Demo Images

## Bitcoin Info Bage
Displays Info about the chaintips of all the connected nodes and the information about bitcoin nodes running in a consise manner. An option to search for active transcations using transaction hash.

<img alt="bitcoin info" src="https://user-images.githubusercontent.com/97180942/233812912-fde944ff-927f-49ea-a390-9191c5301186.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Blocks ( visual block explorer )
A block exploere displaying to 10 latest blocks. User can filter/search for blocks using the block_hash or the block_height.

<img alt="blocks" src="https://user-images.githubusercontent.com/97180942/233812934-fd956857-a1e9-4f7b-a221-ab5cb73b6032.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Block Detials
<img width="1260" alt="image" src="https://user-images.githubusercontent.com/97180942/233812968-6083b5b8-8263-4f12-9368-3b26132b9693.png" style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Add Block/Submit Block
This allows you to submit a block using the block_json and selecting the node from which you want to submit the block from.

<img alt="add blocks" src="https://user-images.githubusercontent.com/97180942/233812985-43bdff44-09b1-4ba4-954e-9a75b4be8ddc.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Manage Nodes
A consise interface to manage all you nodes, performing add_node, remove_node and get information on all your connected nodes. 

<img alt="nodes" src="https://user-images.githubusercontent.com/97180942/233812841-2723a074-df4b-4d5a-bfad-e35d51e12078.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Add Node Form
This can be used to easily add a new node to the forkscanner using the frontend without the need for CLI commands.

<img alt="Add node form" src="https://user-images.githubusercontent.com/97180942/233812874-83743e61-9db2-41d2-a555-9874f10c04b6.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Subscribe For Push Notifications
This page enables the push notification feature notifying you on every event mentioned in notifications page, events include notification on forks, stale blocks, inflated blocks, etc.

<img alt="notification" src="https://user-images.githubusercontent.com/97180942/233813004-04d4b3ce-201f-49c4-aba9-68d6ce591d63.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

### Resources
- Installed backend from [Scanner-Walkthrough](https://github.com/twilight-project/forkscanner/tree/scanner-walkthrough)
- [backend setup tutorial](https://github.com/twilight-project/forkscanner/blob/scanner-walkthrough/WALKTHROUGH.md)
