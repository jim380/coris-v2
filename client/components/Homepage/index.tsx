import React from "react";
import styles from "../layout/Layout.module.css";
import { formatTime, formatHash } from "../Util/format"
import styled from "styled-components";
import Details from './Details'
import Details2 from './Details2'
import LatestBlocksTilte from './LatestBlocksTilte'
import {
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack26px,
  UrbanistNormalBlack172px,
  UrbanistNormalBlack24px,
  UrbanistNormalNewCar172px,
  UrbanistBoldChambray21px,
  UrbanistBoldBlack16px,
  UrbanistLightBlack24px,
  UrbanistBoldBlack40px,
} from "../../styledMixins";

import { sha256 } from "@cosmjs/crypto";
import { Bech32, fromBase64, toHex, fromHex, toBech32 } from "@cosmjs/encoding";
import { encodeBech32Pubkey } from "@cosmjs/launchpad";
import { pubkeyToAddress } from "@cosmjs/amino";
import { decodeBech32Pubkey } from "@cosmjs/launchpad"
import { useGetChainActiveValidatorsQuery } from "../../lib/chainApi";
import Blocks from "../Blocks";


function HomePageContent(props) {
  const {
    title,
    apr,
    text1,
    place1,
    address1,
    percent1,
    percent2,
    inflation,
    percent3,
    communityPool,
    address2,
    tokenomics,
    place2,
    bonded,
    phone1,
    phone2,
    place3,
    percent4,
    latestBlocks,
    viewAll,
    getBlocks,
  } = props;
  //console.log(getBlocks)


  // Ed25519 pubkey from genesis
  const pubkey = {
    type: "tendermint/PubKeyEd25519",
    value: "w3rKE+tQoLK8G+XPmjn+NszCk07iQ0sWaBbN5hQZcBY=",
  };

  const ed25519PubkeyRaw = fromBase64(pubkey.value);
  const addressData = sha256(ed25519PubkeyRaw).slice(0, 20);
  const bech32Address = Bech32.encode("cosmosvalcons", addressData);
  //console.log(bech32Address); 

  const bech32Pubkey = encodeBech32Pubkey(pubkey, "cosmosvalconspub");
  //console.log(bech32Pubkey)

  const p = decodeBech32Pubkey(
    'cosmosvalconspub1zcjduepqcdav5ylt2zst90qmuh8e5w07xmxv9y6wufp5k9ngzmx7v9qewqtqkcq4z8',
  );
  //console.log(p)
  const a = sha256(fromBase64(p.value)).slice(0, 20);
  const address = toHex(a).toUpperCase();
  //console.log(address)

  //function that receieves proposer address and returns the validators details
  const getChainValidators = useGetChainActiveValidatorsQuery()
  const joinedBlocksValidatorsData = getBlocks.map(block => {
    //convert proposer address to cosmosvalcons
    const proposerToBech32 = toBech32("cosmosvalcons", fromHex(block.proposer))

    const getActiveChainValidators = getChainValidators?.data?.validators.map((validator) => {
      //fetch just the active validators
      //get the consensus pubkey
      const ed25519PubkeyRaw = fromBase64(validator.consensus_pubkey.key);
      const addressData = sha256(ed25519PubkeyRaw).slice(0, 20);
      const bech32Address = Bech32.encode("cosmosvalcons", addressData);

      if (bech32Address === proposerToBech32) {
        return { ...validator, ...block }
      }
    })

    return getActiveChainValidators

  })

  //console.log(joinedBlocksValidatorsData)
  joinedBlocksValidatorsData.map((data, i) => {
    console.log(data)
  })


  return (
    <>
      <FlexRow1>
        <FlexCol3>
          <Title>{title}</Title>
          <LiveLineChartSection>
            <OverlapGroup1>
              <OverlapGroup>
                chat.js here
              </OverlapGroup>
            </OverlapGroup1>
          </LiveLineChartSection>
        </FlexCol3>


        <FlexCol4>
          <MarketCap>
            <MarketCapTitle>
              <MarketCap0>marketCap</MarketCap0>
              <X24thVol>24h Vol</X24thVol>
            </MarketCapTitle>
            <MarketCapValue>
              <Phone90>$88999</Phone90>
              <Phone900>$89899</Phone900>
            </MarketCapValue>
          </MarketCap>
          <OverlapGroup12>
            <GetOneBlock>
              <LatestBlockTitle>
                <LatestBlock>latest Block</LatestBlock>
                <Phone00>{getBlocks[0]?.height}</Phone00>
              </LatestBlockTitle>
              <BlockTimeTitle>
                <BlockTime>Block Time</BlockTime>
                <X602s>{formatTime(getBlocks[0]?.time)}</X602s>
              </BlockTimeTitle>
              <ChainName>
                <Chain>chain</Chain>
                <Corichain1>Coris</Corichain1>
              </ChainName>
            </GetOneBlock>
            <Rectangle31></Rectangle31>
            <Rectangle32></Rectangle32>
          </OverlapGroup12>
        </FlexCol4>
      </FlexRow1>

      <FlexRow2>
        <APR>
          <APR1>{apr}</APR1>
          <Text1>{text1}</Text1>
        </APR>
        <OverlapGroup13>
          <Place>{place1}</Place>
          <Address>{address1}</Address>
        </OverlapGroup13>
        <OnlineVotingPower>
          <Details
            onlineVotingPower={detailsData.onlineVotingPower}
            x36516M1={detailsData.x36516M1}
            place={detailsData.place}
            x36516M2={detailsData.x36516M2}
          />
          <OverlapGroup2>
            <Percent>{percent1}</Percent>
            <Ellipse9></Ellipse9>
          </OverlapGroup2>
        </OnlineVotingPower>
        <ActiveValidators>
          <Details2
            activeValidators={details2Data.activeValidators}
            number1={details2Data.number1}
            outOf={details2Data.outOf}
            number2={details2Data.number2}
          />
          <OverlapGroup3>
            <Vector src="/img/ellipse-11@2x.svg" />
            <Percent1>{percent2}</Percent1>
          </OverlapGroup3>
        </ActiveValidators>
      </FlexRow2>

      <FlexRow3>
        <Inflation>
          <APR1>{inflation}</APR1>
          <Text1>{percent3}</Text1>
        </Inflation>
        <OverlapGroup14>
          <Place>{communityPool}</Place>
          <Address>{address2}</Address>
        </OverlapGroup14>
        <OverlapGroup15>
          <FlexCol5>
            <APR1>{tokenomics}</APR1>
            <FlexRow4>
              <Rectangle28></Rectangle28>
              <Place1>{place2}</Place1>
              <Rectangle34></Rectangle34>
              <Bonded>{bonded}</Bonded>
            </FlexRow4>
            <PhoneContainer>
              <Phone>{phone1}</Phone>
              <Phone1>{phone2}</Phone1>
            </PhoneContainer>
          </FlexCol5>
          <OverlapGroup4>
            <Ellipse11 src="/img/ellipse-11@2x.svg" />
            <Place2>{place3}</Place2>
            <Percent2>{percent4}</Percent2>
          </OverlapGroup4>
        </OverlapGroup15>
      </FlexRow3>

      <FlexRow5>
        <LatestBlocks>{latestBlocks}</LatestBlocks>
        <ViewAll>{viewAll}</ViewAll>
      </FlexRow5>

      <LatestBlocks1>
        <LatestBlocksTilte
          height={latestBlocksTilteData.height}
          hash={latestBlocksTilteData.hash}
          proposer={latestBlocksTilteData.proposer}
          noOfTxs={latestBlocksTilteData.noOfTxs}
          time={latestBlocksTilteData.time}
        />
        {getBlocks?.map((block: any) =>
          <OverlapGroup10>
            <Phone2>{block?.height}</Phone2>
            <X34567efe34g6j7k85h>{ }</X34567efe34g6j7k85h>
            <Ellipse8></Ellipse8>
            <DgtizeStake>{block?.height}</DgtizeStake>
            <Number>{block?.noTxs}</Number>
            <X6sAgo>{block.time}</X6sAgo>
          </OverlapGroup10>
        )}
      </LatestBlocks1>
    </>
  )
}

