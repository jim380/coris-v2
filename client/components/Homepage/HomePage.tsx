import  React from "react";
import styles from "../layout/Layout.module.css";
import {formatTime, formatHash} from "../Util/format"
import styled from "styled-components";
import Group7277 from './Group7277'
import Group7273 from './Group7273'
import Group7274 from './Group7274'
import Group7278 from './Group7278'
import Group7279 from './Group7279'
import Group7280 from './Group7280'
import Details from './Details'
import Details2 from './Details2'
import  LatestBlocksTilte from './LatestBlocksTilte'
import Logo4 from "./Logo4";



import {
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack26px,
  UrbanistSemiBoldSoap24px,
  UrbanistNormalBlack172px,
  UrbanistSemiBoldBlueBell24px,
  UrbanistNormalBlack24px,
  UrbanistNormalNewCar172px,
  UrbanistBoldChambray21px,
  UrbanistSemiBoldBlack12px,
  UrbanistBoldBlack16px,
  UrbanistBoldBlack20px,
  UrbanistLightBlack24px,
  UrbanistBoldBlack40px,
  UrbanistLightBlack15px,
  UrbanistMediumBlack18px,
  ValignTextMiddle,
} from "../../styledMixins";


function HomePageContent(props) {
  const {
    title,
    text2,
    text3,
    text4,
    text5,
    time,
    price,
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
    blocks,
    group7277Props,
    logo4Props,
    group7273Props,
    group7274Props,
    group7278Props,
    group7279Props,
    group7280Props,
    detailsProps,
    details2Props,
    latestBlocksTilteProps,
  } = props;
  //console.log(blocks)
    return(
     <>
      <FlexRow1>
      <FlexCol3>
        <Title>{title}</Title>
        <LiveLineChartSection>
          <OverlapGroup1>
            <Group7277
              vector2={group7277Data.vector2}
              price={group7277Data.price}
              x56824H={group7277Data.x56824H}
            />
            <OverlapGroup>
              <Rectangle21></Rectangle21>
              <Rectangle23></Rectangle23>
              <Rectangle22></Rectangle22>
              <Rectangle24></Rectangle24>
              <Text2>{text2}</Text2>
              <Text3>{text3}</Text3>
              <Text4>{text4}</Text4>
              <Text5>{text5}</Text5>
              <Vector1 src="/img/vector-1@1x.svg" />
              <Path4 src="/img/path-4@2x.svg" />
              <Oval8Copy></Oval8Copy>
              <Time>{time}</Time>
              <Sell>
                <Oval7></Oval7>
                <Price>{price}</Price>
              </Sell>
              <LineChart src="/img/line-chart@1x.svg" />
              <Oval8></Oval8>
            </OverlapGroup>
            <Logo4 asset61={logo4Data.asset61} asset71={logo4Data.asset71} />
          </OverlapGroup1>
        </LiveLineChartSection>
      </FlexCol3>
      <FlexCol4>
        <MarketCap>
          <Group7273 marketCap={group7273Data.marketCap} x24ThVol={group7273Data.x24ThVol} />
          <Group7274 phone1={group7274Data.phone1} phone2={group7274Data.phone2} />
        </MarketCap>
        <OverlapGroup12>
          <Group7322>
            <Group7278 latestBlock={group7278Data.latestBlock} phone={group7278Data.phone} />
            <Group7279 blockTime={group7279Data.blockTime} x602S={group7279Data.x602S} />
            <Group7280 chain={group7280Data.chain} corichain1={group7280Data.corichain1} />
          </Group7322>
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
       {blocks?.map((block: any) =>
      <OverlapGroup10>
       <Phone2>{block.block.header.height}</Phone2>
        <X34567efe34g6j7k85h>{formatHash(block.block_id.hash, 10, "....")}</X34567efe34g6j7k85h>
        <Ellipse8></Ellipse8>
        <DgtizeStake>{block.block.header.height}</DgtizeStake>
        <Number>{block.block.data.txs.length}</Number>
        <X6sAgo>{formatTime(block.block.header.time)}</X6sAgo>
      </OverlapGroup10>
)}
    </LatestBlocks1>
    </>
    )
}


const group7277Data = {
  vector2: "/img/vector-2@2x.svg",
  price: "$0.11",
  x56824H: "5.68% (24h)",
};

const logo4Data = {
  asset61: "/img/asset-6-1@2x.png",
  asset71: "/img/asset-7-1@2x.png",
};

const group7273Data = {
  marketCap: "Market Cap",
  x24ThVol: "24th Vol",
};

const group7274Data = {
  phone1: "$113 987 435",
  phone2: "$113 987 435",
};

const group7278Data = {
  latestBlock: "Latest Block",
  phone: "6 508 366",
};

const group7279Data = {
  blockTime: "Block Time",
  x602S: "6.02s",
};

const group7280Data = {
  chain: "Chain",
  corichain1: "corichain-1",
};

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



