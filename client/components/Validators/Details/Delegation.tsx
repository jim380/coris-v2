import  React, { useState } from "react";
import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import {
  UrbanistNormalNewCar172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px, 
 ValignTextMiddle
} from "../../../styledMixins";
import RelegationsContent from "./Relegations";
import UndelegationsContent from "./Undelegations";

function DelegationsContent() {
 
  return (
    <>
    <Title>Delegations</Title>
    <Transactions>
    <Tabs defaultActiveKey="delegations" id="uncontrolled-tab-example" className="" variant="tabs">
    <Tab eventKey="delegations" title="Delegations">
    <Address>Address</Address>
    <Amount>Amount</Amount>
        <OverlapGroup10>
        <AddressValue>uuu....jjkkk</AddressValue>
       <AmountValue>
        7990999
         </AmountValue>
      </OverlapGroup10>
  </Tab>   
  <Tab eventKey="undelegations" title="Undelegations">
    <UndelegationsContent />
  </Tab>
  <Tab eventKey="redelegations" title="Redelegations">
  <RelegationsContent />
  </Tab>
 </Tabs>
    </Transactions>
    </>
  );
}

const Address = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-top: 15px;
  min-width: 95px;
  letter-spacing: 0;
`;

const Amount = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 550px;
  margin-top: -18px;
  min-width: 69px;
  letter-spacing: 0;
`;


const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 112px;
  letter-spacing: 0;
  margin-top: 30px
`;

const Transactions = styled.div`
  width: 1336px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 18.2px 16px;
  align-items: flex-start;
  min-height: 797px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup10 = styled.div`
  height: 60px;
  margin-top: 19px;
  display: flex;
  padding: 13.8px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const AddressValue = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  margin-top: 0.33px;
  min-width: 74px;
  letter-spacing: 0;
`;

const AmountValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 460px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

export default DelegationsContent;