const detailsData = {
  onlineVotingPower: "Online Voting power",
  x36516M1: "365.16m",
  place: "from",
  x36516M2: "365.16m",
};

const details2Data = {
  activeValidators: "Active Validators",
  number1: "100",
  outOf: "out of",
  number2: "251",
};

const latestBlocksTilteData = {
  height: "Height",
  hash: "Hash",
  proposer: "Proposer",
  noOfTxs: "No. of Txs",
  time: "Time",
};

const FlexRow1 = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const FlexCol3 = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  letter-spacing: 0;
`;

const LiveLineChartSection = styled.div`
  display: flex;
  padding: 0 13px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup1 = styled.div`
  width: 807px;
  height: 345px;
  position: relative;
  margin-bottom: -0.76px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 803px;
  height: 332px;
  top: 13px;
  left: 0;
`;

const FlexCol4 = styled.div`
  width: 30%;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  margin-top: 54px;
`;

const MarketCap = styled.div`
  position: relative;
  display: flex;
  padding: 0 18px;
  align-items: center;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
  height: 153px;
`;

const OverlapGroup12 = styled.div`
  position: relative;
  margin-top: 16px;
  border-radius: 20px;
  height: 50%;
`;

const GetOneBlock = styled.div`
  position: absolute;
  height: 174px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 13px;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Rectangle31 = styled.div`
  position: absolute;
  width: 5px;
  height: 174px;
  top: 0;
  left: 160px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(57.9999965429306, 66.00001126527786, 138.00000697374344, 0.2199999988079071) 0%,
    rgba(93.00000205636024, 83.00000265240669, 213.00000250339508, 0) 100%
  );
