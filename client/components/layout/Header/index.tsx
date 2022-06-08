import styled from "styled-components";
import SearchBar from "./SearchBar";
import ConnectWallet from "./ConnectWallet";
import WalletButton from "./ConnectWallet/walletButton";


function Header() {
  //const {  searchBarProps,  connectWallet1Data } = props;
    return(
      <TopNavBar>
      <SearchBar src={searchBarData.src} />
      <ConnectWallet
        asset62={connectWallet1Data.asset62}
        asset72={connectWallet1Data.asset72}
        outlineMediaShuffle={connectWallet1Data.outlineMediaShuffle}
      />
      <NightmodeButton>
        <OutlineGeneralMoon src="/img/outline-general-moon@2x.svg" />
      </NightmodeButton>
      <WalletButton />
    </TopNavBar>

    )
}

const searchBarData = {
  src: "/img/outline-interface-search@2x.png",
    className: "search-bar-1",
};

const connectWallet1Data = {
  asset62: "/img/asset-6-2@2x.png",
  asset72: "/img/asset-7-1@2x.png",
  outlineMediaShuffle: "/img/outline-media-shuffle@2x.png",
};

const TopNavBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1317px;
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