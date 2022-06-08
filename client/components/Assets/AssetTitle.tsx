import React from "react";
import styled from "styled-components";
import { UrbanistSemiBoldBlack172px, ValignTextMiddle } from "../../styledMixins";


function AssetsTitle(props) {
  const { id, coinName, coinCurrentPrice, coinMarketCap, coinTotalVolume, priceChange } = props;

  return (
    <AssetTitle>
       <Id>{id}</Id>
      <CoinName>{coinName}</CoinName>
      <CurrentPrice>{coinCurrentPrice}</CurrentPrice>
      <MarketCap>{coinMarketCap}</MarketCap>
      <TotalVolume>{coinTotalVolume}</TotalVolume>
        <PriceChange>{priceChange}</PriceChange>
    </AssetTitle>
  );
}

const AssetTitle = styled.div`
  ${UrbanistSemiBoldBlack172px}
  margin-top: 18px;
  margin-left: 14.64px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 1158px;
`;

const Id = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-top: 0;
  min-width: 95px;
  letter-spacing: 0;
`;

const CoinName = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 10px;
  margin-top: 0;
  min-width: 39px;
  letter-spacing: 0;
`;

const CurrentPrice = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 170px;
  margin-top: 0;
  min-width: 69px;
  letter-spacing: 0;
`;

const MarketCap = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 180px;
  margin-top: 0;
  min-width: 77px;
  letter-spacing: 0;
`;

const TotalVolume = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 90px;
  margin-top: 0;
  letter-spacing: 0;
`;

const PriceChange = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 118px;
  margin-top: 0;
  letter-spacing: 0;
`;

export default AssetsTitle;
