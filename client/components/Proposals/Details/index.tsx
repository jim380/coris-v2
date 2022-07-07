import React, { useState } from 'react'
import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardGroup from 'react-bootstrap/CardGroup';
import {
  UrbanistNormalBlack24px,
  UrbanistBoldWhite20px,
  UrbanistSemiBoldBlack24px,
  UrbanistBoldBlack40px,
  ValignTextMiddle,
} from "../../../styledMixins";
import { formatTimeDateYear } from '../../Util/format';

function ProposalDetailsContents(props) {
  const {
    title,
    type,
    total,
    proposalDetails
  } = props;

  //check if still loading and if loading, display the loading page
  if (proposalDetails.isLoading !== false) {
  }

  const finalTallyResultSum = Number(proposalDetails?.data?.proposal?.final_tally_result?.yes) + Number(proposalDetails?.data?.proposal?.final_tally_result?.no) + Number(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto) + Number(proposalDetails?.data?.proposal?.final_tally_result?.abstain)
  //console.log(finalTallyResultSum)
  const tallyPercentage = (tallyResult: number) => ((tallyResult / finalTallyResultSum) * 100)

  const proposalDescription = proposalDetails?.data?.proposal?.content?.description.split('\\n\\n').map(str => <p>{str}</p>)

  const [selectedVoteView, setVoteView] = useState('yes')
  
  return (
    <>
      <Title>Proposer Details</Title>
      <Box>
        <span>{proposalDetails?.data?.proposal?.content?.title ? proposalDetails.data.proposal.content.title : null}</span>
        <Container>
          <Badge className={proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_PASSED' ? 'success' : proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_REJECTED' ? 'danger' : proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_VOTING_PERIOD' ? 'info' : 'warning'}>
            {proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_PASSED' ? "PASSED" : proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_REJECTED' ? "REJECTED" : proposalDetails?.data?.proposal?.status === 'PROPOSAL_STATUS_VOTING_PERIOD' ? "VOTING PERIOD" : "FAILED"}
          </Badge>
        </Container>
        <Container>
          <Flex style={{ marginTop: '10px' }}>
            <span>{type}</span>
            <Container style={{ marginLeft: '40px' }}><strong>
              {proposalDetails?.data?.proposal.content['@type']}
            </strong></Container>
          </Flex>
          <Flex style={{ marginTop: '10px' }}>
            <span>{total}</span>
            <Container style={{ marginLeft: '40px' }}><strong>{finalTallyResultSum} {proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].denom : null}</strong></Container>
          </Flex>
          <ProgressBar style={{ height: "30px" }}>
            <ProgressBar striped variant="success" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.yes)} key={1} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.yes).toFixed(2) + '%'} />
            <ProgressBar variant="danger" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no)} key={2} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no).toFixed(2) + '%'} />
            <ProgressBar striped variant="warning" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto)} key={3} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto).toFixed(2) + '%'} />
            <ProgressBar striped variant="info" now={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.abstain)} key={4} label={tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.abstain).toFixed(2) + '%'} />
          </ProgressBar>
        </Container>
        <Container style={{ marginTop: "20px" }}>
          <Grid>
            <Container>
              <Flex>
                <Color className="first" />
                <strong style={{ marginLeft: "10px" }}>Yes</strong>
              </Flex>
              <div>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.yes).toFixed(2) + '%'} ({proposalDetails?.data?.proposal?.final_tally_result?.yes ? proposalDetails.data.proposal.final_tally_result.yes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}  {proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].denom : null})</div>
            </Container>
            <Container>
              <Flex>
                <Color className="second" />
                <strong style={{ marginLeft: "10px" }}>No</strong>
              </Flex>
              <div>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no).toFixed(2) + '%'} ({proposalDetails?.data?.proposal?.final_tally_result?.no ? proposalDetails.data.proposal.final_tally_result.no.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null} {proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].denom : null})</div>
            </Container>
            <Container>
              <Flex>
                <Color className="third" />
                <strong style={{ marginLeft: "10px" }}>Veto</strong>
              </Flex>
              <div>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto).toFixed(2) + '%'} ({proposalDetails?.data?.proposal?.final_tally_result?.no_with_veto ? proposalDetails.data.proposal.final_tally_result.no_with_veto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null} {proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].denom : null})</div>
            </Container>
            <Container>
              <Flex>
                <Color className="fourth" />
                <strong style={{ marginLeft: "10px" }}>Abstain</strong>
              </Flex>
              <div>{tallyPercentage(proposalDetails?.data?.proposal?.final_tally_result?.abstain).toFixed(2) + '%'} ({proposalDetails?.data?.proposal?.final_tally_result?.abstain ? proposalDetails.data.proposal.final_tally_result.abstain.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null} {proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].denom : null})</div>
            </Container>
          </Grid>
        </Container>
      </Box>

      <Box style={{ marginTop: "20px", padding: "20px" }}>
        <FlexBetween>
          <Container>Propser:</Container>
          <Container><strong className="text-info">{proposalDetails?.data?.proposal?.content?.recipient ? proposalDetails.data.proposal.content.recipient : 'No Recipient'}</strong></Container>
        </FlexBetween>
        <FlexBetween>
          <Container>Total Deposit:</Container>
          <Container><strong>{proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].amount.toLocaleString() : null} {proposalDetails?.data?.proposal.total_deposit ? proposalDetails.data.proposal.total_deposit[0].denom : null}</strong></Container>
        </FlexBetween>
        <FlexBetween>
          <Container>Voting Start</Container>
          <Container><strong>{proposalDetails?.data?.proposal?.voting_start_time ? formatTimeDateYear(proposalDetails.data.proposal.voting_start_time) : null}</strong></Container>
        </FlexBetween>
        <FlexBetween>
          <Container>Voting End</Container>
          <Container><strong>{proposalDetails?.data?.proposal?.voting_end_time ? formatTimeDateYear(proposalDetails.data.proposal.voting_end_time) : null}</strong></Container>
        </FlexBetween>
        <FlexBetween>
          <Container>Submit Time</Container>
          <Container><strong>{proposalDetails?.data?.proposal?.submit_time ? formatTimeDateYear(proposalDetails.data.proposal.submit_time) : null}</strong></Container>
        </FlexBetween>
        <FlexBetween>
          <Container>Deposit End Time</Container>
          <Container><strong>{proposalDetails?.data?.proposal?.deposit_end_time ? formatTimeDateYear(proposalDetails.data.proposal.deposit_end_time) : null}</strong></Container>
        </FlexBetween>
      </Box>

      <div className="my-3">
        <h4>Description</h4>
        <Box style ={{width: "100%", wordBreak: 'break-all'}}>
          {proposalDescription ? proposalDescription : null}
        </Box>
      </div>
      {/* <DownBoard>
        continue work here to display Votes
      </DownBoard> */}

      <Card>
        <div className="w-100 p-3">
          <TabToggler>
            <TabTogglerItem
              className={selectedVoteView === 'yes' ? "active" : ''}
              onClick={() => setVoteView('yes')}
            >Yes</TabTogglerItem>
            <TabTogglerItem
              onClick={() => setVoteView('no')}
              className={selectedVoteView === 'no' ? "active" : ''}
            >No</TabTogglerItem>
            <TabTogglerItem
              onClick={() => setVoteView('veto')}
              className={selectedVoteView === 'veto' ? "active" : ''}
            >Veto</TabTogglerItem>
            <TabTogglerItem
              onClick={() => setVoteView('abstain')}
              className={selectedVoteView === 'abstain' ? "active" : ''}
            >Abstain</TabTogglerItem>
          </TabToggler>
          {
            selectedVoteView === 'yes' ? (
              <div>
                <Responsive>
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th>
                          <h4>Address</h4>
                        </th>
                        <th>
                          <h4>From</h4>
                        </th>
                        <th>
                          <h4>To</h4>
                        </th>
                        <th>
                          <h4>Amount</h4>
                        </th>
                        <th>
                          <h4>Date</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="striped">
                        <td>
                          <Flex style={{ alignItems: 'center' }}>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.619 16.7619C10.9367 16.7619 7.04364 20.1409 6.24514 24.5934C4.22535 22.3024 3 19.2943 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 19.6408 27.5033 22.9321 25.0916 25.292C24.5948 20.4992 20.5433 16.7619 15.619 16.7619ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 16.7619C18.9455 16.7619 21.3333 14.3741 21.3333 11.4286C21.3333 8.48305 18.9455 6.09524 16 6.09524C13.0545 6.09524 10.6667 8.48305 10.6667 11.4286C10.6667 14.3741 13.0545 16.7619 16 16.7619Z" fill="#C4C4C4" />
                              </svg>
                            </div>
                            <div className="ml-3">jhkhkjhkjhkj</div>
                          </Flex>
                        </td>
                        <td>
                          sdfdfdsfsdfsdffsdf
                        </td>
                        <td>
                          sdfdfdsfsdfsdffsdf
                        </td>
                        <td>
                          1000
                        </td>
                        <td>
                          14 Mar
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Responsive>
              </div>
            ) : selectedVoteView === 'no' ? (
              <div>
                <Responsive>
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th>
                          <h4>Address</h4>
                        </th>
                        <th>
                          <h4>From</h4>
                        </th>
                        <th>
                          <h4>To</h4>
                        </th>
                        <th>
                          <h4>Amount</h4>
                        </th>
                        <th>
                          <h4>Date</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="striped">
                        <td>
                          <Flex style={{ alignItems: 'center' }}>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.619 16.7619C10.9367 16.7619 7.04364 20.1409 6.24514 24.5934C4.22535 22.3024 3 19.2943 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 19.6408 27.5033 22.9321 25.0916 25.292C24.5948 20.4992 20.5433 16.7619 15.619 16.7619ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 16.7619C18.9455 16.7619 21.3333 14.3741 21.3333 11.4286C21.3333 8.48305 18.9455 6.09524 16 6.09524C13.0545 6.09524 10.6667 8.48305 10.6667 11.4286C10.6667 14.3741 13.0545 16.7619 16 16.7619Z" fill="#C4C4C4" />
                              </svg>
                            </div>
                            <div className="ml-3">jhkhkjhkjhkj</div>
                          </Flex>
                        </td>
                        <td>
                          sdfdfdsfsdfsdffsdf
                        </td>
                        <td>
                          sdfdfdsfsdfsdffsdf
                        </td>
                        <td>
                          1000
                        </td>
                        <td>
                          14 Mar
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Responsive>
              </div>
              ) : selectedVoteView === 'veto' ? (
                <div>
                  <Responsive>
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>
                            <h4>Address</h4>
                          </th>
                          <th>
                            <h4>From</h4>
                          </th>
                          <th>
                            <h4>To</h4>
                          </th>
                          <th>
                            <h4>Amount</h4>
                          </th>
                          <th>
                            <h4>Date</h4>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="striped">
                          <td>
                            <Flex style={{ alignItems: 'center' }}>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.619 16.7619C10.9367 16.7619 7.04364 20.1409 6.24514 24.5934C4.22535 22.3024 3 19.2943 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 19.6408 27.5033 22.9321 25.0916 25.292C24.5948 20.4992 20.5433 16.7619 15.619 16.7619ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 16.7619C18.9455 16.7619 21.3333 14.3741 21.3333 11.4286C21.3333 8.48305 18.9455 6.09524 16 6.09524C13.0545 6.09524 10.6667 8.48305 10.6667 11.4286C10.6667 14.3741 13.0545 16.7619 16 16.7619Z" fill="#C4C4C4" />
                                </svg>
                              </div>
                              <div className="ml-3">jhkhkjhkjhkj</div>
                            </Flex>
                          </td>
                          <td>
                            sdfdfdsfsdfsdffsdf
                          </td>
                          <td>
                            sdfdfdsfsdfsdffsdf
                          </td>
                          <td>
                            1000
                          </td>
                          <td>
                            14 Mar
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Responsive>
                </div>
                ) : (<div>
                    <Responsive>
                      <table className="w-100">
                        <thead>
                          <tr>
                            <th>
                              <h4>Address</h4>
                            </th>
                            <th>
                              <h4>From</h4>
                            </th>
                            <th>
                              <h4>To</h4>
                            </th>
                            <th>
                              <h4>Amount</h4>
                            </th>
                            <th>
                              <h4>Date</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="striped">
                            <td>
                              <Flex style={{ alignItems: 'center' }}>
                                <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.619 16.7619C10.9367 16.7619 7.04364 20.1409 6.24514 24.5934C4.22535 22.3024 3 19.2943 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 19.6408 27.5033 22.9321 25.0916 25.292C24.5948 20.4992 20.5433 16.7619 15.619 16.7619ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 16.7619C18.9455 16.7619 21.3333 14.3741 21.3333 11.4286C21.3333 8.48305 18.9455 6.09524 16 6.09524C13.0545 6.09524 10.6667 8.48305 10.6667 11.4286C10.6667 14.3741 13.0545 16.7619 16 16.7619Z" fill="#C4C4C4" />
                                  </svg>
                                </div>
                                <div className="ml-3">jhkhkjhkjhkj</div>
                              </Flex>
                            </td>
                            <td>
                              sdfdfdsfsdfsdffsdf
                            </td>
                            <td>
                              sdfdfdsfsdfsdffsdf
                            </td>
                            <td>
                              1000
                            </td>
                            <td>
                              14 Mar
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Responsive>
                  </div>
                ) 
          }

        </div>
      </Card>

    </>
  )
}


