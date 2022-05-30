import React from "react";
import styled from "styled-components";
import { UrbanistNormalBlack24px } from "../../../styledMixins";


function Group7273(props) {
  const { marketCap, x24ThVol } = props;

  return (
    <Group72731>
      <MarketCap>{marketCap}</MarketCap>
      <X24thVol>{x24ThVol}</X24thVol>
    </Group72731>
  );
}

const Group72731 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 141px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
`;

const MarketCap = styled.div`
  width: 137px;
  min-height: 23px;
  letter-spacing: 0;
`;

const X24thVol = styled.div`
  width: 119px;
  min-height: 23px;
  margin-top: 16px;
  margin-left: 4px;
  letter-spacing: 0;
`;

export default Group7273;
