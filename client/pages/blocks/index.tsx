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
  <BlocksContent {...BlocksData} />
  </>
  );
}

const BlocksData = {
  phone1: "6 508 396",
  x34567EfE34G6J7K85H1: "34567ef...e34g6j7k85h",
  dgtizeStake1: "Dgtize Stake",
  number1: "3",
  x6SAgo1: "6s ago",
  phone2: "6 508 396",
  x34567EfE34G6J7K85H2: "34567ef...e34g6j7k85h",
  dgtizeStake2: "Dgtize Stake",
  number2: "3",
  x6SAgo2: "6s ago",
  phone3: "6 508 396",
  x34567EfE34G6J7K85H3: "34567ef...e34g6j7k85h",
  dgtizeStake3: "Dgtize Stake",
  number3: "3",
  x6SAgo3: "6s ago",
  phone4: "6 508 396",
  x34567EfE34G6J7K85H4: "34567ef...e34g6j7k85h",
  dgtizeStake4: "Dgtize Stake",
  number4: "3",
  x6SAgo4: "6s ago",
  phone5: "6 508 396",
  x34567EfE34G6J7K85H5: "34567ef...e34g6j7k85h",
  dgtizeStake5: "Dgtize Stake",
  number5: "3",
  x6SAgo5: "6s ago",
  phone6: "6 508 396",
  x34567EfE34G6J7K85H6: "34567ef...e34g6j7k85h",
  dgtizeStake6: "Dgtize Stake",
  number6: "3",
  x6SAgo6: "6s ago",
  phone7: "6 508 396",
  x34567EfE34G6J7K85H7: "34567ef...e34g6j7k85h",
  dgtizeStake7: "Dgtize Stake",
  number7: "3",
  x6SAgo7: "6s ago",
  phone8: "6 508 396",
  x34567EfE34G6J7K85H8: "34567ef...e34g6j7k85h",
  dgtizeStake8: "Dgtize Stake",
  number8: "3",
  x6SAgo8: "6s ago",
  phone9: "6 508 396",
  x34567EfE34G6J7K85H9: "34567ef...e34g6j7k85h",
  dgtizeStake9: "Dgtize Stake",
  number9: "3",
  x6SAgo9: "6s ago",
  phone10: "6 508 396",
  x34567EfE34G6J7K85H10: "34567ef...e34g6j7k85h",
  dgtizeStake10: "Dgtize Stake",
  number10: "3",
  x6SAgo10: "6s ago",
  phone11: "6 508 396",
  x34567EfE34G6J7K85H11: "34567ef...e34g6j7k85h",
  dgtizeStake11: "Dgtize Stake",
  number11: "3",
  x6SAgo11: "6s ago"
};


export default Blocks

Blocks.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};