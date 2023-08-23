import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useAppSelector } from "../../../../lib/hooks";
import Chain from "./Chains";

export function ModalContent({ toggle }) {
  const darkMode = useAppSelector((state) => state.general.darkMode);
  const isToggled = useAppSelector(
    (state) => state.general.connectWalletModalToggled
  );
  const checkNToggle = (e) => {
    if (e.target !== document.querySelector("#modal-parent")) return;
    toggle(false);
  };
  const connectWallet1Data = {
    asset62: "/img/asset-6-2@2x.png",
    asset72: "/img/asset-7-1@2x.png",
    outlineMediaShuffle: "/img/outline-media-shuffle@2x.png",
  };

  if (isToggled)
    return (
      <Modal id="modal-parent" onClick={checkNToggle}>
        <ModalDialogue className={darkMode ? "dark-mode" : ""}>
          <div className="d-table w-100 h-100">
            <div className="t-table-row" style={{ height: "50px" }}>
              <div className="p-3">
                <Flex style={{ justifyContent: "flex-start" }}>
                  <Asset62
                    className="asset-6-2"
                    src={connectWallet1Data.asset62}
                  />
                  <Asset72
                    className="asset-7-2"
                    src={connectWallet1Data.asset72}
                  />
                </Flex>
              </div>
              <Close
                className={darkMode ? "dark-mode" : ""}
                onClick={() => toggle(false)}
              >
                &times;
              </Close>
            </div>
            <ShowBox className="w-100 h-100">
              <Show>
                <Container>
                  <h4 className="text-center">Mainnets</h4>
                  <Grid>
                    <Chain
                      chain_id={"agoric"}
                      chainName="AGORIC"
                      chainImage="https://assets.coingecko.com/coins/images/24487/large/bld-logo.png?1664066088"
                    />
                    <Chain
                      chain_id={"akash-network"}
                      chainName="AKASH"
                      chainImage="https://assets.coingecko.com/coins/images/12785/large/akash-logo.png?1615447676"
                    />
                    <Chain
                      chain_id={"chihuahua"}
                      chainName="CHIHUAHUA"
                      chainImage="https://assets.coingecko.com/coins/images/22485/large/logo_transparent_notext.png?1641901839"
                    />
                    <Chain
                      chain_id={"cosmos"}
                      chainName="COSMOS"
                      chainImage="https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960"
                    />
                    <Chain
                      chain_id={"crescent-network"}
                      chainName="CRESCENT"
                      chainImage="https://assets.coingecko.com/coins/images/25061/large/logo_200x200.png?1649943220"
                    />
                    <Chain
                      chain_id={"desmos"}
                      chainName="DESMOS"
                      chainImage="https://pbs.twimg.com/profile_images/1482080264914452487/2rNgHghv_400x400.jpg"
                    />
                    <Chain
                      chain_id={"juno-network"}
                      chainName="JUNO"
                      chainImage="https://assets.coingecko.com/coins/images/19249/large/juno.png?1642838082"
                    />
                    <Chain
                      chain_id={"osmosis"}
                      chainName="OSMOSIS"
                      chainImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmBRniKH6khmxvFJ21uuiAM-yztHJOIDmDA&usqp=CAU"
                    />
                    <Chain
                      chain_id={"stargaze"}
                      chainName="STARGAZE"
                      chainImage="https://assets.coingecko.com/coins/images/22363/large/stars.png?1645256657"
                    />
                    <Chain
                      chain_id={"tenet"}
                      chainName="TENET"
                      chainImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTum6pKdlX8yhdY4l0TT8BvmMH8dzZS7d9iCKMj0MoUzA&s"
                    />
                  </Grid>
                </Container>
                <Container className="mt-3">
                  <h4 className="text-center">ICS</h4>
                  <Grid>
                    <Chain
                      chain_id={"neutron"}
                      chainName="NEUTRON"
                      chainImage="https://avatars.githubusercontent.com/u/108675945?s=200&v=4"
                    />
                    <Chain
                      chain_id={"stride"}
                      chainName="STRIDE"
                      chainImage="https://avatars.githubusercontent.com/u/104537275?s=200&v=4"
                    />
                  </Grid>
                </Container>
                <Container className="mt-3">
                  <h4 className="text-center">Testnets</h4>
                  <Grid>
                    <Chain
                      chain_id={"Re-protocol"}
                      chainName="RE"
                      chainImage="https://user-images.githubusercontent.com/66339097/225161063-184973bc-675b-4de9-8b3b-97facd376ed7.png"
                    />
                  </Grid>
                </Container>
              </Show>
            </ShowBox>
            <div className="d-table-row" style={{ height: "50px" }}>
              <div>Developed by Cypher-Core Dev</div>
            </div>
          </div>
        </ModalDialogue>
      </Modal>
    );
  else return <div />;
}

const Show = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const ShowBox = styled.div`
  overflow: auto;
  border: 2px solid;
  display: table-row;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: block;
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 778px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  border-radius: 10px;
  background: #f5f5f5;
  padding: 10px;
  &.dark-mode {
    background: #100f1e;
  }
`;

const appear = keyframes`
 from{
    opacity: 0;
 }
 to{
    opacity: 1;
 }
`;

const drawUp = keyframes`
 from{
    opacity: 0;
    transform: translateY(20%);
 }
 to{
    opacity: 1;
    transform: translateY(0%);
 }
 `;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  background: #00000052;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    align-items: flex-end;
  }
  animation-name: ${appear};
  animation-duration: 0.6s;
`;

const ModalDialogue = styled.div`
  display: block;
  background: white;
  height: 500px;
  width: 500px;
  min-width: 75%;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #00000038;
  @media screen and (max-width: 700px) {
    height: 80%;
    border-radius: 20px 20px 0px 00px;
    width: 100%;
  }
  position: relative;
  animation-name: ${drawUp};
  animation-duration: 0.6s;
  overflowy: auto;
  &.dark-mode {
    background: #07060e;
    border: 2px solid #100f1e;
  }
`;

const Close = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #ededed;
    cursor: pointer;
  }
  &:hover.dark-mode {
    background: #100f1e6b;
    cursor: pointer;
  }
`;

const Asset62 = styled.img`
  width: 30px;
  margin-bottom: 1px;
  object-fit: cover;
`;

const Asset72 = styled.img`
  width: 45px;
  margin-bottom: 1px;
  object-fit: cover;
`;

export default ModalContent;
