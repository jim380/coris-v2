import React from "react";
import Link from "next/link";
import { formatTime, formatHash, getValidatorsLogoFromWebsites } from "../Util/format"
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
import { useGetChainActiveValidatorsQuery } from "../../lib/chainApi";

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

  //function that receieves proposer address and returns the validators details
  const getChainValidators = useGetChainActiveValidatorsQuery()
  const joinedBlocksValidatorsData = getBlocks.map((block) => {
    //convert proposer address to cosmosvalcons
    const proposerToBech32 = toBech32("cosmosvalcons", fromHex(block.proposer))

    const getActiveChainValidators = getChainValidators?.data?.validators.map((validator) => {
      //fetch just the active validators
      //get the consensus pubkey
      const ed25519PubkeyRaw = fromBase64(validator.consensus_pubkey.key);
      const addressData = sha256(ed25519PubkeyRaw).slice(0, 20);
      const bech32Address = Bech32.encode("cosmosvalcons", addressData);

      if (bech32Address === proposerToBech32) {
        return { validator, block }
      }
    })
    return getActiveChainValidators
  })

  // Ed25519 pubkey from genesis
  const pubkey = {
    type: "tendermint/PubKeyEd25519",
    value: "w3rKE+tQoLK8G+XPmjn+NszCk07iQ0sWaBbN5hQZcBY=",
  };

  const ed25519PubkeyRaw = fromBase64(pubkey.value);
  const addressData = sha256(ed25519PubkeyRaw).slice(0, 20);
  const bech32Address = Bech32.encode("cosmosvalcons", addressData);
  //console.log(bech32Address); 

  //console.log(joinedBlocksValidatorsData)
  joinedBlocksValidatorsData.map((data, i) => {
    console.log(data)
  })


  return (
    <>
      <Title>{title}</Title>
      <Grid>
        <GridItem className="first-item">chat.js here</GridItem>
        <GridItem className="second-item p-3">
          <FlexCol className="h-100">
            <Flex className="h-50 align-items-center">
              <MarketCapDef className="w-50">marketCap</MarketCapDef>
              <MarketCapVal className="w-50">$88999</MarketCapVal>
            </Flex>
            <Flex className="h-50 align-items-center">
              <MarketCapDef className="w-50">24h Vol</MarketCapDef>
              <MarketCapVal className="w-50">$88999</MarketCapVal>
            </Flex>
          </FlexCol>
        </GridItem>
        <GridItem className="third-item">
          <Flex className="h-100">
            <FlexCol className="w-50 align-items-center justify-content-center">
              <LatestBlock>latest Block</LatestBlock>
              <Phone00>{getBlocks[0]?.height}</Phone00>
            </FlexCol>
            <Divider></Divider>
            <FlexCol className="w-50 align-items-center justify-content-center">
              <BlockTime>Block Time</BlockTime>
              <X602s>{formatTime(getBlocks[0]?.time)}</X602s>
            </FlexCol>
            <Divider></Divider>
            <FlexCol className="w-50 align-items-center justify-content-center">
              <Chain>chain</Chain>
              <Corichain1>Coris</Corichain1>
            </FlexCol>
          </Flex>
        </GridItem>
      </Grid>
      <Grid1>
        <GridItem1 className="first-item">
          <FlexCenter className="h-100">
            <div>
              <APR1>{apr}</APR1>
              <Text1>{text1}</Text1>
            </div>
          </FlexCenter>
        </GridItem1>
        <GridItem1 className="second-item">
          <FlexCenter className="h-100">
            <OverlapGroup13>
              <Place>{place1}</Place>
              <Address>{address1}</Address>
            </OverlapGroup13>
          </FlexCenter>
        </GridItem1>
        <GridItem1 className="third-item">
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
        </GridItem1>
        <GridItem1 className="fourth-item">
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
        </GridItem1>
      </Grid1>
      <Grid1>
        <GridItem1 className="first-item">
          <FlexCenter className="h-100">
            <Inflation>
              <APR1>{inflation}</APR1>
              <Text1>{percent3}</Text1>
            </Inflation>
          </FlexCenter>
        </GridItem1>
        <GridItem1 className="second-item">
          <FlexCenter className="h-100">
            <OverlapGroup14>
              <Place>{communityPool}</Place>
              <Address>{address2}</Address>
            </OverlapGroup14>
          </FlexCenter>
        </GridItem1>
        <GridItem1 className="third-item span-last-ends">
          <Flex className="h-100 w-100 align-items-center" style={{ padding: "20px" }}>
            <FlexCol className="w-100">
              <APR1>{tokenomics}</APR1>
              <Flex>
                <FlexCol><Bullet /></FlexCol>
                <FlexCol style={{ margin: '0px 20px' }}>
                  <Place1>{place2}</Place1>
                  <Phone>{phone1}</Phone>
                </FlexCol>
                <FlexCol><Bullet className="light" /></FlexCol>
                <FlexCol style={{ margin: '0px 20px' }}>
                  <Bonded>{bonded}</Bonded>
                  <Phone1>{phone2}</Phone1>
                </FlexCol>
              </Flex>
            </FlexCol>
            <Flex className="h-100 p-3">
              <OverlapGroup2>
                <Percent>{percent1}</Percent>
                <Ellipse9></Ellipse9>
              </OverlapGroup2>
            </Flex>
          </Flex>
        </GridItem1>
      </Grid1>

      <Flex className="align-items-center justify-content-between">
        <LatestBlocks>{latestBlocks}</LatestBlocks>
        <ViewAll>{viewAll}</ViewAll>
      </Flex>
      <Container>
        <div className="tableTr">
          <table>
            <thead>
              <tr>
                <th>Height</th>
                <th>Hash</th>
                <th>Proposer</th>
                <th>No of Txs</th>
                <th>Time</th>
              </tr>
            </thead>

            {joinedBlocksValidatorsData.map((details) => {
              return details?.map((data) => {
                if (data !== undefined) {
                  console.log(data)
                  return (
                    <tr>
                      <Link href='/blocks[height]' as={`/blocks/${data.block.height}`} ><a>
                        <td>{data.block?.height ? data.block.height : null}</td> </a></Link>
                      <td>{data.block?.hash ? formatHash(data.block.hash, 15, '....') : null}</td>
                      <Link href='/validators[address]' as={`/validators/${data.validator.operator_address}`} ><a>
                        <td>
                          <img className="img" width={30} src={getValidatorsLogoFromWebsites(data?.validator?.description?.website)} alt="" />
                          {data?.validator?.description?.moniker}
                        </td>
                      </a></Link>
                      <td>{data?.block?.noTxs}</td>
                      <td>{data?.block?.time ? formatTime(data?.block.time) : null}</td>
                    </tr>
                  )
                }
              })
            })
            }
          </table>
        </div>
      </Container>
    </>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 20px 0px;
  width: 100%;
  grid-gap: 20px;
  @media screen and (max-width:1272px){
      grid-template-columns: repeat(6, 1fr);
    }
`;

const GridItem = styled.div`
  display: block;
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  height: 150px;
  &.first-item{
    grid-column: 1 / 4;
    grid-row: 1 / span 2;
    height: unset;
    @media screen and (max-width:1272px){
      grid-column: 1 / span 8;
    }
    @media screen and (max-width:838px){
      grid-column: 1 / span 8;
    }
  }
  &.second-item{
    grid-column: 4 / span 2;
    @media screen and (max-width:1272px){
      grid-column: 1 / span 3;
    };
    @media screen and (max-width:838px){
      grid-column: 1 / span 8;
    };
  }
  &.third-item{
    grid-column: 4 / span 2;
    @media screen and (max-width:1272px){
      grid-column: 4/ 9;
    };
    @media screen and (max-width:838px){
      grid-column: 1 / span 8;
    }
  }
  &.w-200px{
    width: 200px;
  }
  &.h-200px{
    height: 200px;
  }
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  margin: 20px 0px;
  width: 100%;
  grid-gap: 20px;
`;

const GridItem1 = styled.div`
  display: block;
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  height: 160px;
  @media screen and (max-width:1272px){
    grid-column: 1/ 5;
  }
  @media screen and (max-width:838px){
      grid-column: 1 / span 11;
    }
  &.second-item{
    grid-column: 2 / 4;
    @media screen and (max-width:1272px){
      grid-column: 5/ 11;
    }
    @media screen and (max-width:838px){
      grid-column: 1 / span 11;
    }
  }
  &.third-item{
    grid-column: 4 / 7;
    @media screen and (max-width:1272px){
      grid-column: 1/ 5;
    }
    @media screen and (max-width:838px){
      grid-column: 1 / span 11;
    }
  }
  &.fourth-item{
    grid-column: 7 / 10;
    @media screen and (max-width:1272px){
      grid-column: 5/ 11;
    }
    @media screen and (max-width:838px){
      grid-column: 1 / span 11;
    }
  }
  &.span-last-ends{
    grid-column: 4 / 10;
    @media screen and (max-width:1272px){
      grid-column: 1/ 11;
    }
    @media screen and (max-width:838px){
      grid-column: 1 / span 11;
    }
  }
`;

const Container = styled.div`
  display: block;
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  padding: 20px;
  margin: 20px 0px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
`;

const MarketCapDef = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarketCapVal = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Divider = styled.div`
  width: 5px;
  height: 90%;
  background: radial-gradient( 50% 50% at 50% 50%,rgba(57.9999965429306,66.00001126527786,138.00000697374344,0.2199999988079071) 0%,rgba(93.00000205636024,83.00000265240669,213.00000250339508,0) 100% );
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bullet = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: #3a428a;
  &.light{
    background: #d1d6ff;
  }
`;


































































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
  height: 426px;
  margin-top: 54px;
  display: flex;
  align-items: flex-end;
  min-width: 1336px;
`;

const FlexCol3 = styled.div`
  width: 835px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 426px;
`;

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  letter-spacing: 0;
  margin-top: 40px;
`;

const LiveLineChartSection = styled.div`
  height: 364px;
  margin-top: 14px;
  display: flex;
  padding: 0 13px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 835px;
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
  width: 485px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 364px;
`;

const MarketCap = styled.div`
  height: 174px;
  position: relative;
  display: flex;
  padding: 0 18px;
  align-items: center;
  min-width: 485px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup12 = styled.div`
  width: 485px;
  height: 174px;
  position: relative;
  margin-top: 16px;
  border-radius: 20px;
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
  min-width: 485px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;

const APR1 = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${UrbanistBoldBlack26px}
  letter-spacing: 2.08px;
`;

const OverlapGroup13 = styled.div`
  width: 435px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Place = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 5px;
  letter-spacing: 0;
`;

const Address = styled.div`
  ${UrbanistBoldBlack26px}
  letter-spacing: 2.08px;
  font-size: 16px !important;
`;

const OnlineVotingPower = styled.div`
  height: 90%;
  display: flex;
  padding: 39px 16px;
  width: 100%;
  padding-right: 30px;
`;

const OverlapGroup2 = styled.div`
  position: relative;
  align-items: center;
  margin-left: 8px;
  border-radius: 47.5px;
`;

const Percent = styled.div`
  ${UrbanistBoldChambray21px}
  position: relative;
  top: 35px;
  left:1px;
  letter-spacing: 1.68px;
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 95px;
  height: 95px;
  top: 0;
  left: -21px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 31px 19px;
  align-items: flex-start;
`;

const OverlapGroup14 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px 18px;
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
    font-weight: bold;
  letter-spacing: 1.28px;
`;

const Phone1 = styled.div`
  letter-spacing: 1.28px;
  font-weight: bold;
`;

const OverlapGroup4 = styled.div`
  width: 120px;
  height: 120px;
  left: 0px;

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
  display: flex;
  justify-content: space-between
  width: 100%;
`;

const LatestBlocks = styled.div`
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--black);
  font-size: 32px;
  letter-spacing: 0;
`;

const ViewAll = styled.div`
  ${UrbanistNormalBlack24px}
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
  margin-left: 150px;
  margin-top: 0.33px;
  min-width: 97px;
  letter-spacing: 0;
`;

const Number = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 310px;
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
  width: 141px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
`;

const MarketCap0 = styled.div`
  width: 137px;
  min-height: 23px;
  letter-spacing: 0;
`;

const X24thVol = styled.div`
  width: 119px;
  min-height: 23px;
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
