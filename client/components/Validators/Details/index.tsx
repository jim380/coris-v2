import Title from "./Title"
import styled from "styled-components";
import {
  UrbanistBoldBlack26px,
  UrbanistNormalBlack24px,
  UrbanistLightBlack24px,
  UrbanistBoldBlack40px, 
} from "../../../styledMixins";
import DelegationsContent from "./Delegation";
import { formatTime, getPercentageOfValidatorsBondedTokens, getValidatorsLogoFromWebsites, roundValidatorsVotingPowerToWholeNumber } from "../../Util/format";
import Link from "next/link";
import { useGetChainPoolQuery, useGetChainDelegationsQuery, useGetChainUnDelegationsQuery, useGetChainRedelegationsQuery } from '../../../lib/chainApi';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import UndelegationsContent from "./Undelegations";
import RelegationsContent from "./Redelegations";

function ValidatorsDetailsContent(props) {
    const validatorsDetails = props?.data?.validator
    const delegatorsShares = (validatorsDetails?.delegator_shares/1000000).toFixed(2)
    //console.log(validatorsDetails)

    //get total bonded tokens
  const getChainPool = useGetChainPoolQuery()
  const bondedTokens = getChainPool?.data?.pool?.bonded_tokens
  const percentageofVotingPower: number = getPercentageOfValidatorsBondedTokens(validatorsDetails?.tokens, bondedTokens)
   
   //get validatorsDelegations and pass to delegation component and relegation to get fetch the delegators address
  const validatorsDelegations = useGetChainDelegationsQuery(validatorsDetails?.operator_address)

    //get UnDelegations and pass to delegation component
  const unDelegations = useGetChainUnDelegationsQuery(validatorsDetails?.operator_address)

    return (
        <>
         <Title>Validator Detail</Title>
         <FlexRow1>
            <OverlapGroup13>
                <IconStar src={getValidatorsLogoFromWebsites(validatorsDetails?.description?.website)} />
              <ValidatorsName>{validatorsDetails?.description?.moniker}</ValidatorsName>
              <ValidatorsWebsite><Link href={''}><a>{validatorsDetails?.description?.website}</a></Link></ValidatorsWebsite>
              <ValidatorsDescription>{validatorsDetails?.description?.details}</ValidatorsDescription>
            </OverlapGroup13>
            
            <OverlapGroupContainer>
              <FlexRow2>
                <FlexCol4>
                  <Active>{validatorsDetails?.status !== 'BOND_STATUS_BONDED' ? <p className="inActive">Inactive</p> : <p className="active">Active</p>}</Active>
                  <Status>Status</Status>
                </FlexCol4>
                <FlexCol5>
                  <Active>{ validatorsDetails?.jailed !== false ? <p className="inActive">Yes</p> : <p className="active">No</p>}</Active>
                  <InJail>In Jail</InJail>
                </FlexCol5>
                <FlexCol6>
                  <Active>100%</Active>
                  <Uptime>Uptime</Uptime>
                </FlexCol6>
              </FlexRow2>

              <OverlapGroup15>
                <OverlapGroup2>
                    {roundValidatorsVotingPowerToWholeNumber(validatorsDetails?.tokens)}
                <ProgressBar animated now={percentageofVotingPower} />
                  <Percent>{percentageofVotingPower.toFixed(2)+'%'}</Percent>
                </OverlapGroup2> 
              </OverlapGroup15>
            </OverlapGroupContainer>
            
          </FlexRow1>
            <OverlapGroupContainer1>
              <FlexCol8>
                <FlexRow3>
                  <FlexCol9>
                    <Commission>Commission</Commission>
                    <Commission1>Commission</Commission1>
                    <Name>Max Rate</Name>
                    <Name>Max Change Rate</Name>
                  </FlexCol9>
                  <PercentContainer>
                    <Percent1>{validatorsDetails?.commission?.commission_rates?.rate *100+'%'}</Percent1>
                    <Percent2>{validatorsDetails?.commission?.commission_rates?.max_rate*100+'%'}</Percent2>
                    <Percent3>{validatorsDetails?.commission?.commission_rates?.max_change_rate*100+'%'}</Percent3>
                  </PercentContainer>
                </FlexRow3>
                <FlexRow4>
                  <Updated>Updated</Updated>
                  <Text1>{formatTime(validatorsDetails?.commission?.update_time)}</Text1>
                </FlexRow4>
              </FlexCol8>

              <FlexRow5>
                <FlexCol10>
                  <Bonded>Bonded</Bonded>
                  <Commission1>Self Bonded</Commission1>
                  <Name>Delegators Shares</Name>
                  <Name>UnBonded Height</Name>
                </FlexCol10>
                <FlexCol11>
                  <Percent1>{validatorsDetails?.min_self_delegation}</Percent1>
                  <Number>{delegatorsShares}</Number>
                  <Phone>{validatorsDetails?.unbonding_height}</Phone>
                </FlexCol11>
              </FlexRow5>

              <OverlapGroup9>
                <Addresses>Addresses</Addresses>
                <Accoubt>Account</Accoubt>
                <Account>
                  <Value>
                    oooo
                  </Value>
                </Account>
                <Operator>Operator</Operator>
                <Value>
                   iiojkkj
                  </Value>
                <Operator>Consensus</Operator>
                <Value>
                  iooo
                  </Value>
                <Operator>Hex</Operator>
                <Value>
                  9999
                  </Value>
              </OverlapGroup9>
            </OverlapGroupContainer1>
            <Rectangle46></Rectangle46>

            <TitleDelegation>Delegations</TitleDelegation>
           <Transactions>
           <Tabs defaultActiveKey="delegations" id="uncontrolled-tab-example" className="" variant="tabs">
           <Tab eventKey="delegations" title="Delegations">
            <DelegationsContent {...validatorsDelegations} />
            </Tab>
            <Tab eventKey="undelegations" title="Undelegations">
            <UndelegationsContent {...unDelegations} />
           </Tab>
           <Tab eventKey="redelegations" title="Redelegations">
           <RelegationsContent {...validatorsDelegations} />
            </Tab>
         </Tabs>
      </Transactions>
         
         <style jsx>{`
           .inActive {
           color: red;
           }
           .active {
           color: green;
           }
         `}</style>
        </>
    )
}

