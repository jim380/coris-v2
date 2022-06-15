import React from 'react'
import styled from "styled-components";
import {
  UrbanistNormalBlack24px,
  UrbanistBoldBlack40px,
} from "../../styledMixins";
import GovParams from './Gov';
import MintParams from './Minting';
import SlashingParams from './Slashing';
import StakingParams from './Staking';

function ParamsContent(props) {
    const {
        title,
        miningParameters,
        governanceParameters,
        slashingParameters,
        stakingParameters,
        distributionParameters1,
        distributionParameters2,
      } = props;
    return (
    <>
      <Title>{title}</Title>
          <ParametersContainer>
            <MiningParameters>{miningParameters}</MiningParameters>
            <GovernanceParameters>{governanceParameters}</GovernanceParameters>
          </ParametersContainer>
          <OverlapGroupContainer>
            <MintParams />
            <GovParams />
          </OverlapGroupContainer>

          <IngParametersContainer>
            <SlashingParameters>{slashingParameters}</SlashingParameters>
            <StakingParameters>{stakingParameters}</StakingParameters>
          </IngParametersContainer>
          <OverlapGroupContainer>
            <SlashingParams />
            <StakingParams />
          </OverlapGroupContainer>
          
          <DistributionParametersContainer>
            <DistributionParameters>{distributionParameters1}</DistributionParameters>
            <DistributionParameters1>{distributionParameters2}</DistributionParameters1>
          </DistributionParametersContainer>
          <OverlapGroupContainer>

            </OverlapGroupContainer>
    </>
    )
}

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  margin-top: 54px;
  letter-spacing: 0;
`;

const ParametersContainer = styled.div`
  ${UrbanistNormalBlack24px}
  height: 29px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 933px;
`;

const MiningParameters = styled.div`
  min-height: 29px;
  min-width: 197px;
  letter-spacing: 0;
`;

const GovernanceParameters = styled.div`
  min-height: 29px;
  margin-left: 479px;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  margin-top: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 1336px;
`;

const IngParametersContainer = styled.div`
  ${UrbanistNormalBlack24px}
  height: 29px;
  margin-top: 31px;
  display: flex;
  align-items: flex-start;
  min-width: 883px;
`;

const SlashingParameters = styled.div`
  min-height: 29px;
  min-width: 215px;
  letter-spacing: 0;
`;

const StakingParameters = styled.div`
  min-height: 29px;
  margin-left: 461px;
  letter-spacing: 0;
`;

const DistributionParametersContainer = styled.div`
  ${UrbanistNormalBlack24px}
  height: 29px;
  margin-top: 31px;
  display: flex;
  align-items: flex-start;
  min-width: 921px;
`;

const DistributionParameters = styled.div`
  min-height: 29px;
  min-width: 245px;
  letter-spacing: 0;
`;

const DistributionParameters1 = styled.div`
  min-height: 29px;
  margin-left: 431px;
  letter-spacing: 0;
`;


export default ParamsContent