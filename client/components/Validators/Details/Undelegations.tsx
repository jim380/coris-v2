import  React, { useState } from "react";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistMediumAbsoluteZero172px, 
 ValignTextMiddle
} from "../../../styledMixins";
import { formatHash, formatTimeDateYear, sortUnDelegationsByBalance } from "../../Util/format";

function UndelegationsContent(props) {
    const UndelegationsData = props?.data?.unbonding_responses?.map((delegator) => {
       return delegator
    })
    sortUnDelegationsByBalance(UndelegationsData)
 console.log(UndelegationsData)
    return (
         <>
        <Address>Address</Address>
        <Amount>Amount</Amount>
        <Height>Creation Height</Height>
        <Time>Completion Time</Time>
          {UndelegationsData?.map((delegator) =>
            <OverlapGroup10>
            <AddressValue>{formatHash(delegator?.delegator_address, 10, '.....')}</AddressValue>
           <AmountValue>{delegator?.entries[0]?.balance}</AmountValue>
           <HeightValue>{delegator?.entries[0]?.creation_height}</HeightValue>
           <TimeValue>{formatTimeDateYear(delegator?.entries[0]?.completion_time)}</TimeValue>
          </OverlapGroup10>
          )}
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
  margin-left: 450px;
  margin-top: -18px;
  min-width: 69px;
  letter-spacing: 0;
`;

const Height = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 650px;
  margin-top: -18px;
  min-width: 69px;
  letter-spacing: 0;
`;

const Time = styled.div`
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
  margin-left: 330px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const HeightValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 120px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const TimeValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 80px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

export default UndelegationsContent