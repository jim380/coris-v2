import React from 'react'
import styled from "styled-components";
import {
  UrbanistSemiBoldSoap24px,
  UrbanistSemiBoldBlueBell24px,
  UrbanistNormalBlack24px,
  UrbanistBoldBlack20px,
  UrbanistSemiBoldBlack24px,
  UrbanistBoldBlack40px,
  UrbanistLightBlack15px,
  UrbanistMediumBlack18px,
  ValignTextMiddle,
} from "../../../styledMixins";

function DistributionParams(props) {
    const {
        communityTax,
        baseProposerReward,
        bonusProposerReward,
        withdrawalAdressEnabled,
        percent11,
        percent12,
        percent13,
        place1,
        distributionParamsData
      } = props;
 
    return (
      <>
       <FlexRow5>
              <FlexCol11>
                <MintDenom>{communityTax}</MintDenom>
                <InflationRateChange>{baseProposerReward}</InflationRateChange>
                <InflationRateChange>{bonusProposerReward}</InflationRateChange>
                <InflationRateChange>{withdrawalAdressEnabled}</InflationRateChange>
              </FlexCol11>
              <FlexCol12>
                <Percent3>{distributionParamsData?.data?.params?.community_tax? distributionParamsData.data.params.community_tax*100+'%' : null}</Percent3>
                <Percent>{distributionParamsData?.data?.params?.base_proposer_reward? distributionParamsData.data.params.base_proposer_reward*100+'%' : null}</Percent>
                <Percent4>{distributionParamsData?.data?.params?.bonus_proposer_reward? distributionParamsData.data.params.bonus_proposer_reward*100+'%' : null}</Percent4>
                <Place>{distributionParamsData?.data?.params?.withdraw_addr_enabled?  distributionParamsData?.data?.params?.withdraw_addr_enabled === true? 'true' : 'false' : null}</Place>
              </FlexCol12>
            </FlexRow5>
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

const FlexRow5 = styled.div`
  height: 228px;
  display: flex;
  padding: 31px 16px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol11 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 164px;
`;

const FlexCol12 = styled.div`
  ${UrbanistSemiBoldBlack24px}
  width: 49px;
  margin-left: 291px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 164px;
`;

const Percent3 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 31px;
  letter-spacing: 0;
`;

const Percent4 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 31px;
  letter-spacing: 0;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 49px;
  letter-spacing: 0;
`;

export default DistributionParams