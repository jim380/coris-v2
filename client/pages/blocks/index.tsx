import useSWR from "swr";
import Layout from "../../components/layout/Layout";
import cache from '../../backend/utils/DB/cache'
import { makeStore } from "../../lib/store";
import {
  getChainBlocks,
  getRunningOperationPromises,
} from '../../lib/chainApi';
import BlocksContent from "../../components/Blocks";


function Blocks () {
  
  //get blocks
  const blocks = async () => {
    const store = makeStore();
    const BlocksData = await store.dispatch(getChainBlocks.initiate());
    const results =  JSON.parse(JSON.stringify(BlocksData));
    await Promise.all(getRunningOperationPromises());
    return results
  }

  //useSWR handles caching, revalidation, focus tracking, refetching on intervals
  const data = useSWR('/blocks', blocks, { refreshInterval: 1000 })
  return (
   <> 
  <BlocksContent {...data} />
  </>
  );
}

export default Blocks

Blocks.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};