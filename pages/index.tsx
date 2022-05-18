import  React from "react";
import useSWR from "swr";
import Layout from "../components/layout/Layout";
import HomePageContent from "../components/Homepage/HomePage";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import cache from '../backend/utils/DB/cache'
import { makeStore } from "../lib/store";
import {
  getChainLatestBlocks,
  getRunningOperationPromises,
} from '../lib/chainApi';


function Home () {

  const fetcher = async () => {
    const store = makeStore();
    const latestBlocksData = await store.dispatch(getChainLatestBlocks.initiate());
    const results =  JSON.parse(JSON.stringify(latestBlocksData))
    await Promise.all(getRunningOperationPromises());
    return results
  }
 
  //useSWR handles caching, revalidation, focus tracking, refetching on intervals
  const  data  = useSWR('blocks/latest', fetcher, { refreshInterval: 4000 })

  return (
   <> 
   <HomePageContent {...data}  />
  </>
  );
}

export default Home

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};

  

//function to persist data in Redis
//const cachedLatestBlocks = await cache.fetch("", fetcher, 10)

