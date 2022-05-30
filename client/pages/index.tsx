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
  const  {data}  = useSWR('blocks/latest', latestBlocks, { refreshInterval: 4000 })
  const block = data?.data?.result?.blocks?.map((block: any) =>{
    return block
  })
  console.log(block )


  const homePageData = {
    title: "Overview",
    text2: "13:00",
    text3: "17:00",
    text4: "21:00",
    text5: "28:00",
    time: "3:59AM",
    price: "$376",
    apr: "APR",
    text1: "~170%",
    place1: "Supply",
    address1: "1 453 930 716.2345 CORIS",
    percent1: "100%",
    percent2: "40%",
    inflation: "Inflation",
    percent3: "42.7%",
    communityPool: "Community pool",
    address2: "1 453 930 716.2345 CORIS",
    tokenomics: "Tokenomics",
    place2: "Supply",
    bonded: "Bonded",
    phone1: "1 234 567 890",
    phone2: "1 234 567 890",
    place3: "supply",
    percent4: "75%",
    latestBlocks: "Latest Blocks",
    viewAll: "View all",
    blocks: block,  
  }

  return (
   <> 
   <HomePageContent {...homePageData} />
  </>
  );
}



export default Home

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};

  

//function to persist data in Redis
//const cachedLatestBlocks = await cache.fetch("", fetcher, 10)

