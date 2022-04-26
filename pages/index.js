import Head from "next/head";
import Link from "next/link";
import cache from '../backend/utils/DB/cache'
import { makeStore } from "../lib/store";
import {
  getChainNodeInfo,
  getRunningOperationPromises,
} from '../lib/chainApi'



export default function Home(props) {
  console.log(props.status)
  return (
    <div>
    hello
</div>
  
  );
}



export async function getServerSideProps() {
  const fetcher = async () => {
  const store = makeStore();
  const dataNodeInfo = await store.dispatch(getChainNodeInfo.initiate());
  const results =  JSON.parse(JSON.stringify(dataNodeInfo)) 
  await Promise.all(getRunningOperationPromises());
  return results
  
}

//function to persist data in Redis
 const cachedResults = await cache.fetch("", fetcher, 35)

return { props: cachedResults } 
}