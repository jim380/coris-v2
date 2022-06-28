import  React, { useState } from "react";
import styled from "styled-components";
import { useGetChainRedelegationsQuery } from "../../../lib/chainApi";
import {
  UrbanistNormalNewCar172px,
  UrbanistMediumAbsoluteZero172px, 
 ValignTextMiddle
} from "../../../styledMixins";
import { formatHash } from "../../Util/format";

function RedelegationsContent(props) {
     //get relgations details
    const getRedelegators = props?.data?.delegation_responses?.map((delegator) => {
        const delegatorsAddress = delegator?.delegation?.delegator_address
        const redelegationData =useGetChainRedelegationsQuery(delegatorsAddress)
        return redelegationData
    })


    const relegatorsDetails = getRedelegators?.map((data) => {
     return data?.data?.redelegation_responses.map((r) => {
         console.log(r?.redelegation)
     })
  })
 console.log(relegatorsDetails)

    return (
         <>
        <Address>Address</Address>
        <From>From</From>
        <To>To</To>
        <Amount>Amount</Amount>
        <Date>To Be Redelegated On</Date>
          {getRedelegators?.map((data) => {
            return data?.data?.redelegation_responses?.map((reDelegator) => 
            <OverlapGroup10>
            <AddressValue>{formatHash(reDelegator?.redelegation?.validator_dst_address, 10, '...')}</AddressValue>
           <FromValue>7990999</FromValue>
           <ToValue>7990999</ToValue>
           <AmountValue>7990999</AmountValue>
           <DateValue>7990999</DateValue>
          </OverlapGroup10>
 ) })}
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
  margin-left: 700px;
  margin-top: -18px;
  min-width: 69px;
  letter-spacing: 0;
`;

const From = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 250px;
  margin-top: -18px;
  min-width: 69px;
  letter-spacing: 0;
`;

const To = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 500px;
  margin-top: -18px;
  min-width: 69px;
  letter-spacing: 0;
`;

const Date = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 950px;
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
  margin-left: 130px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;
const FromValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 120px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;
const ToValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 160px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;
const DateValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 230px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

export default RedelegationsContent