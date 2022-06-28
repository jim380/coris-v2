import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import BlocksContent from "../../components/Blocks";
import axios from 'axios'

function Blocks () {
  
  //get blocks
  const [getBlocks, setBlocks] = useState([])
  let getBlocksAPi = process.env.NEXT_PUBLIC_GetBlocks
  useEffect(() => {
      axios.get(getBlocksAPi).then((response) => {
          setBlocks(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [getBlocks])

  return (
   <> 
  <BlocksContent getBlocks={getBlocks} />
  </>
  );
}


export default Blocks

Blocks.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};