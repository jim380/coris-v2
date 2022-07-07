import React, { useState } from "react";
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

  const [query, setQuery] = useState("")

  return (
    <>
      <FlexBetween>
        <Title>Assets</Title>
        <SearchButton setQuery={setQuery} />
      </FlexBetween>

      <Responsive>
        <table className="w-100 mt-3">
          <thead>
            <tr style={{ fontWeight: "bold" }}>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>Mkt cap</th>
              <th>Total volume</th>
              <th>Total supply</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coinsData?.coinsData?.filter(coin => {
              //if Query does not exist
              if (query === ' ') {
                return coin;
              } else if (coin.name.toLowerCase().includes(query.toLocaleLowerCase())) {
                //query exists here
                return coin
              }
            })
              .map((coin, index) => (
                <tr key={index} className="striped">
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    <Flex>
                      <FlexColumn>
                        <img src={coin?.image ? coin.image : null} alt="" className="img" />
                        <sub className="symbol" >{coin?.symbol ? coin.symbol : null}
                        </sub>
                      </FlexColumn>
                      <FlexColumn>
                        {coin?.id ? coin.id : null}
                      </FlexColumn>
                    </Flex>
                  </td>
                  <td>
                    {coin?.current_price ? coin.current_price.toFixed(2) : null}
                  </td>
                  <td>
                    {coin?.market_cap ? coin.market_cap.toLocaleString() : null}
                  </td>
                  <td>
                    {coin?.total_volume ? coin.total_volume.toLocaleString() : null}
                  </td>
                  <td>
                    {coin?.total_supply ? coin.total_supply.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : <p className="total_supply">null</p>}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Responsive>
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



const Flex = styled.div`
  display: flex;
`;

const Responsive = styled.div`
  width: 100%;
  overflow-x: auto;
  @media screen and (max-width: 1075px){
    width: calc(100vw - 40px);
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 112px;
  letter-spacing: 0;
  margin-top: 30px
`;

export default AssetsContent
