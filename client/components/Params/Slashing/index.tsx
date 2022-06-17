import React from 'react'
import styled from "styled-components";
import {
  UrbanistNormalBlack24px,
  UrbanistSemiBoldBlack24px,
  ValignTextMiddle,
} from "../../../styledMixins";
import { periodsInMinutes } from '../../Util/format';

function SlashingParams(props) {
    const {
        signedBlockWindow,
        minSignedPerWindow,
        downtimeJailDuration,
        slashFractionDoubleSign,
        slashFractionDowntime,
        slashingParamsData
      } = props;
 
    return (
        <>
         <FlexRow3>
              <FlexCol7>
                <MintDenom>{signedBlockWindow}</MintDenom>
                <InflationRateChange>{minSignedPerWindow}</InflationRateChange>
                <InflationRateChange>{downtimeJailDuration}</InflationRateChange>
                <InflationRateChange>{slashFractionDoubleSign}</InflationRateChange>
                <InflationRateChange>{slashFractionDowntime}</InflationRateChange>
              </FlexCol7>
              <FlexCol8>
                <Address3>{slashingParamsData?.data?.params?.signed_blocks_window ? slashingParamsData.data.params.signed_blocks_window : null}</Address3>
                <Percent>{slashingParamsData?.data?.params?.min_signed_per_window ? slashingParamsData.data.params.min_signed_per_window*100+'%' : null }</Percent>
                <Address4>{slashingParamsData?.data?.params?.downtime_jail_duration ? periodsInMinutes(slashingParamsData.data.params.downtime_jail_duration) : null }</Address4>
                <Percent2>{slashingParamsData?.data?.params?.slash_fraction_double_sign ? slashingParamsData.data.params.slash_fraction_double_sign*100+'%' : null}</Percent2>
                <Percent1>{slashingParamsData?.data?.params?.slash_fraction_downtime ? slashingParamsData.data.params.slash_fraction_downtime*100+'%' : null}</Percent1>
              </FlexCol8>
            </FlexRow3>
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

const FlexRow3 = styled.div`
  height: 273px;
  display: flex;
  padding: 31px 16px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol7 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 278px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 209px;
`;

const FlexCol8 = styled.div`
  ${UrbanistSemiBoldBlack24px}
  width: 104px;
  margin-left: 246px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 209px;
`;

const Address3 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 62px;
  letter-spacing: 0;
`;

const Address4 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 104px;
  letter-spacing: 0;
`;

export default SlashingParams