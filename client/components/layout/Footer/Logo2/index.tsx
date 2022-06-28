import React from "react";
import styled from "styled-components";


function Logo2(props) {
  const { asset62, asset72, asset81, className } = props;

  return (
    <Logo className={`logo-4 ${className || ""}`}>
      <Asset62 className="asset-6-2-1" src={asset62} />
      <Asset72 className="asset-7-2-1" src={asset72} />
      <Asset81 className="asset-8-1" src={asset81} />
    </Logo>
  );
}

const Logo = styled.div`
<<<<<<< HEAD
  width: 71px;
=======
  width: 31px;
  margin-right: 2px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;

  &.logo-4.logo-5 {
    height: 50px;
    align-items: unset;
    min-height: unset;
  }

  &.logo-4.logo-6 {
    height: 50px;
    align-self: center;
    margin-top: 9px;
    margin-left: 1px;
    margin-right: unset;
    align-items: unset;
    min-height: unset;
  }
`;

const Asset62 = styled.img`
<<<<<<< HEAD
  width: 40px;
=======
  width: 20px;
  height: 19px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  margin-right: 0.02px;
  object-fit: cover;
`;

const Asset72 = styled.img`
<<<<<<< HEAD
  width: 41px;
=======
  width: 31px;
  height: 14px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  margin-top: 5px;
  object-fit: cover;
`;

const Asset81 = styled.img`
<<<<<<< HEAD
  width: 38px;
=======
  width: 28px;
  height: 6px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
  margin-top: 6px;
  margin-right: 0.94px;
  object-fit: cover;
`;

const Asset621 = styled.img`
  .logo-4.logo-5 & {
    margin-left: 5.5px;
    width: 19.9775390625px;
    height: 19.28888702392578px;
    margin-top: -0.1px;
    margin-right: unset;
  }
`;

const Asset721 = styled.img`
  .logo-4.logo-5 & {
    height: 13.777778625488281px;
    margin-top: 5.3px;
  }
`;

const Asset811 = styled.img`
  .logo-4.logo-5 & {
    margin-left: 1.1px;
    width: 27.900390625px;
    height: 5.511112213134766px;
    margin-top: 5.6px;
    margin-right: unset;
  }
`;

const Asset622 = styled.img`
  .logo-4.logo-6 & {
    margin-left: 5.5px;
    width: 19.977783203125px;
    height: 19.2889404296875px;
    margin-top: -0.1px;
    margin-right: unset;
  }
`;

const Asset722 = styled.img`
  .logo-4.logo-6 & {
    margin-left: 0;
    height: 13.77783203125px;
    margin-top: 5.3px;
  }
`;

const Asset812 = styled.img`
  .logo-4.logo-6 & {
    margin-left: 1.1px;
    width: 27.9000244140625px;
    height: 5.5111083984375px;
    margin-top: 5.6px;
    margin-right: unset;
  }
`;

export default Logo2;
