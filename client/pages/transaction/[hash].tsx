import React from 'react'
import Layout from "../../components/layout/Layout";

import {
  useGetChainValidatorDetailsQuery,
} from '../../lib/chainApi';
import { useRouter } from 'next/router'
import TransactionContents from '../../components/Transaction';

function TransactionDetails(props) {
    const {query} = useRouter()
    //const getValidatorDetails =  useGetChainValidatorDetailsQuery(query.address)

    return (
       <>
       <TransactionContents />
       </>
    )
}

export default TransactionDetails

TransactionDetails.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };
