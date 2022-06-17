import React from 'react'
import styled from "styled-components";
import {
  UrbanistNormalBlack24px,
  UrbanistSemiBoldBlack24px,
  ValignTextMiddle,
} from "../../../styledMixins";
import { periodsInDays } from '../../Util/format';

function StakingParams(props) {
    const {
        unbondingTime,
        name2,
        name3,
        historicalEntries,
        surname,
        address7,
        number1,
        number2,
        address8,
        address9,
        stakingParamsData
      } = props;
      console.log(stakingParamsData)
    return (
        <>
        <FlexRow4>
              <FlexCol9>
                <MintDenom>{unbondingTime}</MintDenom>
                <InflationRateChange>{name2}</InflationRateChange>
                <InflationRateChange>{name3}</InflationRateChange>
                <InflationRateChange>{historicalEntries}</InflationRateChange>
                <InflationRateChange>{surname}</InflationRateChange>
              </FlexCol9>
              <FlexCol10>
                <CORIS>{stakingParamsData?.data?.params?.unbonding_time?  periodsInDays(stakingParamsData.data.params.unbonding_time) : null}</CORIS>
                <Number>{stakingParamsData?.data?.params?.max_validators ? stakingParamsData.data.params.max_validators : null }</Number>
                <Number1>{stakingParamsData?.data?.params?.max_entries ? stakingParamsData.data.params.max_entries : null}</Number1>
                <Address5>{stakingParamsData?.data?.params?.historical_entries ? stakingParamsData.data.params.historical_entries : null}</Address5>
                <Address6>{stakingParamsData?.data?.params?.bond_denom ? stakingParamsData.data.params.bond_denom : null}</Address6>
              </FlexCol10>
            </FlexRow4>
        </>
    )
} 

const MintDenom = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  letter-spacing: 0;
`;

const InflationRateChange = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const CORIS = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 71px;
  letter-spacing: 0;
`;

const FlexRow4 = styled.div`
  height: 273px;
  margin-left: 16px;
  display: flex;
  padding: 31px 16px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol9 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 174px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 209px;
`;

const FlexCol10 = styled.div`
  ${UrbanistSemiBoldBlack24px}
  width: 148px;
  margin-left: 306px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 209px;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 29px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 14px;
  letter-spacing: 0;
`;

const Address5 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 70px;
  letter-spacing: 0;
`;

const Address6 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 14px;
  letter-spacing: 0;
`;

export default StakingParams