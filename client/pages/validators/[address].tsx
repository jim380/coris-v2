import React from 'react'
import Layout from "../../components/layout/Layout";
import ValidatorsDetailsContent from '../../components/Validators/Details'
import {
  useGetChainValidatorDetailsQuery,
} from '../../lib/chainApi';
import { useRouter } from 'next/router'
import { makeStore } from '../../lib/store';

function ValidatorsDetails() {
    const {query} = useRouter()
    const getValidatorDetails =  useGetChainValidatorDetailsQuery(query.address)

    return (
        <ValidatorsDetailsContent {...getValidatorDetails} />
    )
}

export default ValidatorsDetails

ValidatorsDetails.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };


