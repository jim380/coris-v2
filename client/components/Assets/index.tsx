import  React, { useState } from "react";
import AssetsTitle from "./AssetTitle";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px 
} from "../../styledMixins";
import SearchButton from "./SearchButton";

function AssetsContent(props) {
  const coinsData = props
  //console.log(coinsData)

  const [ query, setQuery] = useState("")
  let emptyname = 'Not Found'

  return (
    <>
    <Title>Assets</Title>
    <CoinList>
    <SearchButton setQuery={setQuery} />
      <AssetsTitle
        id={AssetsTitleData.id}
        coinName={AssetsTitleData.coinName}
        coinCurrentPrice={AssetsTitleData.coinCurrentPrice}
        coinMarketCap={AssetsTitleData.coinMarketCap}
        coinTotalVolume={AssetsTitleData.coinTotalVolume}
        totalSupply={AssetsTitleData.totalSupply}
      />
     {coinsData?.coinsData?.filter(coin => {
         //if Query does not exist
        if (query === ' ') {
            return coin;
        }else if (coin.name.toLowerCase().includes(query.toLocaleLowerCase())) {
            //query exists here
            return coin
        } 
     })
     .map((coin, index) =>
        <OverlapGroup10 key={index}>
        <IdValue>{coin?.market_cap_rank? coin.market_cap_rank : null} </IdValue>
        <CoinNameValue>
            <img src={coin?.image? coin.image : null} alt="" className="img" />
            {coin?.id? coin.id : null}
            <br/>
            <sub className="symbol" >{coin?.symbol? coin.symbol : null}
            </sub>
        </CoinNameValue>
       <PriceValue>${coin?.current_price? coin.current_price.toFixed(2) : null}</PriceValue>
       <MarketCapValue>${coin?.market_cap ? coin.market_cap.toLocaleString() : null}</MarketCapValue>
        <TotalVolumeValue>{coin?.total_volume ? coin.total_volume.toLocaleString() : null}</TotalVolumeValue>
            <TotalSupplyValue>
            {coin?.total_supply ? coin.total_supply.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :  <p className="total_supply">null</p>  }
        </TotalSupplyValue>
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
           .total_supply {
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
  totalSupply: "Total Supply",
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

const TotalSupplyValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 150px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
  color: blue;
`;

export default AssetsContent
