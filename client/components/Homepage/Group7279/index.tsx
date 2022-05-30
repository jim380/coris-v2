import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack26px, UrbanistNormalBlack24px } from "../../../styledMixins";


function Group7279(props) {
  const { blockTime, x602S } = props;

  return (
    <Group72791>
      <BlockTime>{blockTime}</BlockTime>
      <X602s>{x602S}</X602s>
    </Group72791>
  );
}

const Group72791 = styled.div`
  width: 118px;
  margin-left: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const BlockTime = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const X602s = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

export default Group7279;