const SideNavigation = styled.div`
  height: 1123px;
  display: flex;
  align-items: flex-start;
  min-width: 370px;
`;

const OverlapGroup16 = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 82px 59px;
  align-items: flex-start;
  min-height: 1123px;
  background-color: var(--chambray);
  border-radius: 0px 30px 30px 0px;
  box-shadow: 0px 20px 50px #000d7d99;
`;

const FlexRow = styled.div`
  height: 486px;
  margin-top: 185px;
  display: flex;
  align-items: flex-start;
  min-width: 205px;
`;

const FlexCol = styled.div`
  width: 41px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 486px;
`;

const SolidGeneralChartPie = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 1px;
`;

const IconUser = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 72px;
`;

const Icon = styled.img`
  width: 40px;
  height: 41px;
  margin-top: 71px;
`;

const Icon1 = styled.img`
  width: 40px;
  height: 41px;
  margin-top: 69px;
`;

const FlexCol1 = styled.div`
  width: 125px;
  align-self: center;
  margin-left: 13px;
  margin-bottom: 2.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 477px;
`;

const Overview = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  font-family: var(--font-family-urbanist);
  font-weight: 600;
  color: var(--coconut);
  font-size: var(--font-size-xxxxl);
  letter-spacing: 0;
`;

const Validators = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlueBell24px}
            height: 29px;
  margin-top: 85px;
  letter-spacing: 0;
`;

const Blocks = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
  margin-top: 83px;
  letter-spacing: 0;
`;

const Proposals = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
  margin-top: 82px;
  letter-spacing: 0;
`;

const Ellipse5 = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 14px;
  margin-top: 13px;
  background-color: var(--coconut);
  border-radius: 6px;
`;




const FlexCol2 = styled.div`
  width: 1384px;
  margin-left: 6px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2367px;
`;



const TopNavBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1317px;
`;

const NightmodeButton = styled.div`
  height: 64px;
  margin-left: 16px;
  display: flex;
  padding: 16px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 64px;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OutlineGeneralMoon = styled.img`
  width: 31px;
  height: 31px;
`;




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

const Rectangle21 = styled.div`
  position: absolute;
  width: 2px;
  height: 8px;
  top: 293px;
  left: 48px;
  background-color: var(--gray);
`;

const Rectangle23 = styled.div`
  position: absolute;
  width: 2px;
  height: 8px;
  top: 293px;
  left: 496px;
  background-color: var(--gray);
`;

const Rectangle22 = styled.div`
  position: absolute;
  width: 2px;
  height: 8px;
  top: 293px;
  left: 272px;
  background-color: var(--gray);
`;

const Rectangle24 = styled.div`
  position: absolute;
  width: 2px;
  height: 8px;
  top: 293px;
  left: 720px;
  background-color: var(--gray);
`;

const Text2 = styled.div`
  ${UrbanistSemiBoldBlack12px}
  position: absolute;
  top: 303px;
  left: 34px;
  letter-spacing: 0.96px;
`;

const Text3 = styled.div`
  ${UrbanistSemiBoldBlack12px}
  position: absolute;
  top: 303px;
  left: 258px;
  letter-spacing: 0.96px;
`;

const Text4 = styled.div`
  ${UrbanistSemiBoldBlack12px}
  position: absolute;
  top: 303px;
  left: 480px;
  letter-spacing: 0.96px;
`;

const Text5 = styled.div`
  ${UrbanistSemiBoldBlack12px}
  position: absolute;
  top: 303px;
  left: 704px;
  letter-spacing: 0.96px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 801px;
  height: 2px;
  top: 292px;
  left: 2px;
`;

const Path4 = styled.img`
  position: absolute;
  width: 2px;
  height: 321px;
  top: 6px;
  left: 519px;
`;

const Oval8Copy = styled.div`
  position: absolute;
  width: 79px;
  height: 79px;
  top: 70px;
  left: 482px;
  border-radius: 39.58px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(71.00000336766243, 58.00000034272671, 210.00000268220901) 0%,
    rgba(71.00000336766243, 58.00000034272671, 210.00000268220901, 0) 100%
  );
  opacity: 0.2;
`;

const Time = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 72px;
  height: 18px;
  top: 285px;
  left: 512px;
  font-family: var(--font-family-urbanist);
  font-weight: 400;
  color: var(--ocean-blue-pearl);
  font-size: 13.2px;
  text-align: center;
  letter-spacing: -0.26px;
  line-height: 22px;
  white-space: nowrap;
