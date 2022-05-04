import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import cache from '../backend/utils/DB/cache'
import { makeStore } from "../lib/store";
import {
  getChainLatestBlock,
  getRunningOperationPromises,
} from '../lib/chainApi';
import Layout from "../components/layout/Layout";
import HomePageContent from "../components/Body/HomePage";




function Home ({cachedResults}: any) {
 // console.log(cachedResults.data.block.data.txs[0])
  return (
   <div> 
   <HomePageContent />
  </div>
  );
}

export default Home

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};


export const  getServerSideProps: GetServerSideProps = async () => {
  const fetcher = async () => {
  const store = makeStore();
  const dataNodeInfo = await store.dispatch(getChainLatestBlock.initiate());
  const results =  JSON.parse(JSON.stringify(dataNodeInfo)) 
  await Promise.all(getRunningOperationPromises());
  return results
  
}

//function to persist data in Redis
 const cachedResults = await cache.fetch("", fetcher, 35)

return { props: {
   cachedResults: cachedResults } 
 }
}


