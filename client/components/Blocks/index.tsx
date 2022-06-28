import  React from "react";
import styles from "./Blocks.module.css";
import {formatTime, formatHash} from "../Util/format"
import LatestBlocksTilte from "./BlocksTitle";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px 
} from "../../styledMixins";


function Blocks(props) {
  const {
    getBlocks
  } = props;
 //console.log(getBlocks)
  return (
    <>
    <Title>Blocks</Title>
    <LatestBlocks1>
      <LatestBlocksTilte
        height={BlocksTitleData.height}
        hash={BlocksTitleData.hash}
        proposer={BlocksTitleData.proposer}
        noOfTxs={BlocksTitleData.noOfTxs}
        time={BlocksTitleData.time}
      />
      {getBlocks.map((block) => 
      <OverlapGroup10>
        <HeightValue>{block?.height? block.height : null}</HeightValue>
        <HashValue>{block?.hash? formatHash(block.hash, 15, '....') : null}</HashValue>
        <Ellipse8></Ellipse8>
        <ProposerValue>{block?.height? block.height : null}</ProposerValue>
        <NumberOfTxs>{block?.noTxs}</NumberOfTxs>
        <TimeValue>{block?.time? formatTime(block.time): null}</TimeValue>
      </OverlapGroup10>
      )}
    </LatestBlocks1>
    </>
  );
}

const BlocksTitleData = {
  height: "Block Height",
  hash: "Hash",
  proposer: "Proposer",
  noOfTxs: "No. of Txs",
  time: "Time",
};

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 112px;
  letter-spacing: 0;
  margin-top: 30px
`;

const LatestBlocks1 = styled.div`
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

const HeightValue = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  margin-top: 0.33px;
  min-width: 74px;
  letter-spacing: 0;
`;

const HashValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 125px;
  margin-top: 0.33px;
  min-width: 167px;
  letter-spacing: 0;
`;

const Ellipse8 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--roman);
  border-radius: 15.93px;
`;

const ProposerValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 14px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const NumberOfTxs = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 247px;
  margin-top: 0.33px;
  min-width: 9px;
  letter-spacing: 0;
`;

const TimeValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 186px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
`;

export default Blocks;
