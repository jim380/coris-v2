import styles from "../Layout.module.css"
import styled from "styled-components";
import {
  UrbanistSemiBoldSoap24px,
  UrbanistSemiBoldBlueBell24px,
  ValignTextMiddle,
} from "../../../styledMixins";
import Logo from "./Logo";



function SideNavBar (props) {
  const {
    solidGeneralChartPie,
    iconUser,
    icon1,
    icon2,
    icon3,
    overview,
    validators,
    blocks,
    proposals,
    parameters} = props;
    return (  
      <SideNavigation>
          <OverlapGroup16>
            <Logo />
            <FlexRow>
              <FlexCol>
                <SolidGeneralChartPie src={solidGeneralChartPie} />
                <IconUser src={iconUser} />
                <IconUser src={icon1} />
                <Icon src={icon2} />
                <Icon1 src={icon3} />
              </FlexCol>
              <FlexCol1>
                <Overview>{overview}</Overview>
                <Validators>{validators}</Validators>
                <Blocks>{blocks}</Blocks>
                <Proposals>{proposals}</Proposals>
                <Proposals>{parameters}</Proposals>
              </FlexCol1>
              <Ellipse5></Ellipse5>
            </FlexRow>
          </OverlapGroup16>
        </SideNavigation>
    )
}



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


export default SideNavBar