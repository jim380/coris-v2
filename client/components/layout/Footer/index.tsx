import styled from "styled-components";
import {
  UrbanistBoldBlack20px,
  UrbanistLightBlack15px,
  UrbanistMediumBlack18px,
  ValignTextMiddle,
} from "../../../styledMixins";
import Logo2 from "./Logo2";

function Footer(props) {
  const { company,
    about1,
    security1,
    place4,
    climate1,
    ourProjects,
    testnetPortal1,
    stakingPortal1,
    nodeMonitoring1,
    community,
    about2,
    security2,
    place5,
    climate2,
    iconPaper_Plane,
    iconLinkedin,
    iconInstagram,
    iconTwitter,
    solidBrandsYoutube,
    solidBrandsChrome,
    eosadolor382GmailCom,
    resources,
    about3,
    security3,
    place6,
    climate3,
    learn,
    testnetPortal2,
    stakingPortal2,
<<<<<<< HEAD
    nodeMonitoring2 } = props;
  return (
    <FlexFull>
      <Wrapper>
        <LogoContainer>
          <Logo2 asset62={logo2Data.asset62} asset72={logo2Data.asset72} asset81={logo2Data.asset81} />
        </LogoContainer>
        <Grid>
          <GridItem>
            <Header>{company}</Header>
            <Item>About</Item>
            <Item>Security</Item>
            <Item>Contact</Item>
            <Item>Climate</Item>
          </GridItem>
          <GridItem>
            <Header>{ourProjects}</Header>
            <Item>Testnet Portal</Item>
            <Item>Staking Portal</Item>
            <Item>Node Monitoring</Item>
          </GridItem>
          <GridItem>
            <Header>{community}</Header>
            <Item>About</Item>
            <Item>Security</Item>
            <Item>Contact</Item>
            <Item>Climate</Item>
          </GridItem>
          <GridItem>
            <Header>{resources}</Header>
            <Item>About</Item>
            <Item>Security</Item>
            <Item>Contact</Item>
            <Item>Climate</Item>
          </GridItem>
          <GridItem>
            <Header>{learn}</Header>
            <Item>Testnet Portal</Item>
            <Item>Staking Portal</Item>
            <Item>Node Monitoring</Item>
          </GridItem>
        </Grid>
        <FlexCol8>
          <FlexRow7>
            <IconPaperPlane src={iconPaper_Plane} />
            <IconLinkedin src={iconLinkedin} />
            <IconLinkedin src={iconInstagram} />
            <IconLinkedin src={iconTwitter} />
            <IconLinkedin src={solidBrandsYoutube} />
            <IconLinkedin src={solidBrandsChrome} />
          </FlexRow7>
          <Eosadolor382gmailcom>{eosadolor382GmailCom}</Eosadolor382gmailcom>
        </FlexCol8>
      </Wrapper>


      {/* <FlexCol6>
          <Company>{company}</Company>
          <About>{about1}</About>
          <Security>{security1}</Security>
          <Security>{place4}</Security>
        </FlexCol6>
        <FlexCol7>
          <Company>{ourProjects}</Company>
          <About>{testnetPortal1}</About>
          <Security>{stakingPortal1}</Security>
        </FlexCol7>
        
        <FlexCol9>
          <Company>{resources}</Company>
          <About>{about3}</About>
          <Security>{security3}</Security>
          <Security>{place6}</Security>
        </FlexCol9>
        <FlexCol7>
          <Company>{learn}</Company>
          <About>{testnetPortal2}</About>
          <Security>{stakingPortal2}</Security>
        </FlexCol7> */}
    </FlexFull>
  )
=======
    nodeMonitoring2} = props;
    return(
      <FlexRow6>
      <FlexCol6>
        <Company>{company}</Company>
        <About>{about1}</About>
        <Security>{security1}</Security>
        <Security>{place4}</Security>
      </FlexCol6>
      <FlexCol7>
        <Company>{ourProjects}</Company>
        <About>{testnetPortal1}</About>
        <Security>{stakingPortal1}</Security>
      </FlexCol7>
      <FlexCol8>
        <Logo2 asset62={logo2Data.asset62} asset72={logo2Data.asset72} asset81={logo2Data.asset81} />
        <Community>{community}</Community>
        <About1>{about2}</About1>
        <Security1>{security2}</Security1>
        <Place3>{place5}</Place3>
        <FlexRow7>
          <IconPaperPlane src={iconPaper_Plane} />
          <IconLinkedin src={iconLinkedin} />
          <IconLinkedin src={iconInstagram} />
          <IconLinkedin src={iconTwitter} />
          <IconLinkedin src={solidBrandsYoutube} />
          <IconLinkedin src={solidBrandsChrome} />
        </FlexRow7>
        <Eosadolor382gmailcom>{eosadolor382GmailCom}</Eosadolor382gmailcom>
      </FlexCol8>
      <FlexCol9>
        <Company>{resources}</Company>
        <About>{about3}</About>
        <Security>{security3}</Security>
        <Security>{place6}</Security>
      </FlexCol9>
      <FlexCol7>
        <Company>{learn}</Company>
        <About>{testnetPortal2}</About>
        <Security>{stakingPortal2}</Security>
      </FlexCol7>
    </FlexRow6>
    )
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
}

const logo2Data = {
  asset62: "/img/asset-6-2-1@2x.png",
  asset72: "/img/asset-7-2-1@2x.png",
  asset81: "/img/asset-8-1@2x.png",
  className: "logo-5",
};

<<<<<<< HEAD
const FlexFull = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  font-size: 14px !important;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: fit-content;
  padding: 40px;
`;

const Header= styled.div`
  font-size: 14px;
  font-weight: bold
`;

const Item= styled.div`
  font-size: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  @media screen and (max-width:917px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width:603px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width:460px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

=======
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
const FlexRow6 = styled.div`
  height: 522px;
  margin-top: 44px;
  display: flex;
  padding: 26px 190px;
  align-items: center;
<<<<<<< HEAD
  width: 100%;
=======
  min-width: 1336px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
=======
  width: 289px;
  position: relative;
  align-self: flex-start;
  margin-left: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 452px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
  align-items: center;
=======
  align-items: flex-start;
  min-width: 289px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
  margin-top: 60px;
=======
            height: 18px;
  margin-top: 64px;
  margin-right: 1px;
  min-width: 170px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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

export default Footer