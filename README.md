# Coris Explorer

A community-built Blockchain explorer for the cosmos ecosystem, brought to you by Cypher Core LLC


## Using Docker
 1. [Install Docker](https://docs.docker.com/get-docker/)  on your machine.
 
 2. Build your container: ``` docker build -t corisv2-dev ./ ```

  Development

  Run your container: ``` docker run -p 3000:3000 corisv2-dev. ```

  Production

  Run your container: ``` docker run -p 3000:3000 corisv2-prod.```

  You can view your images created with ```docker images```

## Running Locally

First, run the development server:
```
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result
