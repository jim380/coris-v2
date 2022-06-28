import  React, { useState } from "react";
import {getPercentageOfValidatorsBondedTokens, getValidatorsLogoFromWebsites, roundValidatorsVotingPowerToWholeNumber, sortValidatorsByVotingPower} from "../Util/format"
import ValidatorTilte from "./ValidatorsTitle";
import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack40px 
} from "../../styledMixins";
import SearchButton from "./SearchButton";
import Link from "next/link";

function ValidatorsContent(props) {
  const [query, setQuery] = useState("")

  const {
     validators, 
     totalBondedTokens
  } = props;

 var activeValidatorsData = validators?.map((data) => {
     if (data.status === 'BOND_STATUS_BONDED') {
   return data
     }
 }) 

var inActiveValidatorsData = validators?.map((data) => {
     if (data.status === 'BOND_STATUS_UNBONDED' || data.status === 'BOND_STATUS_UNBONDING') {
   return data
     }
 }) 

 //sort by voting power
sortValidatorsByVotingPower(activeValidatorsData)
sortValidatorsByVotingPower(inActiveValidatorsData)

//declare cumulative shares for both active and inactive validators
 let activeValidatorsCumulativeShare:number = 0
 let inActiveValidatorsCumulativeShare:number = 0

  return (
    <>
    <Title>Validators</Title>
    <Validators>
    <SearchButton setQuery={setQuery} />
    <Tabs defaultActiveKey="active" id="uncontrolled-tab-example" className="" variant="tabs">
    <Tab eventKey="active" title="Active">
      <ValidatorTilte
        rank={ValidatorTitleData.rank}
        validator={ValidatorTitleData.validator}
        votingPower={ValidatorTitleData.votingPower}
        cumulativeshare={ValidatorTitleData.cumulativeshare}
        commission={ValidatorTitleData.commission}
      />
       
       {activeValidatorsData?.filter(data => {
         //if Query does not exist
        if (query === ' ') {
            return data;
        }else if (data?.description?.moniker.toLowerCase().includes(query.toLocaleLowerCase())) {
            return data
        } 
     })
      .map((data, index) => {
         var percentageOfVotingPower: number = getPercentageOfValidatorsBondedTokens(data?.tokens, totalBondedTokens)
  
         activeValidatorsCumulativeShare += percentageOfVotingPower
    
         const commission = data?.commission?.commission_rates?.rate * 100
      return (
        <OverlapGroup10>
   <Link href='/validators[address]' as={`/validators/${data.operator_address}`} ><a> <RankValue>{index+1}</RankValue>
       <ValidatorValue>
          <img className="img"  src={getValidatorsLogoFromWebsites(data?.description?.website)} alt="" />
          {data?.description?.moniker}
          </ValidatorValue>
       <Voting>
         {roundValidatorsVotingPowerToWholeNumber(data?.tokens)}
         <br />
         <sub className="sub">{percentageOfVotingPower.toFixed(2)+'%'}</sub>
         </Voting>
       <CumulativeShare>{activeValidatorsCumulativeShare.toFixed(2)+'%'}</CumulativeShare>
        <Commission>{commission.toFixed(2)+'%'}</Commission> 
        <Delegate>
          Delegate
        </Delegate>
        </a></Link> 
      </OverlapGroup10>
       )})}
  </Tab>
  <Tab eventKey="inactive" title="InActive">
  <ValidatorTilte
        rank={ValidatorTitleData.rank}
        validator={ValidatorTitleData.validator}
        votingPower={ValidatorTitleData.votingPower}
        cumulativeshare={ValidatorTitleData.cumulativeshare}
        commission={ValidatorTitleData.commission}
      />
       
       {inActiveValidatorsData?.filter(data => {
         //if Query does not exist
        if (query === ' ') {
            return data;
        }else if (data?.description?.moniker.toLowerCase().includes(query.toLocaleLowerCase())) {
            return data
        } 
     })
       .map((data, index) => {
         var percentageOfVotingPower: number = getPercentageOfValidatorsBondedTokens(data?.tokens, totalBondedTokens)
  
         inActiveValidatorsCumulativeShare += percentageOfVotingPower
         const commission = data?.commission?.commission_rates?.rate * 100
      return (
        <OverlapGroup10>
          <Link href='/validators[address]' as={`/validators/${data.operator_address}`} ><a>
        <RankValue>{index+1}</RankValue>
        <ValidatorValue>
          <img className="img"  src={getValidatorsLogoFromWebsites(data?.description?.website)} alt="" />
          {data?.description?.moniker}
          </ValidatorValue>
       <Voting>
         {roundValidatorsVotingPowerToWholeNumber(data?.tokens)}
         <br />
         <sub className="sub">{percentageOfVotingPower.toFixed(2)+'%'}</sub>
         </Voting>
       <CumulativeShare>{inActiveValidatorsCumulativeShare.toFixed(2)+'%'}</CumulativeShare>
        <Commission>{commission.toFixed(2)+'%'}</Commission>
        <Delegate>
          Delegate
        </Delegate>
        </a></Link> 
      </OverlapGroup10>
       )})}
  </Tab>
 </Tabs>
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
  margin-left: 1px;
  margin-top: 0.33px;
  min-width: 167px;
  letter-spacing: 0;
`;

const Voting = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 300px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const CumulativeShare = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 220px;
  margin-top: 0.33px;
  min-width: 9px;
  letter-spacing: 0;
`;

const Commission = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 100px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
`;

const Delegate = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 90px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
  color: blue;
`;


export default ValidatorsContent;
