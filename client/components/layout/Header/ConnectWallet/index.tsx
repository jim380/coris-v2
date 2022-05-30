import React from "react";
import styled from "styled-components";


function ConnectWallet(props) {
  const { asset62, asset72, outlineMediaShuffle, className } = props;

  return (
    <ConnectWallet1 className={`connect-wallet ${className || ""}`}>
      <Asset62 className="asset-6-2" src={asset62} />
      <Asset72 className="asset-7-2" src={asset72} />
      <OutlineMediaShuffle className="outline-media-shuffle" src={outlineMediaShuffle} />
    </ConnectWallet1>
  );
}

const ConnectWallet1 = styled.div`
  height: 64px;
  margin-left: 16px;
  display: flex;
  padding: 5px 19px;
  justify-content: flex-end;
  align-items: center;
  min-width: 289px;
  background-color: var(--white);
  border-radius: 59px;
  box-shadow: 0px 7px 30px #0015da29;

  &.connect-wallet.connect-wallet-1 {
    width: 289px;
    padding: unset;
    justify-content: unset;
    align-items: unset;
    min-width: unset;
  }
`;

const Asset62 = styled.img`
  width: 37px;
  height: 35px;
  margin-bottom: 1px;
  object-fit: cover;
`;

const Asset72 = styled.img`
  width: 56px;
  height: 25px;
  margin-left: 14px;
  margin-bottom: 1px;
  object-fit: cover;
`;

const OutlineMediaShuffle = styled.img`
  width: 53px;
  height: 53px;
  align-self: flex-start;
  margin-left: 84px;
`;

const Asset621 = styled.img`
  .connect-wallet.connect-wallet-1 & {
    margin-top: 14px;
    width: 36.5625px;
    margin-left: 25.8px;
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
    margin-left: 84.1px;
    align-self: unset;
  }
`;

export default ConnectWallet;
