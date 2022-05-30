import React from "react";
import styled from "styled-components";
import { UrbanistSemiBoldBlack172px, ValignTextMiddle } from "../../styledMixins";


function BlocksTilte(props) {
  const { height, hash, proposer, noOfTxs, time } = props;

  return (
    <LatestBlocksTilte1>
      <BlockHeight>{height}</BlockHeight>
      <Hash>{hash}</Hash>
      <Proposer>{proposer}</Proposer>
      <NoOfTxs>{noOfTxs}</NoOfTxs>
      <Time>{time}</Time>
    </LatestBlocksTilte1>
  );
}

const LatestBlocksTilte1 = styled.div`
  ${UrbanistSemiBoldBlack172px}
  margin-top: 18px;
  margin-left: 14.64px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 1158px;
`;

const BlockHeight = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-top: 0;
  min-width: 95px;
  letter-spacing: 0;
`;

const Hash = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 100px;
  margin-top: 0;
  min-width: 39px;
  letter-spacing: 0;
`;

const Proposer = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 287px;
  margin-top: 0;
  min-width: 69px;
  letter-spacing: 0;
`;

const NoOfTxs = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 323px;
  margin-top: 0;
  min-width: 77px;
  letter-spacing: 0;
`;

const Time = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 118px;
  margin-top: 0;
  letter-spacing: 0;
`;

export default BlocksTilte;
