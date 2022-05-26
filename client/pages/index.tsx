import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Layout from "../components/layout/Layout";
import HomePageContent from "../components/Homepage/HomePage";
import Head from "next/head";
import Link from "next/link";
import cache from '../backend/utils/DB/cache'
import { makeStore } from "../lib/store";
import {
  getChainLatestBlocks,
  getChainNodeInfo,
  getRunningOperationPromises,
} from '../lib/chainApi';


function Home () {
  
  //get latest blocks
  const latestBlocks = async () => {
    const store = makeStore();
    const latestBlocksData = await store.dispatch(getChainLatestBlocks.initiate());
    const results =  JSON.parse(JSON.stringify(latestBlocksData))
    await Promise.all(getRunningOperationPromises());
    return results
  }

  //useSWR handles caching, revalidation, focus tracking, refetching on intervals
  const  data  = useSWR('blocks/latest', latestBlocks, { refreshInterval: 4000 })


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

