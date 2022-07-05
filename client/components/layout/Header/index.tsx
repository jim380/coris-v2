import styled from "styled-components";
import SearchBar from "./SearchBar";
import ConnectWallet from "./ConnectWallet";
import WalletButton from "./ConnectWallet/walletButton";
import { useState } from "react";
import { useAppDispatch } from "../../../lib/hooks";
import { toggleSidebar } from "../../../lib/features/generalSlice";
import Modal from "./Modal";
import ModalContent from "./Modal/ModalContent";


function Header() {
  //const {  searchBarProps,  connectWallet1Data } = props;
  const dispatch = useAppDispatch()
  const [isToggled, toggle] = useState(false)

  return (
    <TopNavBar>
      <MobileSideBarToggler onClick={() => dispatch(toggleSidebar(true))}>
        <button type="button" className="hamburger" aria-label="burger"><svg viewBox="0 0 24 24" width="35px" height="35px" focusable="false" className="chakra-icon css-fi0ww0" aria-hidden="true"><path fill="#37458d" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg></button>
      </MobileSideBarToggler>
      <FlexBetween>
        <SearchBar src={searchBarData.src} />
        <ConnectWallet
          toggle={toggle}
          asset62={connectWallet1Data.asset62}
          asset72={connectWallet1Data.asset72}
          outlineMediaShuffle={connectWallet1Data.outlineMediaShuffle}
        />
        <NightmodeButton>
          <OutlineGeneralMoon src="/img/outline-general-moon@2x.svg" />
        </NightmodeButton>
        <WalletButton className={''} />
        <Modal>
          <ModalContent isToggled={isToggled} toggle={toggle} />
        </Modal>
      </FlexBetween>
    </TopNavBar>

  )
}

export const searchBarData = {
  src: "/img/outline-interface-search@2x.png",
  className: "search-bar-1",
};

const connectWallet1Data = {
  asset62: "/img/asset-6-2@2x.png",
  asset72: "/img/asset-7-1@2x.png",
  outlineMediaShuffle: "/img/outline-media-shuffle@2x.png",
};

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const MobileSideBarToggler = styled.div`
  display: none;
  width: 100px;
  @media screen and (max-width: 1074px){
    display: block;
  }
`;

const TopNavBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
`;

const NightmodeButton = styled.div`
  height: 50px;
  margin-left: 16px;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 50px;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OutlineGeneralMoon = styled.img`
  width: 31px;
  height: 31px;
`;

export default Header