`;

const Rectangle32 = styled.div`
  position: absolute;
  width: 5px;
  height: 174px;
  top: 0;
  left: 314px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(57.9999965429306, 66.00001126527786, 138.00000697374344, 0.2199999988079071) 0%,
    rgba(93.00000205636024, 83.00000265240669, 213.00000250339508, 0) 100%
  );
`;

const FlexRow2 = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 1334px;
`;

const APR = styled.div`
  width: 149px;
  display: flex;
  flex-direction: column;
  padding: 31px 17px;
  align-items: flex-start;
  min-height: 174px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const APR1 = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

const OverlapGroup13 = styled.div`
  width: 435px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 26px 19px;
  align-items: flex-start;
  min-height: 174px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Place = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 5px;
  letter-spacing: 0;
`;

const Address = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 57px;
  letter-spacing: 2.08px;
`;

const OnlineVotingPower = styled.div`
  height: 174px;
  position: relative;
  margin-left: 16px;
  display: flex;
  padding: 39px 16px;
  align-items: center;
  min-width: 351px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup2 = styled.div`
  width: 95px;
  height: 95px;
  position: relative;
  align-self: flex-end;
  margin-left: 8px;
  border-radius: 47.5px;
`;

const Percent = styled.div`
  ${UrbanistBoldChambray21px}
  position: absolute;
  top: 35px;
  left: 21px;
  letter-spacing: 1.68px;
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 95px;
  height: 95px;
  top: 0;
  left: 0;
  border-radius: 47.5px;
  border: 10px solid var(--chambray);
`;

const ActiveValidators = styled.div`
  height: 174px;
  position: relative;
  margin-left: 16px;
  display: flex;
  padding: 39px 16px;
  align-items: center;
  min-width: 351px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup3 = styled.div`
  width: 95px;
  height: 95px;
  position: relative;
  align-self: flex-end;
  margin-left: 43px;
  border-radius: 47.5px;
  border: 10px solid var(--fog);
`;

const Vector = styled.img`
  position: absolute;
  width: 56px;
  height: 55px;
  top: -10px;
  left: 29px;
`;

const Percent1 = styled.div`
  ${UrbanistBoldChambray21px}
  position: absolute;
  top: 25px;
  left: 16px;
  letter-spacing: 1.68px;
`;

