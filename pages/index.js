import Head from "next/head";
import Link from "next/link";
import { makeStore } from "../lib/store";
import {
  getChainNodeInfo,
  getRunningOperationPromises,
} from '../lib/chainApi'



export default function Home(props) {
  console.log(props.results.data.node_info)
  return (
    <div>
    hello
</div>
  
  );
}



export async function getServerSideProps() {
  const store = makeStore();
  const dataNodeInfo = await store.dispatch(getChainNodeInfo.initiate());
  const results =  JSON.parse(JSON.stringify(dataNodeInfo))
  await Promise.all(getRunningOperationPromises());

return { props: { results } }

}