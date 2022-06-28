import React from 'react'
import styled from "styled-components";
import  Badge  from 'react-bootstrap/Badge';
import  ProgressBar  from 'react-bootstrap/ProgressBar';
import  CardGroup  from 'react-bootstrap/CardGroup';
import  Card  from 'react-bootstrap/Card';
import {
  UrbanistNormalBlack24px,
  UrbanistBoldWhite20px,
  UrbanistSemiBoldBlack24px,
  UrbanistBoldBlack40px,
  ValignTextMiddle,
} from "../../../styledMixins";
import { formatTimeDateYear } from '../../Util/format';

function ProposalDetailsContents(props){
    const {
        title,
        type,
        total,
        proposalDetails
      } = props;
   
     //check if still loading and if loading, display the loading page
     if (proposalDetails.isLoading !== false){
     }
     
     const finalTallyResultSum = Number(proposalDetails?.data?.proposal?.final_tally_result?.yes) + Number(proposalDetails?.data?.proposal?.final_tally_result?.no) + Number(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto) + Number(proposalDetails?.data?.proposal?.final_tally_result?.abstain)
     //console.log(finalTallyResultSum)
    const tallyPercentage = (tallyResult: number) => ((tallyResult/finalTallyResultSum)*100)

    const proposalDescription = proposalDetails?.data?.proposal?.content?.description.split('\\n\\n').map(str => <p>{str}</p>)
    
    return (
        <>
         <Title>{title}</Title>
          <FlexCol3>
            <FlexCol4>
              <TitleValue>{proposalDetails?.data?.proposal?.content?.title? proposalDetails.data.proposal.content.title : null}</TitleValue>
              <OverlapGroup2>
                <PASSED>
                {proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_PASSED'? (<Badge bg="success">PASSED</Badge>) : proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_REJECTED'? (<Badge bg="danger">REJECTED</Badge>) : proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_VOTING_PERIOD'? (<Badge bg="info">VOTING PERIOD</Badge>) : (<Badge bg="warning">FAILED</Badge>)}
                </PASSED>
              </OverlapGroup2>
              <FlexRow1>
                <Type>{type}</Type>
                <TextProposal>{proposalDetails?.data?.proposal.content['@type']}</TextProposal>
              </FlexRow1>
              <FlexRow2>
                <TypeValue>{total}</TypeValue>
                <TextProposalValue>{finalTallyResultSum} {proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].denom : null} </TextProposalValue>
              </FlexRow2>
              <OverlapGroup4>
                <Rectangle93></Rectangle93>
                <Rectangle92></Rectangle92>
                <Rectangle91></Rectangle91>
              <ProgressBar>
                <ProgressBar striped variant="success" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.yes)} key={1} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.yes).toFixed(2)+'%'} />
                <ProgressBar variant="danger" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no)} key={2} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no).toFixed(2)+'%'} />
                <ProgressBar striped variant="warning" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto)} key={3} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto).toFixed(2)+'%'} />
                <ProgressBar striped variant="info" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.abstain)} key={4} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.abstain).toFixed(2)+'%'} />
               </ProgressBar>
              </OverlapGroup4>
            </FlexCol4>
            <FlexRow3>
              <Yes><Badge bg="success">YES</Badge> </Yes>
              <No> <Badge bg="danger">NO</Badge> </No>
              <Veto><Badge bg="warning">VETO</Badge> </Veto>
              <Abstain><Badge bg="info">ABSTAIN</Badge> </Abstain>
            </FlexRow3>
            <CorContainer>
              <YesValue>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.yes).toFixed(2)+'%'} ({proposalDetails?.data?.proposal?.final_tally_result?.yes ? proposalDetails.data.proposal.final_tally_result.yes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}  {proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].denom : null})
              </YesValue>
              <NoValue>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no).toFixed(2)+'%'} ({proposalDetails?.data?.proposal?.final_tally_result?.no ? proposalDetails.data.proposal.final_tally_result.no.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null} {proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].denom : null})
              </NoValue>
              <VetoValue>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto).toFixed(2)+'%'} ({proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto ? proposalDetails.data.proposal.final_tally_result.no_with_veto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null} {proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].denom : null})
              </VetoValue>
              <AbstainValue>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.abstain).toFixed(2)+'%'} ({proposalDetails?.data?.proposal?.final_tally_result?.abstain ? proposalDetails.data.proposal.final_tally_result.abstain.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null} {proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].denom : null})
              </AbstainValue>
            </CorContainer>
            <br />
            <CardGroup>
                <Card>
                <Card.Body>
                <Card.Title>Proposer</Card.Title>
                <Card.Text>{proposalDetails?.data?.proposal?.content?.recipient? proposalDetails.data.proposal.content.recipient : 'No Recipient'}</Card.Text>
                <Card.Title>Total Deposit</Card.Title>
                <Card.Text>{proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].amount.toLocaleString() : null } {proposalDetails?.data?.proposal.total_deposit? proposalDetails.data.proposal.total_deposit[0].denom : null}</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Voting Start</Card.Title>
                <Card.Text>{proposalDetails?.data?.proposal?.voting_start_time? formatTimeDateYear(proposalDetails.data.proposal.voting_start_time) : null}</Card.Text>
                <Card.Title>Voting End</Card.Title>
                <Card.Text>{proposalDetails?.data?.proposal?.voting_end_time? formatTimeDateYear(proposalDetails.data.proposal.voting_end_time) : null}</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Submit Time</Card.Title>
                <Card.Text>{proposalDetails?.data?.proposal?.submit_time? formatTimeDateYear(proposalDetails.data.proposal.submit_time) : null}</Card.Text>
                <Card.Title>Deposit End Time</Card.Title>
                <Card.Text>{proposalDetails?.data?.proposal?.deposit_end_time? formatTimeDateYear(proposalDetails.data.proposal.deposit_end_time) : null}</Card.Text>
                </Card.Body>
            </Card>
            </CardGroup> 
            <br />
            <CardGroup>
                <Card>
                <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>{proposalDescription? proposalDescription : null}
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
          </FlexCol3>
          <DownBoard>
            continue work here to display Votes
          </DownBoard>
        </>
    )
}

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  margin-top: 54px;
  letter-spacing: 0;
