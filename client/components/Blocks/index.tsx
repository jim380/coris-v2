import  React from "react";
import Link from "next/link";
import {formatTime, formatHash, getValidatorsLogoFromWebsites} from "../Util/format"
import LatestBlocksTilte from "./BlocksTitle";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px 
} from "../../styledMixins";
import { sha256 } from "@cosmjs/crypto";
import { Bech32, fromBase64, toHex, fromHex, toBech32  } from "@cosmjs/encoding";
import { useGetChainActiveValidatorsQuery } from "../../lib/chainApi";


function Blocks(props) {
  const {
    getBlocks
  } = props;
 //console.log(getBlocks)

  //function that receieves proposer address and returns the validators details
const getChainValidators = useGetChainActiveValidatorsQuery()
const joinedBlocksValidatorsData = getBlocks.map((block)=> {
   //convert proposer address to cosmosvalcons
   const proposerToBech32 = toBech32("cosmosvalcons", fromHex(block.proposer))
  
   const getActiveChainValidators = getChainValidators?.data?.validators.map((validator) => {
     //fetch just the active validators
    //get the consensus pubkey
    const ed25519PubkeyRaw = fromBase64(validator.consensus_pubkey.key);
    const addressData = sha256(ed25519PubkeyRaw).slice(0, 20);
    const bech32Address = Bech32.encode("cosmosvalcons", addressData);
     
    if (bech32Address === proposerToBech32){
      
      return {validator, block}

    }
   })
   return getActiveChainValidators
})
//console.log(joinedBlocksValidatorsData)

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
       {joinedBlocksValidatorsData.map((details) => {
          return details?.map((data) => {
             if (data !== undefined){
               console.log(data)
            return(
      <OverlapGroup10>
         <Link href='/blocks[height]' as={`/blocks/${data.block.height }`} ><a>
        <HeightValue>{data.block?.height? data.block.height : null}</HeightValue>
        </a></Link>
        <HashValue>{data.block?.hash? formatHash(data.block.hash, 15, '....') : null}</HashValue>
        <Link href='/validators[address]' as={`/validators/${data.validator.operator_address}`} ><a>
        <ProposerValue>
        <img className="img" src={getValidatorsLogoFromWebsites(data?.validator?.description?.website)} alt="" />
                  {data?.validator?.description?.moniker}
        </ProposerValue>
        </a></Link>
        <NumberOfTxs>{data?.block?.noTxs}</NumberOfTxs>
        <TimeValue>{data?.block?.time? formatTime(data?.block.time): null}</TimeValue>
      </OverlapGroup10>
         )}
        })
    })
   }   
    </LatestBlocks1>
    <style jsx>{`
           .img {
           margin-right: 10px;
           }
         `}</style>
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

const ProposerValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 140px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const NumberOfTxs = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 300px;
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
