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
```sh
    cd Forkscanner-Frontend 
    npm install
    npm start
```

### Ready to go now

Then go to `http://0.0.0.0:3000/` to see the frontend


# Demo Images

## Bitcoin Info Bage
Provide a brief overview of the chaintips of connected nodes and information regarding Bitcoin nodes in a concise format. Additionally, include a search option for active transactions using their transaction hash.

<img alt="LambdaLogs Logs Page" src="https://user-images.githubusercontent.com/68425016/233807187-875a60c9-c756-46e0-8239-af8b9f3610bf.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Blocks ( visual block explorer )
A block explorer that displays the ten most recent blocks. The user can apply filters or searches based on either the block's hash or its height.

<img alt="LambdaLogs Status Logs Page" src="https://user-images.githubusercontent.com/68425016/233807301-5152fe5c-2e40-4a03-ab5d-d48cbb097a2f.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Block Detials
<img width="1260" alt="image" src="https://user-images.githubusercontent.com/97180942/233812116-7863c59e-dffe-4a21-bd34-c47e495394db.png" style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Add Block/Submit Block
With this feature, you can submit a block by providing the block's JSON and choosing the node from which you wish to submit it.

<img alt="LambdaLogs Status Logs Page" src="https://user-images.githubusercontent.com/68425016/233807345-5b5baa7b-3fcd-47ec-97b2-215f28fb648c.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />


## Manage Nodes
Access a streamlined interface to oversee your nodes. This interface allows you to add, remove, and retrieve information about all the connected nodes.

<img alt="LambdaLogs Status PieChart" src="https://user-images.githubusercontent.com/68425016/233807363-a79bf2c8-ef19-474c-8fa5-0be08ba49c49.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Add Node Form
This can be used to easily add a new node to the forkscanner using the frontend without the need for CLI commands.

<img alt="LambdaLogs Status PieChart" src="https://user-images.githubusercontent.com/68425016/233807385-4ea5f275-cf27-4822-9406-23c94e30c4db.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Subscribe For Push Notifications
Activate the push notification feature on this page to receive alerts for various events listed on the notifications page, such as forks, stale blocks, and inflated blocks.

<img alt="LambdaLogs Status PieChart" src="https://user-images.githubusercontent.com/68425016/233807418-48f6c99b-6f0d-45bf-8d2d-9c93cfa3cf40.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />


### Resources
- Installed backend from [Scanner-Walkthrough](https://github.com/twilight-project/forkscanner/tree/scanner-walkthrough)
- [backend setup tutorial](https://github.com/twilight-project/forkscanner/blob/scanner-walkthrough/WALKTHROUGH.md)
