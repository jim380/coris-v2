import React from 'react'
import Layout from "../../components/layout/Layout";
import ValidatorsDetailsContent from '../../components/Validators/Details'


function ValidatorsDetails() {
  
    return (
        <ValidatorsDetailsContent {...validatorDetailsData} />
    )
}


export default ValidatorsDetails

ValidatorsDetails.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };

  const validatorDetailsData = {
    validatorsName: "Chibuzor.one",
    httpsOdogwuCom: "https://odogwu.com",
    chibuzorOneIsANo: "Chibuzor one is a non-custodial staking platform that lets anyone become a part of decentralized infrastructure and earn passive income",
    active: "Active",
    status: "Status",
    place1: "No",
    inJail: "In jail",
    percent1: "100%",
    uptime: "Uptime",
    percent2: "75%",
    address1: "365 CR",
    percent3: "5%",
    percent4: "20%",
    percent5: "10%",
    text1: "05,04,2022",
    percent6: "5%",
    number1: "134",
    phone: "3048573",
    x34Gd73874Gf783Ff374Gfg4783Gf298H: "34gd73874gf783ff374gfg4783gf298h",
};

