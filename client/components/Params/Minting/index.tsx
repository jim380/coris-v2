import React from 'react'
import styled from "styled-components";
import {
    UrbanistNormalBlack24px,
    UrbanistSemiBoldBlack24px,
    ValignTextMiddle,
  } from "../../../styledMixins";

function MintParams(props) {
    const {
        mintDenom,
        inflationRateChange,
        inflationMax,
        inflationMin,
        goalBonded,
        blocksPerYear,
        coris,
        percent1,
        percent2,
        percent3,
        percent4,
        address1,
      } = props;
    return (
        <>
        <FlexRow1>
              <FlexCol3>
                <MintDenom>{mintDenom}</MintDenom>
                <InflationRateChange>{inflationRateChange}</InflationRateChange>
                <InflationRateChange>{inflationMax}</InflationRateChange>
                <InflationRateChange>{inflationMin}</InflationRateChange>
                <InflationRateChange>{goalBonded}</InflationRateChange>
                <InflationRateChange>{blocksPerYear}</InflationRateChange>
              </FlexCol3>
              <FlexCol4>
                <CORIS>{coris}</CORIS>
                <Percent>{percent1}</Percent>
                <Percent1>{percent2}</Percent1>
                <Percent2>{percent3}</Percent2>
                <Percent1>{percent4}</Percent1>
                <Address>{address1}</Address>
              </FlexCol4>
            </FlexRow1>
        </>
    )
}

const MintDenom = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  height: 318px;
  display: flex;
  padding: 31px 16px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol3 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 227px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 254px;
`;

const InflationRateChange = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const FlexCol4 = styled.div`
  ${UrbanistSemiBoldBlack24px}
  width: 119px;
  margin-left: 282px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 254px;
`;

const CORIS = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 71px;
  letter-spacing: 0;
`;

const Percent = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 37px;
  letter-spacing: 0;
`;

const Percent1 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 44px;
  letter-spacing: 0;
`;

const Percent2 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 43px;
  letter-spacing: 0;
`;

const Address = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 119px;
  letter-spacing: 0;
`;

export default MintParams