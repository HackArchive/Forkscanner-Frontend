## LambdaLogs

[![LambdaTest_Logo](https://www.lambdatest.com/resources/images/guideline/ltlambdabrand.svg)](https://www.lambdatest.com/)
<!-- <img src="https://www.lambdatest.com/resources/images/guideline/ltlambdabrand.svg"  width="600" height="300"> -->

### About LambdaTest 
[LambdaTest](https://www.lambdatest.com/) is a continuous quality testing cloud platform that helps developers and testers ship code faster. Over 2 Million users across 130 countries and leading enterprises rely on LambdaTest for their testing needs. LambdaTest platform provides secure, scalable, and insightful test orchestration for customers at different points in their DevOps (CI/CD) lifecycle

# About
LambdaLogs is a powerful network log visualization tool designed to help businesses identify potential issues with their websites and endpoints quickly and easily. By scraping site data and storing network logs in a database, LambdaLogs provides an efficient way to perform daily audits and identify failing endpoints before they cause problems.

With its intuitive front-end interface, LambdaLogs enables users to easily visualize network logs and quickly identify areas for improvement. Whether you're a small business owner or a large enterprise, LambdaLogs provides the insights and data you need to keep your website running smoothly and efficiently.

So if you're looking for a powerful tool to help you optimize your website and improve your business operations, look no further than LambdaLogs.

## Logs Page
<img alt="LambdaLogs Logs Page" src="https://user-images.githubusercontent.com/68425016/227501453-e64d5d4d-b31a-4724-a24f-5715069b16e9.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Status Code Visualization Page (Line Chart)
<img alt="LambdaLogs Status Logs Page" src="https://user-images.githubusercontent.com/68425016/227501830-d4dc21f7-4717-40b4-9264-311696e5b55f.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

## Status Code Visualization Page (Pie Chart)
<img alt="LambdaLogs Status PieChart" src="https://user-images.githubusercontent.com/68425016/227502438-f324a918-f10c-4af7-90dc-0a77f63f281e.png"  style="margin-left:10px; margin-bottom:10px;" width="100%" align="center"/>
<br /><br />

# Development Setup

## Setup virtualenv 
```sh

    pip install virtualenv
    virtualenv venv
    
    # Activate For Linux
    source venv/bin/activate

    # Activate For Windows 
    ./venv/Scripts/activate

    # install dependencies
    pip install -r server/requirements.txt
```

## Setup Elastic-Search using docker 
```sh
    docker pull elasticsearch
    docker run -p 127.0.0.1:9200:9200 -p 127.0.0.1:9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.17.9
```

## Run Scrapper
```sh
    cd server
    python scrapper/scrapper.py
```

## Run Backend
```sh
    cd server/app
    uvicorn main:app --reload
```

## Run Frontend
```sh
    cd frontend 
    npm install
    npm start
```

### Ready to go now

Then go to `http://0.0.0.0:3000/` to see the frontend

Add `http://0.0.0.0:8000/docs` for API Docs.


### Resources
- Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Sample GitHub [Issue](https://github.com/npm/cli/issues/6051)
- [ElasticSearch](https://www.elastic.co/guide/index.html) documentation
- [ReactJS](https://reactjs.org/docs/getting-started.html) documentation
- [Python](https://www.python.org/doc/) documentation
- [FastAPI](https://fastapi.tiangolo.com/) documentation
