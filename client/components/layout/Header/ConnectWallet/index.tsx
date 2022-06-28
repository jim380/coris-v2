import React from "react";
import styled from "styled-components";


function ConnectWallet(props) {
  const { asset62, asset72, outlineMediaShuffle, className } = props;

  return (
    <ConnectWallet1 className={`connect-wallet ${className || ""}`}>
<<<<<<< HEAD
      <Flex>
        <Asset62 className="asset-6-2" src={asset62} />
        <Asset72 className="asset-7-2" src={asset72} />
      </Flex>
=======
      <Asset62 className="asset-6-2" src={asset62} />
      <Asset72 className="asset-7-2" src={asset72} />
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
      <OutlineMediaShuffle className="outline-media-shuffle" src={outlineMediaShuffle} />
    </ConnectWallet1>
  );
}

<<<<<<< HEAD
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
  margin-left: 20px;
  width: 200px;

  &.connect-wallet.connect-wallet-1 {
    padding: unset;
    justify-content: unset;
    align-items: unset;
=======
const ConnectWallet1 = styled.div`
  height: 50px;
  margin-left: 16px;
  display: flex;
  padding: 5px 19px;
  justify-content: flex-end;
  align-items: center;
  min-width: 280px;
  background-color: var(--white);
  border-radius: 59px;
  box-shadow: 0px 7px 30px #0015da29;

  &.connect-wallet.connect-wallet-1 {
    width: 289px;
    padding: unset;
    justify-content: unset;
    align-items: unset;
    min-width: unset;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  }
`;

const Asset62 = styled.img`
<<<<<<< HEAD
  width: 30px;
=======
  width: 37px;
  height: 35px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  margin-bottom: 1px;
  object-fit: cover;
`;

const Asset72 = styled.img`
<<<<<<< HEAD
  width: 45px;
=======
  width: 56px;
  height: 25px;
  margin-left: 14px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  margin-bottom: 1px;
  object-fit: cover;
`;

const OutlineMediaShuffle = styled.img`
<<<<<<< HEAD
  width: 40px;
  align-self: flex-start;
=======
  width: 53px;
  height: 53px;
  align-self: flex-start;
  margin-left: 84px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;

const Asset621 = styled.img`
  .connect-wallet.connect-wallet-1 & {
    margin-top: 14px;
    width: 36.5625px;
<<<<<<< HEAD
=======
    margin-left: 25.8px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
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
<<<<<<< HEAD
=======
    margin-left: 84.1px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
    align-self: unset;
  }
`;

export default ConnectWallet;
