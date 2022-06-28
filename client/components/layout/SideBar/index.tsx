import Link from 'next/link';
import styled from "styled-components";
import { toggleSidebar } from '../../../lib/features/generalSlice';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import {
  UrbanistSemiBoldSoap24px,
  UrbanistSemiBoldBlueBell24px,
  ValignTextMiddle,
} from "../../../styledMixins";
import { searchBarData } from '../Header';
import WalletButton from '../Header/ConnectWallet/walletButton';
import SearchBar from '../Header/SearchBar';
import Logo from "./Logo";

function SideNavBar(props) {
  const { sidebarToggled } = useAppSelector(state => state.general)
  const dispatch = useAppDispatch()
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
`;

const IconUser = styled.img`
  width: 40px;
`;

const Icon = styled.img`
  width: 40px;
  height: 41px;
`;

const Icon1 = styled.img`
  width: 40px;
  height: 41px;
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
  display: flex;
  align-items: center;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;

const Validators = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlueBell24px}
  height: 29px;
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;

const Blocks = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;

const Proposals = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;
const Parameters = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;

const Assets = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldSoap24px}
            height: 29px;
  letter-spacing: 0;
  @media screen and (max-width: 1334px){
    display:none
  }
  @media screen and (max-width: 1074px){
    display: flex;
  }
`;


export default SideNavBar