`;

const Sell = styled.div`
  position: absolute;
  height: 35px;
  top: 0;
  left: 500px;
  display: flex;
  padding: 6px 17.6px;
  align-items: flex-start;
  min-width: 99px;
  border-radius: 26.39px;
  box-shadow: 0px 6.596456527709961px 17.590551376342773px #1bc0ed0f;
  backdrop-filter: blur(16.49114227294922px) brightness(100%);
  -webkit-backdrop-filter: blur(16.49114227294922px) brightness(100%);
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.12999999523162842) 100%);
`;

const Oval7 = styled.div`
  width: 9px;
  height: 9px;
  align-self: center;
  margin-top: 0;
  background-color: var(--ocean-blue-pearl);
  border-radius: 4.4px;
`;

const Price = styled.div`
  min-height: 21px;
  margin-left: 9px;
  font-family: var(--font-family-urbanist);
  font-weight: 400;
  color: var(--ocean-blue-pearl);
  font-size: 17.6px;
  letter-spacing: 0.28px;
`;

const LineChart = styled.img`
  position: absolute;
  width: 803px;
  height: 223px;
  top: 109px;
  left: 0;
`;

const Oval8 = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 101px;
  left: 512px;
  background-color: #4639d2;
  border-radius: 8.8px;
  box-shadow: 0px 4.397637844085693px 8.795275688171387px #00dea352;
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

const Group7322 = styled.div`
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

const OverlapGroup9 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 13.8px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--white);
`;

const Ellipse81 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--navy-blue);
  border-radius: 15.93px;
`;

const DgtizeStake1 = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 14px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 247px;
  margin-top: 0.33px;
  min-width: 9px;
  letter-spacing: 0;
`;

const OverlapGroup8 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 13.8px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Ellipse82 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--caribbean-green);
  border-radius: 15.93px;
`;

const Ellipse83 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--lavender-magenta);
  border-radius: 15.93px;
`;

const Ellipse84 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--gray);
  border-radius: 15.93px;
`;

const Ellipse85 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--mercury);
  border-radius: 15.93px;
`;

const Ellipse86 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--brilliant-rose);
  border-radius: 15.93px;
`;

const Ellipse87 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--eminence);
  border-radius: 15.93px;
`;

const Ellipse88 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--cyan--aqua);
  border-radius: 15.93px;
`;

const Ellipse89 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 156px;
  background-color: var(--chartreuse-yellow);
  border-radius: 15.93px;
`;



const FlexRow6 = styled.div`
  height: 522px;
  margin-top: 44px;
  display: flex;
  padding: 26px 190px;
  align-items: center;
  min-width: 1336px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol6 = styled.div`
  width: 89px;
  margin-bottom: 74.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 168px;
`;

const Company = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack20px}
            height: 24px;
  letter-spacing: 0;
`;

const About = styled.div`
  ${ValignTextMiddle}
  ${UrbanistMediumBlack18px}
            height: 22px;
  margin-top: 20px;
  letter-spacing: 0;
`;

const Security = styled.div`
  ${ValignTextMiddle}
  ${UrbanistMediumBlack18px}
            height: 22px;
  margin-top: 12px;
  letter-spacing: 0;
`;

const FlexCol7 = styled.div`
  width: 134px;
  margin-left: 100px;
  margin-bottom: 108.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 134px;
`;

const FlexCol8 = styled.div`
  width: 289px;
  position: relative;
  align-self: flex-start;
  margin-left: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 452px;
`;

const Community = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack20px}
            height: 24px;
  margin-top: 64px;
  margin-right: 4px;
  min-width: 107px;
  letter-spacing: 0;
`;

const About1 = styled.div`
  ${ValignTextMiddle}
  ${UrbanistMediumBlack18px}
            height: 22px;
  margin-top: 20px;
  margin-right: 61px;
  min-width: 50px;
  letter-spacing: 0;
`;

const Security1 = styled.div`
  ${ValignTextMiddle}
  ${UrbanistMediumBlack18px}
            height: 22px;
  margin-top: 12px;
  margin-right: 44px;
  min-width: 67px;
  letter-spacing: 0;
`;

const Place3 = styled.div`
  ${ValignTextMiddle}
  ${UrbanistMediumBlack18px}
            height: 22px;
  margin-top: 12px;
  margin-right: 46px;
  min-width: 65px;
  letter-spacing: 0;
`;

const Climate = styled.div`
  ${ValignTextMiddle}
  ${UrbanistMediumBlack18px}
            height: 22px;
  margin-top: 12px;
  margin-right: 48px;
  min-width: 63px;
  letter-spacing: 0;
`;

const FlexRow7 = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: flex-start;
  min-width: 289px;
`;

const IconPaperPlane = styled.img`
  width: 24px;
  height: 24px;
`;

const IconLinkedin = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 29px;
`;

const Eosadolor382gmailcom = styled.div`
  ${ValignTextMiddle}
  ${UrbanistLightBlack15px}
            height: 18px;
  margin-top: 64px;
  margin-right: 1px;
  min-width: 170px;
  letter-spacing: 0;
`;

const FlexCol9 = styled.div`
  width: 92px;
  margin-left: 7px;
  margin-bottom: 74.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 168px;
`;

export default HomePageContent
