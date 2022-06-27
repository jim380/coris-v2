import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import HomePageContent from "../components/Homepage";
import Head from "next/head";
import Link from "next/link";
import axios from 'axios'

function Home () {

  const [blocks, setBlocks] = useState([])
  let getBlocksLatestAPi = process.env.NEXT_PUBLIC_GetBlocksLatest
  useEffect(() => {
      axios.get(getBlocksLatestAPi).then((response) => {
          setBlocks(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [blocks])
  
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
    getBlocks: blocks,  
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


