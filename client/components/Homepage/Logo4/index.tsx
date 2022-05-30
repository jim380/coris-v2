import React from "react";
import styled from "styled-components";


function Logo4(props) {
  const { asset61, asset71 } = props;

  return (
    <Logo>
      <Asset61 src={asset61} />
      <Asset71 src={asset71} />
    </Logo>
  );
}

const Logo = styled.div`
  position: absolute;
  height: 45px;
  top: 3px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 109px;
`;

const Asset61 = styled.img`
  width: 47px;
  height: 45px;
  object-fit: cover;
`;

const Asset71 = styled.img`
  width: 56px;
  height: 25px;
  margin-left: 6px;
  object-fit: cover;
`;

export default Logo4;