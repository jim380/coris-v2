import Link from 'next/link';
import styled from "styled-components";
<<<<<<< HEAD
import { toggleSidebar } from '../../../lib/features/generalSlice';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
=======
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
import {
  UrbanistSemiBoldSoap24px,
  UrbanistSemiBoldBlueBell24px,
  ValignTextMiddle,
} from "../../../styledMixins";
<<<<<<< HEAD
import { searchBarData } from '../Header';
import WalletButton from '../Header/ConnectWallet/walletButton';
import SearchBar from '../Header/SearchBar';
import Logo from "./Logo";

function SideNavBar(props) {
  const { sidebarToggled } = useAppSelector(state => state.general)
  const dispatch = useAppDispatch()
=======
import Logo from "./Logo";

function SideNavBar (props) {
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
    parameters,
<<<<<<< HEAD
    assets } = props;
  return (
    <SideNavigation className={sidebarToggled && 'show'}>
      <Close onClick={() => dispatch(toggleSidebar(false))}>&times;</Close>
      <Link href="/"><a> <Logo /></a></Link>
      <WalletButton className="mobile"/>
      <SearchBar src={searchBarData.src} className="mobile" />
      <Wrapper>
        <Link href="/">
          <a className="m-24">
            <FlexRow>
              <FlexCell><SolidGeneralChartPie src={solidGeneralChartPie} /></FlexCell>
              <FlexCell><Overview>{overview}</Overview></FlexCell>
            </FlexRow>
          </a>
        </Link>
        <br />
        <br className='hidden-sm'/>
        <Link href="/validators">
          <a className="m-24">
            <FlexRow>
              <FlexCell><IconUser src={iconUser} /></FlexCell>
              <FlexCell><Validators>{validators}</Validators></FlexCell>
            </FlexRow>
          </a>
        </Link>
        <br />
        <br className='hidden-sm' />
        <Link href="/blocks">
          <a className="m-24">
            <FlexRow>
              <FlexCell><IconUser src={icon1} /></FlexCell>
              <FlexCell><Blocks>{blocks}</Blocks></FlexCell>
            </FlexRow>
          </a>
        </Link>
        <br />
        <br className='hidden-sm' />
        <Link href="/proposals">
          <a className="m-24">
            <FlexRow>
              <FlexCell><Icon src={icon2} /></FlexCell>
              <FlexCell><Proposals>{proposals}</Proposals></FlexCell>
            </FlexRow>
          </a>
        </Link>
        <br />
        <br className='hidden-sm' />
        <Link href="/params">
          <a className="m-24">
            <FlexRow>
              <FlexCell><Icon1 src={icon3} /></FlexCell>
              <FlexCell><Parameters>{parameters}</Parameters></FlexCell>
            </FlexRow>
          </a>
        </Link>
        <br />
        <br className='hidden-sm' />
        <Link href="/assets" >
          <a className="m-24">
            <FlexRow>
              <FlexCell><Icon1 src={icon3} /></FlexCell>
              <FlexCell><Assets>{assets}</Assets></FlexCell>
            </FlexRow>
          </a>
        </Link>
      </Wrapper>
    </SideNavigation >
  )
}

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  font-size: 40px;
  color: white;
  display: none;
  @media screen and (max-width: 1074px){
    display: block !important;
  }
`;

const Wrapper = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 775px){
    margin-top: 30px;
  }
`;

const FlexCell = styled.div`
  margin: 0px 10px;
  display: flex;  
  align-items: center;
`;
const SideNavigation = styled.div`
  z-index: 1;
  height: 100%;
  width: 300px;
  margin: 0;
  @media screen and (max-width: 1334px){
    width: 100px
  }
  @media screen and (max-width: 1074px){
    display: none;
    width: 300px;
    z-index: 1;
  }
  border-radius: 0px 30px 30px 0px;
  box-shadow: 0px 7px 10px #000d7d99;
  background-color: var(--chambray);
  padding: 40px 20px;
  position: fixed;
  left: 0px;
  &.show{
    @media screen and (max-width: 1074px){
      display: block;
      position: fixed !important;
      top: 0px;
      left: 0px;
    }
  }
  @media screen and (max-width: 1074px){
      position: fixed
    }
`;

const FlexRow = styled.div`
  display: flex;
=======
    assets} = props;
    return (  
      <SideNavigation>
          <OverlapGroup16>
          <Link href="/"><a> <Logo /></a></Link>
            <FlexRow>
              <FlexCol>
                <SolidGeneralChartPie src={solidGeneralChartPie} />
                <IconUser src={iconUser} />
                <IconUser src={icon1} />
                <Icon src={icon2} />
                <Icon1 src={icon3} />
                <Icon1 src={icon3} />
              </FlexCol>
              <FlexCol1>
               <Link href="/"><a><Overview>{overview}</Overview></a></Link>
               <Link href="/validators"><a><Validators>{validators}</Validators></a></Link>
               <Link href="/blocks"><a><Blocks>{blocks}</Blocks></a></Link>
               <Link href="/proposals"><a><Proposals>{proposals}</Proposals></a></Link>
               <Link href="/params"><a><Parameters>{parameters}</Parameters></a></Link>
               <Link href="/assets"><a><Assets>{assets}</Assets></a></Link>
              </FlexCol1>
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
  margin: 0;
`;

const OverlapGroup16 = styled.div`
  width: 360px;
  position: fixed;
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
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
  height: 40px; 
=======
  height: 40px;
  margin-left: 1px;
  margin-top: -60px;
 
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const IconUser = styled.img`
  width: 40px;
<<<<<<< HEAD
=======
  height: 40px;
  margin-top: 72px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Icon = styled.img`
  width: 40px;
  height: 41px;
<<<<<<< HEAD
=======
  margin-top: 71px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Icon1 = styled.img`
  width: 40px;
  height: 41px;
<<<<<<< HEAD
=======
  margin-top: 69px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
  display: flex;
  align-items: center;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
=======
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Validators = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlueBell24px}
<<<<<<< HEAD
  height: 29px;
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
=======
            height: 29px;
  margin-top: 85px;
  letter-spacing: 0;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Blocks = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
<<<<<<< HEAD
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
=======
  margin-top: 83px;
  letter-spacing: 0;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Proposals = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
<<<<<<< HEAD
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
=======
  margin-top: 82px;
  letter-spacing: 0;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;
const Parameters = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
<<<<<<< HEAD
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
=======
  margin-top: 82px;
  letter-spacing: 0;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Assets = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
<<<<<<< HEAD
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;


=======
  margin-top: 82px;
  letter-spacing: 0;
`;

>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
export default SideNavBar