const FlexRow1 = styled.div`
  height: 416px;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 1336px;
`;

const OverlapGroup13 = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  padding: 48px 59px;
  align-items: center;
  min-height: 416px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const IconStar = styled.img`
  width: 50px;
  height: 50px;
`;

const ValidatorsName = styled.div`
  min-height: 38px;
  margin-top: 15px;
  margin-right: 5px;
  min-width: 185px;
  font-family: var(--font-family-urbanist);
  font-weight: 500;
  color: var(--black);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const ValidatorsWebsite = styled.div`
  min-height: 19px;
  margin-top: 16px;
  margin-right: 6px;
  min-width: 144px;
  font-family: var(--font-family-urbanist);
  font-weight: 500;
  color: #537edb;
  font-size: 16px;
  letter-spacing: 0;
`;

const ValidatorsDescription = styled.div`
  ${UrbanistLightBlack24px}
  width: 541px;
  min-height: 87px;
  align-self: flex-end;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  width: 660px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 416px;
`;

const FlexRow2 = styled.div`
  height: 200px;
  display: flex;
  padding: 61px 91px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol4 = styled.div`
  width: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const Active = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  letter-spacing: 2.08px;
`;

const Status = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 16px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const FlexCol5 = styled.div`
  width: 53px;
  margin-left: 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const InJail = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const FlexCol6 = styled.div`
  width: 83px;
  margin-left: 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const Uptime = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  align-self: flex-end;
  margin-top: 16px;
  min-width: 78px;
  letter-spacing: 0;