const FlexRow3 = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 1346px;
`;

const Inflation = styled.div`
  width: 149px;
  display: flex;
  flex-direction: column;
  padding: 31px 19px;
  align-items: flex-start;
  min-height: 174px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup14 = styled.div`
  width: 435px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 26px 18px;
  align-items: flex-start;
  min-height: 174px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup15 = styled.div`
  height: 174px;
  margin-left: 16px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 720px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol5 = styled.div`
  width: 347px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100px;
`;

const FlexRow4 = styled.div`
  ${UrbanistLightBlack24px}
  height: 34px;
  margin-top: 15px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 314px;
`;

const Rectangle28 = styled.div`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  background-color: var(--chambray);
  border-radius: 10px;
`;

const Place1 = styled.div`
  min-height: 29px;
  margin-left: 17px;
  min-width: 74px;
  letter-spacing: 0;
`;

const Rectangle34 = styled.div`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin-left: 66px;
  background-color: var(--fog-2);
  border-radius: 10px;
`;

const Bonded = styled.div`
  min-height: 29px;
  margin-left: 17px;
  letter-spacing: 0;
`;

const PhoneContainer = styled.div`
  ${UrbanistBoldBlack16px}
  height: 19px;
  align-self: flex-end;
  margin-top: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 300px;
`;

const Phone = styled.div`
  min-height: 19px;
  min-width: 114px;
  letter-spacing: 1.28px;
`;

const Phone1 = styled.div`
  min-height: 19px;
  margin-left: 72px;
  letter-spacing: 1.28px;
`;

const OverlapGroup4 = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  margin-left: 199px;
  border-radius: 60px;
  border: 13.6px solid var(--chambray);
`;

const Ellipse11 = styled.img`
  position: absolute;
  width: 67px;
  height: 67px;
  top: -14px;
  left: -14px;
`;

const Place2 = styled.div`
  position: absolute;
  top: 53px;
  left: 25px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--black-4);
  font-size: 13.6px;
  letter-spacing: 0;
`;

const Percent2 = styled.div`
  position: absolute;
  top: 24px;
  left: 19px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--chambray);
  font-size: 27.2px;
  letter-spacing: 2.18px;
`;

const FlexRow5 = styled.div`
  height: 38px;
  margin-top: 28px;
  margin-left: 5px;
  display: flex;
  align-items: flex-end;
  min-width: 1314px;
`;

const LatestBlocks = styled.div`
  min-height: 38px;
  min-width: 189px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--black);
  font-size: 32px;
  letter-spacing: 0;
`;

const ViewAll = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-left: 1043px;
  min-width: 82px;
  letter-spacing: 0;
`;

const LatestBlocks1 = styled.div`
  width: 1336px;
  position: relative;
  margin-top: 14px;
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

const Phone2 = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  margin-top: 0.33px;
  min-width: 74px;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h = styled.div`
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

const DgtizeStake = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 14px;
  margin-top: 0.33px;
  min-width: 97px;
  letter-spacing: 0;
`;

const Number = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 249px;
  margin-top: 0.33px;
  min-width: 9px;
  letter-spacing: 0;
`;

const X6sAgo = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 186px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
`;

const LatestBlockTitle = styled.div`
  width: 134px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const LatestBlock = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const Phone00 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

const BlockTimeTitle = styled.div`
  width: 118px;
  margin-left: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const BlockTime = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const X602s = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

const ChainName = styled.div`
  width: 136px;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const Chain = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Corichain1 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const MarketCapTitle = styled.div`
  ${UrbanistNormalBlack24px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MarketCap0 = styled.div`
  width: 137px;
  letter-spacing: 0;
`;

const X24thVol = styled.div`
  width: 119px;
  margin-top: 16px;
  margin-left: 4px;
  letter-spacing: 0;
`;

const MarketCapValue = styled.div`
  ${UrbanistBoldBlack26px}
  width: 182px;
  margin-left: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
`;

const Phone90 = styled.div`
  width: 176px;
  min-height: 23px;
  margin-left: 2px;
  letter-spacing: 2.08px;
`;

const Phone900 = styled.div`
  width: 176px;
  min-height: 23px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

export default HomePageContent
