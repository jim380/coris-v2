import React, { useState } from "react";
import styled from "styled-components";
import { toggleSidebar } from "../../../../lib/features/generalSlice";

function ConnectWallet(props) {
  const { asset62, asset72, outlineMediaShuffle, className } = props;
  const [open, setOpen] = useState(false)

  return (
    <ConnectWallet1 onClick={() => props.toggle(true)} className={`connect-wallet ${className || ""}`}>
      <Flex>
        <Asset62 className="asset-6-2" src={asset62} />
        <Asset72 className="asset-7-2" src={asset72} />
      </Flex>
      <OutlineMediaShuffle className="outline-media-shuffle" src={outlineMediaShuffle} />
    </ConnectWallet1>
  );
}

const Flex = styled.div`
  display: flex;
  align-items:center;
`;

const ConnectWallet1 = styled.div`
  height: 50px;
  display: flex;
  padding: 5px 19px;
  justify-content: space-between;
  background-color: var(--white);
  align-items: center;
  border-radius: 59px;
  box-shadow: 0px 7px 30px #0015da29;
  width: 200px;

  &.connect-wallet.connect-wallet-1 {
    padding: unset;
    justify-content: unset;
    align-items: unset;
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

const OutlineMediaShuffle = styled.img`
  width: 40px;
  align-self: flex-start;
`;

const Asset621 = styled.img`
  .connect-wallet.connect-wallet-1 & {
    margin-top: 14px;
    width: 36.5625px;
    margin-bottom: unset;
  }
`;

const Asset721 = styled.img`
  .connect-wallet.connect-wallet-1 & {
    margin-top: 19px;
    width: 56.1044921875px;
    margin-left: 14.5px;
    margin-bottom: unset;
  }
`;

const OutlineMediaShuffle1 = styled.img`
  .connect-wallet.connect-wallet-1 & {
    margin-top: 5px;
    align-self: unset;
  }
`;

export default ConnectWallet;
