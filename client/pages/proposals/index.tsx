import React from 'react'
import ProposalsContent from '../../components/Proposals'
import Layout from "../../components/layout/Layout";


function Proposals() {
    return (
        <>
        <ProposalsContent />
        </>
    )
}

export default Proposals

Proposals.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };
  