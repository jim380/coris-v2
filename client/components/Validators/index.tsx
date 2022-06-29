import React, { useState } from "react";
import { getPercentageOfValidatorsBondedTokens, getValidatorsLogoFromWebsites, roundValidatorsVotingPowerToWholeNumber, sortValidatorsByVotingPower } from "../Util/format"
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
import { Router, useRouter } from "next/router";

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
  let activeValidatorsCumulativeShare: number = 0
  let inActiveValidatorsCumulativeShare: number = 0

  const router = useRouter()

  return (
    <>
      <Title>Validators</Title>
      <Validators>
        <SearchButton setQuery={setQuery} />
        <Tabs defaultActiveKey="active" id="uncontrolled-tab-example" className="" variant="tabs">
          <Tab eventKey="active" title="Active" className="w-100">
            {/* <ValidatorTilte
              rank={ValidatorTitleData.rank}
              validator={ValidatorTitleData.validator}
              votingPower={ValidatorTitleData.votingPower}
              cumulativeshare={ValidatorTitleData.cumulativeshare}
              commission={ValidatorTitleData.commission}
            /> */}

            <table className="w-100 mt-3">
              <thead>
                <tr style={{ fontWeight: "bold" }}>
                  <th>Rank</th>
                  <th>Validator</th>
                  <th>Voting Power</th>
                  <th>Cummulative Share</th>
                  <th>Commission</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {activeValidatorsData?.filter(data => {
                  //if Query does not exist
                  if (query === ' ') {
                    return data;
                  } else if (data?.description?.moniker.toLowerCase().includes(query.toLocaleLowerCase())) {
                    return data
                  }
                })
                  .map((data, index) => {
                    var percentageOfVotingPower: number = getPercentageOfValidatorsBondedTokens(data?.tokens, totalBondedTokens)

                    activeValidatorsCumulativeShare += percentageOfVotingPower

                    const commission = data?.commission?.commission_rates?.rate * 100
                    return (
                      <tr className="validator-item-row" onClick={() => router.push(`/validators/${data.operator_address}`)} >
                        <td>{index + 1}</td>
                        <td>
                          <Flex>
                            <FlexMiddle>
                              <img className="img" src={getValidatorsLogoFromWebsites(data?.description?.website)} alt="" />
                            </FlexMiddle>
                            <FlexMiddle>
                              {data?.description?.moniker}
                            </FlexMiddle>
                          </Flex>
                        </td>
                        <td>
                          {roundValidatorsVotingPowerToWholeNumber(data?.tokens)}
                          <div className="sub">{percentageOfVotingPower.toFixed(2) + '%'}</div>
                        </td>
                        <td>{activeValidatorsCumulativeShare.toFixed(2) + '%'}</td>
                        <td>{commission.toFixed(2) + '%'}</td>
                        <td>Delegate</td>
                      </tr>
                    )
                  }
                  )
                }
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="inactive" title="InActive">
            {/* <ValidatorTilte
              rank={ValidatorTitleData.rank}
              validator={ValidatorTitleData.validator}
              votingPower={ValidatorTitleData.votingPower}
              cumulativeshare={ValidatorTitleData.cumulativeshare}
              commission={ValidatorTitleData.commission}
            /> */}

            <table className="w-100 mt-3">
              <thead>
                <tr style={{ fontWeight: "bold" }}>
                  <th>Rank</th>
                  <th>Validator</th>
                  <th>Voting Power</th>
                  <th>Cummulative Share</th>
                  <th>Commission</th>
                  <th>Uptime</th>
                </tr>
              </thead>
              <tbody>
                {inActiveValidatorsData?.filter(data => {
                  //if Query does not exist
                  if (query === ' ') {
                    return data;
                  } else if (data?.description?.moniker.toLowerCase().includes(query.toLocaleLowerCase())) {
                    return data
                  }
                })
                  .map((data, index) => {
                    var percentageOfVotingPower: number = getPercentageOfValidatorsBondedTokens(data?.tokens, totalBondedTokens)

                    inActiveValidatorsCumulativeShare += percentageOfVotingPower
                    const commission = data?.commission?.commission_rates?.rate * 100
                    
                    return (
                      <tr className="validator-item-row" onClick={() => router.push(`/validators/${data.operator_address}`)} >
                        <td>{index + 1}</td>
                        <td>
                          <Flex>
                            <FlexMiddle>
                              <img className="img" src={getValidatorsLogoFromWebsites(data?.description?.website)} alt="" />
                            </FlexMiddle>
                            <FlexMiddle>
                              {data?.description?.moniker}
                            </FlexMiddle>
                          </Flex>
                        </td>
                        <td>
                          {roundValidatorsVotingPowerToWholeNumber(data?.tokens)}
                          <div className="sub">{percentageOfVotingPower.toFixed(2) + '%'}</div>
                        </td>
                        <td>{inActiveValidatorsCumulativeShare.toFixed(2) + '%'}</td>
                        <td>{commission.toFixed(2) + '%'}</td>
                        <td>Delegate</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
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

const Flex = styled.div`
  display: flex;
`;

const FlexMiddle = styled.div`
  display: flex;
  align-items:center
`;

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
  width: 100%;
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
