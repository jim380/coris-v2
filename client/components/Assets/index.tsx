import  React from "react";
import AssetsTitle from "./AssetTitle";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px 
} from "../../styledMixins";

function AssetsContent({...coinsData}) {
  console.log(coinsData.coins)

  return (
    <>
    <Title>Assets</Title>
    <CoinList>
      <AssetsTitle
        id={AssetsTitleData.id}
        coinName={AssetsTitleData.coinName}
        coinCurrentPrice={AssetsTitleData.coinCurrentPrice}
        coinMarketCap={AssetsTitleData.coinMarketCap}
        coinTotalVolume={AssetsTitleData.coinTotalVolume}
        priceChange={AssetsTitleData.priceChange}
      />
     
     {coinsData?.coins?.map((coin) =>
        <OverlapGroup10>
        <IdValue>{coin?.market_cap_rank} </IdValue>
        <CoinNameValue>
            <img src={coin?.image} alt="" className="img" />
            {coin?.id}
            <br/>
            <sub className="symbol" >{coin?.symbol}</sub>
        </CoinNameValue>
       <PriceValue>${coin?.current_price.toFixed(2)}</PriceValue>
       <MarketCapValue>${coin?.market_cap.toLocaleString()}</MarketCapValue>
        <TotalVolumeValue>{coin?.total_volume.toLocaleString()}</TotalVolumeValue>
            <PriceChangeValue>
            {coin?.price_change_percentage_24h > 0 ? coin.price_change_percentage_24h.toFixed(2) :   <p className="priceLessThan"> {coin.price_change_percentage_24h.toFixed(2)}% </p>  }
        </PriceChangeValue>
      </OverlapGroup10>
        )}
    </CoinList>
         <style jsx>{`
           .symbol {
             color: red;
             font-size: 10px;
           }
           .img {
           margin-right: 10px;
           width:23px;
           }
           .priceLessThan {
               color: red;
           }
         `}</style>
    </>
  );
}

const AssetsTitleData = {
  id: "Rank",
  coinName: "Name",
  coinCurrentPrice: "Price",
  coinMarketCap: "Mkt cap",
  coinTotalVolume: "Total Volume",
  priceChange: "Price Change",
};

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 112px;
  letter-spacing: 0;
  margin-top: 30px
`;

const CoinList = styled.div`
  width: 1336px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 18.2px 16px;
  align-items: flex-start;
  min-height: 797px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup10 = styled.div`
  height: 60px;
  margin-top: 19px;
  display: flex;
  padding: 13.8px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const IdValue = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  margin-top: 0.33px;
  min-width: 74px;
  letter-spacing: 0;
`;

const CoinNameValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 12px;
  margin-top: 0.33px;
  min-width: 167px;
  letter-spacing: 0;
`;

const PriceValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 70px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const MarketCapValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 140px;
  margin-top: 0.33px;
  min-width: 9px;
  letter-spacing: 0;
`;

const TotalVolumeValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 100px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
`;

const PriceChangeValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 150px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
  color: blue;
`;


export default AssetsContent
