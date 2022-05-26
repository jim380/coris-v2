# Coris Explorer

A community-built Blockchain explorer for the cosmos ecosystem, brought to you by Cypher Core LLC


## Using Docker On the Client
 [Install Docker](https://docs.docker.com/get-docker/)  on your machine.
   
   ``` 
   git clone https://github.com/jim380/coris-v2.git 
   ```
  
  Development
  
  Build your container: 
  ``` 
  docker build -t corisv2-dev ./ 
  ```
  
  Run your container: 
  ``` 
  docker run -p 3000:3000 corisv2-dev. 
  ```

  Production
  
  Build your container: 
  ``` 
  docker build -t corisv2-prod ./ 
  ```
  
  Run your container: 
  ```
  docker run -p 3000:3000 corisv2-prod.
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

