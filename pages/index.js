import Head from "next/head";
import Link from "next/link";

import {
  getChainNodeInfo
} from "../lib/chainApi";

import { makeStore } from "../lib/store";



export default function Home(props) {
  //console.log(props.results)
  return (
    <div>
    hello
</div>
  
  );
}





export async function getServerSideProps() {
  const store = makeStore();
  const dataNodeInfo = await store.dispatch(getChainNodeInfo.initiate());
  const results = JSON.stringify(dataNodeInfo)
console.log(results)


return { props: { results } }


}