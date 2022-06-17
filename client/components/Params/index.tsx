import React from 'react'
import styled from "styled-components";
import { useGetChainGovParamsQuery, useGetChainMintingParamsQuery, useGetChainSlashingParamsQuery } from '../../lib/chainApi';
import {
  UrbanistNormalBlack24px,
  UrbanistBoldBlack40px,
} from "../../styledMixins";
import DistributionParams from './Distribution';
import GovParams from './Gov';
import MintParams from './Minting';
import SlashingParams from './Slashing';
import StakingParams from './Staking';

function ParamsContent() {
  
 const getMintingParams = useGetChainMintingParamsQuery(),
       //pass the params type to the gov 
       getGovVotingParams = useGetChainGovParamsQuery('voting'),   
       getGovDepositParams = useGetChainGovParamsQuery('deposit'),   
       getGovTallyingParams = useGetChainGovParamsQuery('tallying'),
       getSlashingParams = useGetChainSlashingParamsQuery();   


    const minitingParamtersData = {
        mintDenom: "Mint Denom",
        inflationRateChange: "Inflation Rate Change",
        inflationMax: "Inflation Max",
        inflationMin: "Inflation Min",
        goalBonded: "Goal Bonded",
        blocksPerYear: "Blocks Per Year",
        mintingParamsData: getMintingParams
    }

    const govParamtersData = {
       minDeposit: "Min Deposit",
       name1: "Max Deposit Period",
       quorom: "Quorom",
       threshold: "Threshold",
       vetoThreshold: "Veto Threshold",
       votingPeriod: "Voting Period",
       govVotingParamsData: getGovVotingParams,
       govDepositParamsData: getGovDepositParams,
       govTallyingParamsData: getGovTallyingParams
   }

   const slashingParametersData = {
    signedBlockWindow: "Signed Block Window",
    minSignedPerWindow: "Min signed Per Window",
    downtimeJailDuration: "Downtime Jail Duration",
    slashFractionDoubleSign: "Slash Fraction Double Sign",
    slashFractionDowntime: "Slash Fraction Downtime",
    address5: "5 000",
    percent8: "13%",
    address6: "2 minutes",
    percent9: "35%",
    percent10: "67%",
    slashingParamsData: getSlashingParams
}

    return (
    <>
      <Title>{parametersData.title}</Title>
          <ParametersContainer>
            <MiningParameters>{parametersData.mintingParameters}</MiningParameters>
            <GovernanceParameters>{parametersData.governanceParameters}</GovernanceParameters>
          </ParametersContainer>
          <OverlapGroupContainer>
            <MintParams {...minitingParamtersData} />
            <GovParams {...govParamtersData} />
          </OverlapGroupContainer>

          <IngParametersContainer>
            <SlashingParameters>{parametersData.slashingParameters}</SlashingParameters>
            <StakingParameters>{parametersData.stakingParameters}</StakingParameters>
          </IngParametersContainer>
          <OverlapGroupContainer>
            <SlashingParams {...slashingParametersData} />
            <StakingParams {...stakingParametersData} />
          </OverlapGroupContainer>
          
          <DistributionParametersContainer>
            <DistributionParameters>{parametersData.distributionParameters1}</DistributionParameters>
            <DistributionParameters1>{parametersData.distributionParameters2}</DistributionParameters1>
          </DistributionParametersContainer>
          <OverlapGroupContainer>
           <DistributionParams {...distributionParamtersData} />
          </OverlapGroupContainer>
    </>
    )
}

const parametersData = {
    title: "Parameters",
    mintingParameters: "Minting Parameters",
    governanceParameters: "Governance Parameters",
    slashingParameters: "Slashing Parameters",
    stakingParameters: "Staking Parameters",
    distributionParameters1: "Distribution Parameters",
    distributionParameters2: "Distribution Parameters",
};

const stakingParametersData = {
    unbondingTime: "Unbonding Time",
    name2: "Max Validators",
    name3: "Max Entries",
    historicalEntries: "Historical Entries",
    surname: "Bond Denom",
    address7: "4 days",
    number1: "115",
    number2: "7",
    address8: "10 000",
    address9: "45 679 CORIS",
}

const distributionParamtersData = {
    communityTax: "Community Tax",
    baseProposerReward: "Base Proposer Reward",
    bonusProposerReward: "Bonus Proposer Reward",
    withdrawalAdressEnabled: "Withdrawal Adress Enabled",
    percent11: "2%",
    percent12: "13%",
    percent13: "4%",
    place1: "True",
    cosmosSdkVersion: "Cosmos SDK Version",
    tendermintVersion: "Tendermint Version",
    binaryVersion: "Binary Version",
    text1: "0.00.5",
    text2: "1.2",
    text3: "3.4",
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