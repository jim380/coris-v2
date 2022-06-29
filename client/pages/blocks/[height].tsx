import React from 'react'
import Layout from "../../components/layout/Layout";
import {
    useGetChainBlockHeightQuery
} from '../../lib/chainApi';
import { useRouter } from 'next/router'
import BlockHeightContent from '../../components/Blocks/Details';

function BlocksDetails(props) {
    const {query} = useRouter()
    const getBlockHeight = useGetChainBlockHeightQuery(query.height)
    //console.log(getBlockHeight)



    const blockDetailsData = {
        logo: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/626b16186ff5cd6d9202df97/img/asset-3-1@2x.png",
        asset51: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/626b16186ff5cd6d9202df97/img/asset-5-1@2x.png",
        asset41: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/626b16186ff5cd6d9202df97/img/asset-4-1@2x.png",
        solidGeneralChartPie: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/62a4ee972857c158760c7c4f/img/solid-general-chart-pie@2x.png",
        iconUser: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/62a4ee972857c158760c7c4f/img/outline-communication-user@2x.png",
        icon1: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/62a4ee972857c158760c7c4f/img/icon@2x.png",
        icon2: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/626b16186ff5cd6d9202df97/img/outline-interface-edit@2x.png",
        icon3: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/626b16186ff5cd6d9202df97/img/outline-interface-settings-adjust@2x.png",
        overview: "Overview",
        validators1: "Validators",
        blocks: "Blocks",
        proposals: "Proposals",
        parameters: "Parameters",
        title: "Block Details",
        address1: "1 453 936",
        height1: "Height",
        text1: "16,05,2022, 10:22:16",
        time1: "Time",
        mannyel: "Mannyel",
        proposer: "Proposer",
        address2: "6 min ago",
        timeAgo: "Time ago",
        number1: "3",
        noOfCrs: "No. of CR’s",
        x0975Coris: "0.975 CORIS",
        crTotalFee: "CR total fee",
        x34Gd73874Gf783Ff374G: "34gd73874gf783ff374gfg4783gf298h4fgg8f2873dfg676f381d3",
        hash1: "Hash",
        iconCopy: "https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/62a4ee972857c158760c7c4f/img/outline-files-copy@2x.png",
        signatures: "Signatures",
        validators2: "Validators",
        dgtizeStake1: "Dgtize Stake",
        dgtizeStake2: "Dgtize Stake",
        dgtizeStake3: "Dgtize Stake",
        dgtizeStake4: "Dgtize Stake",
        dgtizeStake5: "Dgtize Stake",
        dgtizeStake6: "Dgtize Stake",
        dgtizeStake7: "Dgtize Stake",
        dgtizeStake8: "Dgtize Stake",
        dgtizeStake9: "Dgtize Stake",
        dgtizeStake10: "Dgtize Stake",
        dgtizeStake11: "Dgtize Stake",
        transactions: "Transactions",
        height2: "Height",
        hash2: "Hash",
        status: "Status",
        fee: "Fee",
        message: "Message",
        type: "Type",
        time2: "Time",
        phone1: "6 508 396",
        x34567EfE34G6J7K85H1: "34567ef...e34g6j7k85h",
        place1: "Success",
        number2: "34456",
        number3: "3",
        x34567EfE34G6J7K85H2: "34567ef...e34g6j7k85h",
        x6SAgo1: "6s ago",
        phone2: "6 508 396",
        x34567EfE34G6J7K85H3: "34567ef...e34g6j7k85h",
        place2: "Success",
        number4: "34456",
        number5: "3",
        x34567EfE34G6J7K85H4: "34567ef...e34g6j7k85h",
        x6SAgo2: "6s ago",
        phone3: "6 508 396",
        x34567EfE34G6J7K85H5: "34567ef...e34g6j7k85h",
        place3: "Success",
        number6: "34456",
        number7: "3",
        x34567EfE34G6J7K85H6: "34567ef...e34g6j7k85h",
        x6SAgo3: "6s ago",
        phone4: "6 508 396",
        x34567EfE34G6J7K85H7: "34567ef...e34g6j7k85h",
        place4: "Success",
        number8: "34456",
        number9: "3",
        x34567EfE34G6J7K85H8: "34567ef...e34g6j7k85h",
        x6SAgo4: "6s ago",
        phone5: "6 508 396",
        x34567EfE34G6J7K85H9: "34567ef...e34g6j7k85h",
        place5: "Success",
        number10: "34456",
        number11: "3",
        x34567EfE34G6J7K85H10: "34567ef...e34g6j7k85h",
        x6SAgo5: "6s ago",
    };
    
    

    return (
        <>
        <BlockHeightContent {...blockDetailsData} />
        </>
    )
}

export default BlocksDetails

BlocksDetails.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };

