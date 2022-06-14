import  React, { useState } from "react";
import styled from "styled-components";
import { useGetChainRelegationsQuery } from "../../../lib/chainApi";
import {
  UrbanistNormalNewCar172px,
  UrbanistMediumAbsoluteZero172px, 
 ValignTextMiddle
} from "../../../styledMixins";

function RelegationsContent(props) {
     //get relegations data
    const relegators = props?.data?.delegation_responses?.map((delegator) => {
        const delegatorsAddress = delegator?.delegation?.delegator_address
        const getRelegationData =useGetChainRelegationsQuery(delegatorsAddress)
        const relegatorsData =getRelegationData?.data?.redelegation_responses.map((relegatorsDetails) => {
          return relegatorsDetails
        })
        return relegatorsData
    })
  //relegators?.map((relegator) => {
    // console.log(relegator)
  //})

    return (
         <>
        <Address>Address</Address>
        <Amount>Amount</Amount>
            <OverlapGroup10>
            <AddressValue>uuu....jjkkk</AddressValue>
           <AmountValue>
            7990999
             </AmountValue>
          </OverlapGroup10>
      </>
    )
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

export default RelegationsContent