`;

const FlexCol3 = styled.div`
  width: 1336px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  padding: 31px 0;
  align-items: center;
  min-height: 430px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol4 = styled.div`
  width: 1304px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 260px;
`;

const TitleValue = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 28px;
  margin-top: 17px;
  display: flex;
  padding: 1.7px 16.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 106px;
  background-color: var(--forest-green2);
  border-radius: 12.52px;
`;

const PASSED = styled.div`
  ${UrbanistBoldWhite20px}
  min-height: 24px;
  letter-spacing: 0;
  margin-left: -10px;
`;

const FlexRow1 = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 233px;
`;

const Type = styled.div`
  ${ValignTextMiddle}
  ${UrbanistNormalBlack24px}
            height: 29px;
  min-width: 57px;
  letter-spacing: 0;
`;

const TextProposal = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack24px}
            height: 29px;
  margin-left: 30px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 346px;
`;

const TypeValue = styled.div`
  ${ValignTextMiddle}
  ${UrbanistNormalBlack24px}
            height: 29px;
  min-width: 58px;
  letter-spacing: 0;
`;

const TextProposalValue = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack24px}
            height: 29px;
  margin-left: 34px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  width: 1304px;
  height: 64px;
  position: relative;
  margin-top: 33px;
  background-color: var(--forest-green);
  border-radius: 15px;
`;

const Rectangle93 = styled.div`
  position: absolute;
  width: 119px;
  height: 64px;
  top: 0;
  left: 1185px;
  background-color: var(--electric-violet);
  border-radius: 15px;
`;

const Rectangle92 = styled.div`
  position: absolute;
  width: 47px;
  height: 64px;
  top: 0;
  left: 1185px;
  background-color: var(--purple-heart);
`;

const Rectangle91 = styled.div`
  position: absolute;
  width: 47px;
  height: 64px;
  top: 0;
  left: 1165px;
  background-color: var(--hot-magenta);
`;

const FlexRow3 = styled.div`
  ${UrbanistSemiBoldBlack24px}
  align-self: flex-start;
  margin-top: 32px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  min-width: 1231px;
`;

const Yes = styled.div`
  width: 34px;
  height: 34px;
  background-color: var(--forest-green);
  border-radius: 5px;
  margin-left: 40px;
`;


const No = styled.div`
  width: 34px;
  height: 34px;
  margin-left: 350px;
  background-color: var(--hot-magenta);
  border-radius: 5px;
`;

const Veto = styled.div`
  width: 34px;
  height: 34px;
  margin-left: 290px;
  background-color: var(--purple-heart);
  border-radius: 5px;
`;

const Abstain = styled.div`
  width: 34px;
  height: 34px;
  margin-left: 299px;
  background-color: var(--electric-violet);
  border-radius: 5px;
`;

const CorContainer = styled.div`
  ${UrbanistNormalBlack24px}
  margin-top: 11px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1291px;
`;

const YesValue = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 223px;
  letter-spacing: 0;
`;

const NoValue = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-left: 147px;
  min-width: 209px;
  letter-spacing: 0;
`;

const VetoValue = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-left: 177px;
  min-width: 200px;
  letter-spacing: 0;
`;

const AbstainValue = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-left: 90px;
  letter-spacing: 0;
`;

const DownBoard = styled.div`
  width: 1336px;
  height: 300px;
  margin-top: 16px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;


export default ProposalDetailsContents