`;

const OverlapGroup15 = styled.div`
  height: 200px;
  margin-top: 16px;
  display: flex;
  padding: 35.2px 125px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const OverlapGroup2 = styled.div`
  width: 400px;
  position: relative;
`;

const Percent = styled.div`
  position: absolute;
  top: 48px;
  left: 35px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--chambray);
  font-size: 29px;
  letter-spacing: 2.32px;
`;

const OverlapGroupContainer1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1336px;
`;

const FlexCol8 = styled.div`
  width: 322px;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  align-items: center;
  min-height: 416px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexRow3 = styled.div`
  height: 304px;
  display: flex;
  align-items: flex-start;
  min-width: 290px;
`;

const FlexCol9 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 209px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 303px;
`;

const Commission = styled.div`
  min-height: 29px;
  align-self: flex-end;
  min-width: 128px;
  letter-spacing: 0;
`;

const Commission1 = styled.div`
  min-height: 29px;
  margin-top: 119px;
  letter-spacing: 0;
`;

const Name = styled.div`
  min-height: 29px;
  margin-top: 34px;
  letter-spacing: 0;
`;

const PercentContainer = styled.div`
  ${UrbanistBoldBlack26px}
  width: 54px;
  align-self: flex-end;
  margin-left: 27px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 157px;
`;

const Percent1 = styled.div`
  min-height: 31px;
  min-width: 37px;
  letter-spacing: 2.08px;
`;

const Percent2 = styled.div`
  min-height: 31px;
  margin-top: 32px;
  min-width: 54px;
  letter-spacing: 2.08px;
`;

const Percent3 = styled.div`
  min-height: 31px;
  margin-top: 32px;
  min-width: 49px;
  letter-spacing: 2.08px;
`;

const FlexRow4 = styled.div`
  height: 31px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  min-width: 290px;
`;

const Updated = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  min-width: 94px;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  margin-left: 43px;
  min-width: 153px;
  letter-spacing: 2.08px;
`;

const FlexRow5 = styled.div`
  height: 416px;
  margin-left: 16px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  min-width: 322px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol10 = styled.div`
  ${UrbanistNormalBlack24px}
  width: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 303px;
`;

const Bonded = styled.div`
  min-height: 29px;
  align-self: flex-end;
  min-width: 81px;
  letter-spacing: 0;
`;

const FlexCol11 = styled.div`
  ${UrbanistBoldBlack26px}
  width: 114px;
  align-self: center;
  margin-left: 1px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 157px;
`;

const Number = styled.div`
  min-height: 31px;
  margin-top: 32px;
  min-width: 42px;
  font-size: 20px;
  letter-spacing: 2.08px;
`;

const Phone = styled.div`
  min-height: 31px;
  margin-top: 32px;
  min-width: 114px;
  letter-spacing: 2.08px;
`;

const OverlapGroup9 = styled.div`
  width: 660px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  align-items: flex-start;
  min-height: 416px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Addresses = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  align-self: center;
  min-width: 110px;
  letter-spacing: 0;
`;

const Accoubt = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 33px;
  letter-spacing: 0;
`;

const Account = styled.div`
  height: 29px;
  margin-top: 9px;
  display: flex;
  align-items: flex-end;
  min-width: 431px;
`;

const Value = styled.div`
  min-height: 29px;
  min-width: 386px;
  font-family: var(--font-family-urbanist);
  font-weight: 400;
  color: #0015da;
  font-size: var(--font-size-xxl2);
  letter-spacing: 0;
`;

const Operator = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 15px;
  letter-spacing: 0;
`;

const Rectangle46 = styled.div`
  width: 1336px;
  height: 208px;
  margin-top: 16px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Transactions = styled.div`
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

const TitleDelegation = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 112px;
  letter-spacing: 0;
  margin-top: 30px
`;
export default ValidatorsDetailsContent