import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack26px, UrbanistNormalBlack24px } from "../../../styledMixins";


function Group7278(props) {
  const { latestBlock, phone } = props;

  return (
    <Group72781>
      <LatestBlock>{latestBlock}</LatestBlock>
      <Phone>{phone}</Phone>
    </Group72781>
  );
}

const Group72781 = styled.div`
  width: 134px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const LatestBlock = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const Phone = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

export default Group7278;
