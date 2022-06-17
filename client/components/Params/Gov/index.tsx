import React from 'react'
import styled from "styled-components";
import {
  UrbanistNormalBlack24px,
  UrbanistSemiBoldBlack24px,
  ValignTextMiddle,
} from "../../../styledMixins";
import { periodsInDays } from '../../Util/format';

function GovParams(props) {
    const {
        minDeposit,
        name1,
        quorom,
        threshold,
        vetoThreshold,
        votingPeriod,
        govVotingParamsData,
        govDepositParamsData,
        govTallyingParamsData 
      } = props;
  
    return (
        <>
         <FlexRow2>
              <FlexCol5>
                <MintDenom>{minDeposit}</MintDenom>
                <InflationRateChange>{name1}</InflationRateChange>
                <InflationRateChange>{quorom}</InflationRateChange>
                <InflationRateChange>{threshold}</InflationRateChange>
                <InflationRateChange>{vetoThreshold}</InflationRateChange>
                <InflationRateChange>{votingPeriod}</InflationRateChange>
              </FlexCol5>
              <FlexCol6>
                <Address1>{govDepositParamsData?.data?.deposit_params?.min_deposit ? govDepositParamsData?.data?.deposit_params?.min_deposit[0]?.amount+''+ govDepositParamsData?.data?.deposit_params?.min_deposit[0]?.denom : null}</Address1>
                <Address2>{govDepositParamsData?.data?.deposit_params?.max_deposit_period ? periodsInDays(govDepositParamsData.data.deposit_params.max_deposit_period): null}</Address2>
                <Percent1>{govTallyingParamsData?.data?.tally_params?.quorum? govTallyingParamsData.data.tally_params.quorum*100+'%' : null}</Percent1>
                <Percent2>{govTallyingParamsData?.data?.tally_params?.threshold? govTallyingParamsData.data.tally_params.threshold*100+'%' : null }</Percent2>
                <Percent1>{govTallyingParamsData?.data?.tally_params?.veto_threshold ? govTallyingParamsData.data.tally_params.veto_threshold*100+'%' : null}</Percent1>
                <Address2>{govVotingParamsData?.data?.voting_params?.voting_period? periodsInDays(govVotingParamsData.data.voting_params.voting_period): null}</Address2>
              </FlexCol6>
            </FlexRow2>
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

const FlexRow2 = styled.div`
  height: 318px;
  margin-left: 16px;
  display: flex;
  padding: 31px 16px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol5 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 204px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 254px;
`;

const FlexCol6 = styled.div`
  ${UrbanistSemiBoldBlack24px}
  width: 148px;
  margin-left: 276px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 254px;
`;

const Address1 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 148px;
  letter-spacing: 0;
`;

const Address2 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 71px;
  letter-spacing: 0;
`;

export default GovParams