const TabToggler = styled.div`
  background: #e9ebfe;
  border-radius: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom:40px;
  cursor: pointer;
  @media screen and (max-width: 506px){
    flex-direction: column;
    width: 100%;
  }
`

const TabTogglerItem = styled.div`
  diplay: flex; 
  align-items:center;
  justify-content: center;
  &.active{
    background: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 7px 8px 0px #9f9f9f;
  }
  @media screen and (max-width: 506px){
    padding: 10px 0px;
  }

`

const Card = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  margin-bottom:40px;
`

const Responsive = styled.div`
  width: 100%;
  overflow-x: auto;
  @media screen and (max-width: 1075px){
    width: calc(100vw - 40px);
  }
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

const Bar = styled.div`
  display: flex;
  height: 34px;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
`

const BarItemOne = styled.div`
  width: 50%;
  height: 100%;
  background: #16a82e;
`
const BarItemTwo = styled.div`
  width: 50%;
  height: 100%;
  background: #dd15e1;
`
const BarItemThree = styled.div`
  width: 25%;
  height: 100%;
  background: #4a15e1;
`
const BarItemFour = styled.div`
  width: 10%;
  height: 100%;
  background: #b815e1;
`

const Flex = styled.div`
  display: flex;
`

const Box = styled.div`
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
  width: 100%;
  padding: 20px 20px;
  word-break: break-all;
`

const Container = styled.div`
  display:block;
`

const Badge = styled.div`
  border-radius: 20px;
  display: inline-block;
  padding: 0px 10px;
  margin-top: 10px;
  color: white;
  &.success{
    background: #16A82E;
  }
  &.danger{
    background:#dc3545;
  }
  &.warning{
    background: #ffc107;
  }
  &.info{
    background: #0d6efd;
  }
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 764px){
    grid-template-columns: auto auto;
    grid-gap: 40px;
  }
`

const Color = styled.div`
  width: 25px;
  height: 25px;
  background: red;
  border-radius: 5px;
  &.first{
    background: #16A82E;
  }
  &.second{
    background: #dc3545;
  }
  &.third{
    background: #ffc107
  }
  &.fourth{
    background: #0d6efd;
  }
`










































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