# Coris Explorer

A community-built Blockchain explorer for the cosmos ecosystem, brought to you by Cypher Core LLC


## Using Docker
 [Install Docker](https://docs.docker.com/get-docker/)  on your machine.
   
   ``` 
    git clone https://github.com/jim380/coris-v2.git 
 
   ```
  ## On the Client Folder, include .env.local file
      cd client
      
      npm install
       
 
   SAMPLE OF .env.lcoal file
  ``` 
  # Chain RESTAPI
  NEXT_PUBLIC_CosmosChain_RESTAPI="https://cosmos.api.s16.ventures"

  # MongoDB Database RESTAPI from the backend
  NEXT_PUBLIC_GetBlocksLatest="http://localhost:5000/blocks/latest"
  NEXT_PUBLIC_GetBlocks="http://localhost:5000/blocks"
  ```
  Development
   
  Build your container: 
  ``` 
  docker build -t corisv2client ./ 
  ```
  
  Run your container: 
  ``` 
  docker run -p 3000:3000 corisv2client 
  ```
  
  You can view your images created with 
  ```
  docker images
  ```

## Running Locally

First, run the development server:
```
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result


## On the Backend folder, include .env file
  ```
  cd backend
  
  npm install
  
  ```
  First, install MongoDB on your device and follow these steps to run the server
  
  SAMPLE OF .env file
  ``` 
  # NODE_ENV=development
  COSMOS_REST='https://cosmos.api.s16.ventures'
  MONGOOSE_URL='Your mongoDB Connection String'
  PORT=5000
  ```
  
   Development
   
  Build your container: 
  ``` 
  docker build -t corisv2server ./ 
  ```
  
  Run your container: 
  ``` 
  docker run -p 5000:5000 corisv2server 
  ```
  
  ## Running Locally

   Run the development server:
   
   
     npm run dev

    
  
  
  
  
  
  
  
  
  
  
