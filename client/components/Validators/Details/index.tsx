import Title from "./Title"
import styled from "styled-components";
import {
  UrbanistBoldBlack26px,
  UrbanistNormalBlack24px,
  UrbanistLightBlack24px,
} from "../../../styledMixins";
import DelegationsContent from "./Delegation";
import { formatTime, getValidatorsLogoFromWebsites } from "../../Util/format";
import Image from 'next/image'
import Link from "next/link";

function ValidatorsDetailsContent(props) {
    const validatorsDetails = props?.data?.validator
    console.log(validatorsDetails)
    const {
        validatorsName,
        httpsOdogwuCom,
        chibuzorOneIsANo,
        place1,
        inJail,
        uptime,
        percent2,
        address1,
        percent3,
        percent4,
        percent5,
        text1,
        percent6,
        number1,
        phone,
        x34Gd73874Gf783Ff374Gfg4783Gf298H,
      } = props;
    
    return (
        <>
         <Title>Validator Detail</Title>
         <FlexRow1>
            <OverlapGroup13>
                <IconStar src={getValidatorsLogoFromWebsites(validatorsDetails?.description?.website)} />
              <ValidatorsName>{validatorsDetails?.description?.moniker}</ValidatorsName>
              <ValidatorsWebsite><Link href={''}><a>https:{validatorsDetails?.description?.website}</a></Link></ValidatorsWebsite>
              <ValidatorsDescription>{validatorsDetails?.description?.details}</ValidatorsDescription>
            </OverlapGroup13>
            <OverlapGroupContainer>

              <FlexRow2>
                <FlexCol4>
                  <Active>{validatorsDetails?.status !== 'BOND_STATUS_BONDED' ? 'Inactive' : 'Active'}</Active>
                  <Status>Status</Status>
                </FlexCol4>
                <FlexCol5>
                  <Active>{validatorsDetails?.jailed !== false ? 'Yes' : 'No'}</Active>
                  <InJail>In Jail</InJail>
                </FlexCol5>
                <FlexCol6>
                  <Active>100%</Active>
                  <Uptime>Uptime</Uptime>
                </FlexCol6>
              </FlexRow2>

              <OverlapGroup15>
                <OverlapGroup2>
                  <Ellipse10></Ellipse10>
                  <Ellipse11 src="https://anima-uploads.s3.amazonaws.com/projects/626b0c710186986aa7979309/releases/62a4ee972857c158760c7c4f/img/ellipse-11@2x.svg" />
                  <Percent>{percent2}</Percent>
                </OverlapGroup2>
                <Details>
                  <VotingPower>Voting Power</VotingPower>
                  <Address>{address1}</Address>
                </Details>
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
                  <Name>Delegators</Name>
                  <Name>UnBonded Height</Name>
                </FlexCol10>
                <FlexCol11>
                  <Percent1>{validatorsDetails?.min_self_delegation}</Percent1>
                  <Number>{number1}</Number>
                  <Phone>{validatorsDetails?.unbonding_height}</Phone>
                </FlexCol11>
              </FlexRow5>


              <OverlapGroup9>
                <Addresses>Addresses</Addresses>
                <Accoubt>Account</Accoubt>
                <Account>
                  <Value>
                    {x34Gd73874Gf783Ff374Gfg4783Gf298H}
                  </Value>
                </Account>
                <Operator>Operator</Operator>
                <Value>
                    {x34Gd73874Gf783Ff374Gfg4783Gf298H}
                  </Value>
                <Operator>Consensus</Operator>
                <Value>
                    {x34Gd73874Gf783Ff374Gfg4783Gf298H}
                  </Value>
                <Operator>Hex</Operator>
                <Value>
                    {x34Gd73874Gf783Ff374Gfg4783Gf298H}
                  </Value>
              </OverlapGroup9>
            </OverlapGroupContainer1>
            <Rectangle46></Rectangle46>
            <DelegationsContent />
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

const OverlapGroup16 = styled.div`
  height: 128px;
  margin-right: 6px;
  display: flex;
  padding: 36.3px 34px;
  align-items: flex-end;
  min-width: 128px;
  background-color: #5d2ac9;
  border-radius: 64px;
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
  width: 128px;
  height: 129px;
  position: relative;
`;

const Ellipse10 = styled.div`
  position: absolute;
  width: 128px;
  height: 128px;
  top: 1px;
  left: 0;
  border-radius: 64px;
  border: 14.5px solid var(--chambray);
`;

const Ellipse11 = styled.img`
  position: absolute;
  width: 71px;
  height: 72px;
  top: 0;
  left: 0;
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

const Details = styled.div`
  width: 150px;
  align-self: center;
  margin-left: 128px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
`;

const VotingPower = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Address = styled.div`
  min-height: 24px;
  margin-top: 9px;
  margin-left: 6px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-xl2);
  letter-spacing: 1.6px;
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

const IconCopy = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 19px;
  margin-bottom: 1px;
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

export default ValidatorsDetailsContent