import  React, { useState } from "react";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistMediumAbsoluteZero172px,
  ValignTextMiddle
} from "../../../styledMixins";
import { sortDelegatorsByAmount } from "../../Util/format";

function DelegationsContent(props) {
    const delegatorsData = props?.data?.delegation_responses?.map((delegator) => {
        return delegator
    })
sortDelegatorsByAmount(delegatorsData)   
//console.log(delegatorsData)
  return (
    <>
    <Address>Address</Address>
    <Amount>Amount</Amount>
        {delegatorsData?.map((delegator) =>
        <OverlapGroup10>
        <AddressValue>{delegator?.delegation?.delegator_address}</AddressValue>
       <AmountValue>{delegator?.balance?.amount +' '+ delegator?.balance?.denom}</AmountValue>
      </OverlapGroup10>
   )}
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
  margin-left: 850px;
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

export default DelegationsContent;
