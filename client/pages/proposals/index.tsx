import React from 'react'
import ProposalsContent from '../../components/Proposals'
import Layout from "../../components/layout/Layout";
import { useGetChainProposalsQuery } from '../../lib/chainApi';


function Proposals() {
     
    const getProposals = useGetChainProposalsQuery()

    const proposalsData = {
        id: "#ID",
        title2: "Title",
        status: "Status",
        votingStart: "Voting Start",
        votingEnd: "Voting End",
        totalDeposit: "Total Deposit",
        proposalsData: getProposals
      };
    
    return (
        <>
        <ProposalsContent {...proposalsData} />
        </>
    )
}

export default Proposals

Proposals.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };
  
  