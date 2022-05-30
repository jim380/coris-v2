import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack26px, UrbanistNormalBlack24px } from "../../../styledMixins";


function Group7280(props) {
  const { chain, corichain1 } = props;

  return (
    <Group72801>
      <Chain>{chain}</Chain>
      <Corichain1>{corichain1}</Corichain1>
    </Group72801>
  );
}

const Group72801 = styled.div`
  width: 136px;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const Chain = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Corichain1 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-top: 16px;
  letter-spacing: 0;
`;

export default Group7280;
