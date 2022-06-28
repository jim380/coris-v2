import React, { useState } from 'react'
import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Badge from 'react-bootstrap/Badge'
import Link from "next/link";
import {
  UrbanistSemiBoldBlack172px,
  UrbanistNormalNewCar172px,
  UrbanistMediumBlack172px,
  UrbanistBoldWhite20px,
  UrbanistBoldBlack40px,
  ValignTextMiddle,
} from "../../styledMixins";
import SearchButton from './SearchButton';
import { formatTimeDateYear } from '../Util/format';

function ProposalsContent(props) {
    const [query, setQuery] = useState("")
    const {
        title1,
        id,
        title2,
        status,
        votingStart,
        votingEnd,
        totalDeposit,
        proposalsData
      } = props;
    //console.log(proposalsData)
      const activeProposals = proposalsData?.data?.proposals?.map(proposal => {
          if (proposal.status === 'PROPOSAL_STATUS_VOTING_PERIOD' || proposal.status === 'PROPOSAL_STATUS_PASSED' || proposal.status === 'PROPOSAL_STATUS_REJECTED' || proposal.status === 'PROPOSAL_STATUS_FAILED' ) {
            return proposal
          } 
      })
      
      const pendingProposals = proposalsData?.data?.proposals?.map(proposal => {
          if (proposal.status === 'PROPOSAL_STATUS_DEPOSIT_PERIOD' ) {
            return proposal
          } 
      })

    return(
        <>
        <Title>{title1}</Title>
            <Tabs defaultActiveKey="active" id="uncontrolled-tab-example" className="" variant="tabs">
          <Tab eventKey="active" title="Active">
            <OverlapGroup13>
           <SearchButton setQuery={setQuery} />
           <ProposalHeading>
              <ID>{id}</ID>
              <Title1>{title2}</Title1>
              <Status>{status}</Status>
              <VotingStart>{votingStart}</VotingStart>
              <VotingEnd>{votingEnd}</VotingEnd>
              <TotalDeposit>{totalDeposit}</TotalDeposit>
            </ProposalHeading>
            {activeProposals?.filter(proposal => {
               if (query === ' '){
                  return proposal
               }else if (proposal?.content?.title.toLowerCase().includes(query.toLocaleLowerCase())) {
                return proposal
            } 
            })
            .map((proposal) =>
            <OverlapGroupContainer1>
              <Link href='/proposals[id]' as={`/proposals/${proposal?.proposal_id}`} ><a>
              <OverlapGroup2>
                <Number>{proposal?.proposal_id}</Number>
                <TitleValue>{proposal?.content?.description? proposal.content.title.slice(0, 40)+'....' : null}</TitleValue>
                <OverlapGroup3>
                <SatusValue>{proposal.status === 'PROPOSAL_STATUS_PASSED'? (<Badge bg="success">PASSED</Badge>) : proposal.status === 'PROPOSAL_STATUS_REJECTED'? (<Badge bg="danger">REJECTED</Badge>) : proposal.status === 'PROPOSAL_STATUS_VOTING_PERIOD'? (<Badge bg="info">VOTING PERIOD</Badge>) : (<Badge bg="warning">FAILED</Badge>)}</SatusValue>
                </OverlapGroup3>
                <VotingStartValue>{formatTimeDateYear(proposal.voting_start_time)}</VotingStartValue>
                <VotingEndvalue>{formatTimeDateYear(proposal.voting_end_time)}</VotingEndvalue>
                <TotalDepositValue>{proposal.total_deposit[0].amount+' '+ proposal.total_deposit[0].denom}</TotalDepositValue>
              </OverlapGroup2>
              </a></Link>
            </OverlapGroupContainer1>
            )}
            </OverlapGroup13>
            </Tab>
     <Tab eventKey="pending" title="Pending">
       <OverlapGroup13>
        <SearchButton setQuery={setQuery} />
         <ProposalHeading>
              <ID>{id}</ID>
              <Title1>{title2}</Title1>
              <Status>{status}</Status>
              <VotingStart>{votingStart}</VotingStart>
              <VotingEnd>{votingEnd}</VotingEnd>
              <TotalDeposit>{totalDeposit}</TotalDeposit>
            </ProposalHeading>
            {pendingProposals?.filter(proposal => {
               if (query === ' '){
                  return proposal
               }else if (proposal?.content?.title.toLowerCase().includes(query.toLocaleLowerCase())) {
                return proposal
            } 
            })
            .map((proposal) =>
            <OverlapGroupContainer1>
                 <Link href='/proposals[id]' as={`/proposals/${proposal?.proposal_id}`} ><a>
              <OverlapGroup2>
                <Number>{proposal?.proposal_id}</Number>
                <TitleValue>{proposal?.content?.description? proposal.content.title.slice(0, 55) : null}</TitleValue>
                <OverlapGroup3>
                <SatusValue>{proposal.status === 'PROPOSAL_STATUS_DEPOSIT_PERIOD'? (<Badge bg="warning">DEPOSIT PERIOD</Badge>) : null}</SatusValue>
                </OverlapGroup3>
                <VotingStartValue>{formatTimeDateYear(proposal.voting_start_time)}</VotingStartValue>
                <VotingEndvalue>{formatTimeDateYear(proposal.voting_end_time)}</VotingEndvalue>
                <TotalDepositValue>{proposal.total_deposit[0].amount+' '+ proposal.total_deposit[0].denom}</TotalDepositValue>
              </OverlapGroup2>
              </a></Link>
            </OverlapGroupContainer1>
            )}
            </OverlapGroup13>
            </Tab>
        </Tabs>
        </>
    )
}

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  margin-top: 54px;
  letter-spacing: 0;
