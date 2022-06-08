import { useEffect, useState } from "react";
import AssetsContent from "../../components/Assets";
import Layout from "../../components/layout/Layout";
import axios from 'axios'

function Assets() {
   
    const [coinsData, setCoins] = useState([])
    let coinsAPi = process.env.NEXT_PUBLIC_Asset_API
    useEffect(() => {
        axios.get(coinsAPi).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  
  return (
   <> 
   <AssetsContent coins={coinsData} />
  </>
  );
}

export default Assets

Assets.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};