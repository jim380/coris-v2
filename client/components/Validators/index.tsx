import  React from "react";
import {getPercentageOfValidatorsBondedTokens, getValidatorsLogoFromWebsites, roundValidatorsVotingPowerToWholeNumber, sortValidatorsByVotingPower} from "../Util/format"
import ValidatorTilte from "./ValidatorsTitle";
import styled from "styled-components";
import {
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px 
} from "../../styledMixins";
import ValidatorsActiveInactive from "./Buttons";

function ValidatorsContent(props) {
  const {
     validators, 
     totalBondedTokens
  } = props;
  
 var validatorsData = validators?.map((data, index) => {
   return data
 }) 
sortValidatorsByVotingPower(validatorsData)
 let cumulativeShare:number = 0

  return (
    <>
    <Title>Validators</Title>
    <Validators>
      <ValidatorsActiveInactive />
      <ValidatorTilte
        rank={ValidatorTitleData.rank}
        validator={ValidatorTitleData.validator}
        votingPower={ValidatorTitleData.votingPower}
        cumulativeshare={ValidatorTitleData.cumulativeshare}
        commission={ValidatorTitleData.commission}
        //uptime={ValidatorTitleData.uptime}
      />
   
       {validatorsData?.map((data, index) => {
         var percentageOfVotingPower: number = getPercentageOfValidatorsBondedTokens(data?.tokens, totalBondedTokens)
  
         cumulativeShare += percentageOfVotingPower
         const commission = data.commission.commission_rates.rate * 100
         console.log(data)
      return (
        <OverlapGroup10>
        <RankValue>{index+1}</RankValue>
        <ValidatorValue>
          <img className="img"  src={getValidatorsLogoFromWebsites(data.description.website)} alt="" />
          {data?.description?.moniker}
          </ValidatorValue>
       <Voting>
         {roundValidatorsVotingPowerToWholeNumber(data?.tokens)}
         <br />
         <sub className="sub">{percentageOfVotingPower.toFixed(2)+'%'}</sub>
         </Voting>
       <CumulativeShare>{cumulativeShare.toFixed(2)+'%'}</CumulativeShare>
        <Commission>{commission.toFixed(2)+'%'}</Commission>
        <Uptime>
          Delegate
        </Uptime>
      </OverlapGroup10>
       )})}
    </Validators>
         <style jsx>{`
           .img {
           margin-right: 10px;
           }
           .sub {
             color: red;
             font-size: 10px;
           }
         `}</style>
    </>
  );
}

const ValidatorTitleData = {
  rank: "Rank",
  validator: "Validator",
  votingPower: "Voting Power",
  cumulativeshare: "Cumulative Share",
  commission: "Commission",
  uptime: "Uptime",
};

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 112px;
  letter-spacing: 0;
  margin-top: 30px
`;

const Validators = styled.div`
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

const RankValue = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  margin-top: 0.33px;
  min-width: 74px;
  letter-spacing: 0;
`;

const ValidatorValue = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 12px;
  margin-top: 0.33px;
  min-width: 167px;
  letter-spacing: 0;
`;

const Ellipse8 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-left: 100px;
  background-color: var(--roman);
  border-radius: 15.93px;
`;

const Voting = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 120px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const CumulativeShare = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 320px;
  margin-top: 0.33px;
  min-width: 9px;
  letter-spacing: 0;
`;

const Commission = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 190px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
`;

const Uptime = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 140px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
  color: blue;
`;


export default ValidatorsContent;