`;

const OverlapGroup13 = styled.div`
  width: 1336px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  padding: 27px 13px;
  align-items: center;
  min-height: 886px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;


const ProposalHeading = styled.div`
  ${UrbanistSemiBoldBlack172px}
  align-self: flex-end;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 1292px;
`;

const ID = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  align-self: flex-end;
  margin-bottom: 0;
  min-width: 30px;
  letter-spacing: 0;
`;

const Title1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 48px;
  min-width: 34px;
  letter-spacing: 0;
`;

const Status = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 404px;
  min-width: 50px;
  letter-spacing: 0;
`;

const VotingStart = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 150px;
  min-width: 94px;
  letter-spacing: 0;
`;

const VotingEnd = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 133px;
  min-width: 84px;
  letter-spacing: 0;
`;

const TotalDeposit = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  align-self: flex-end;
  margin-left: 140px;
  min-width: 102px;
  letter-spacing: 0;
`;

const OverlapGroupContainer1 = styled.div`
  width: 1303px;
  height: 59px;
  position: relative;
  margin-top: 19px;
  margin-right: 1px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 60px;
  top: 0;
  left: 0;
  display: flex;
  padding: 16px 7px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Number = styled.div`
  ${UrbanistMediumBlack172px}
  min-height: 21px;
  margin-top: 0.72px;
  min-width: 20px;
  letter-spacing: 0;
`;

const TitleValue = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 59px;
  margin-top: 0.72px;
  min-width: 408px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 28px;
  align-self: flex-start;
  margin-left: 30px;
  display: flex;
  padding: 1.7px 16.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 106px;
  background-color: var(--forest-green);
  border-radius: 12.52px;
`;

const SatusValue = styled.div`
  ${UrbanistBoldWhite20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const VotingStartValue = styled.div`
  ${UrbanistMediumBlack172px}
  min-height: 21px;
  margin-left: 94px;
  margin-top: 0.72px;
  min-width: 142px;
  letter-spacing: 0;
`;

const VotingEndvalue = styled.div`
  ${UrbanistMediumBlack172px}
  min-height: 21px;
  margin-left: 87px;
  margin-top: 0.72px;
  min-width: 142px;
  letter-spacing: 0;
`;

const TotalDepositValue = styled.div`
  ${UrbanistMediumBlack172px}
  min-height: 21px;
  margin-left: 90px;
  margin-top: 0.72px;
  min-width: 89px;
  letter-spacing: 0;
`;

export default ProposalsContent