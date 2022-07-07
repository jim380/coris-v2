import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { UrbanistBoldBlack40px } from '../../styledMixins';

function TransactionContents() {
    const [isFormattedView, toggleView] = useState(true)
    return (
        <>
            <Flex style={{ justifyContent: "space-between", alignItems: 'center' }} className="w-100 block-sm">
                <Flex style={{ alignItems: "center", marginTop: "20px" }}>
                    <Title style={{ marginTop: '0' }}>Transaction Details</Title>
                    <div className='ml-3'>
                        <button
                            className={`${isFormattedView ? 'selected' : ''} formatted`}
                            onClick={() => toggleView(true)}
                        >Formatted</button>
                        <button className={`${!isFormattedView ? 'selected' : ''} formatted`}
                            onClick={() => toggleView(false)}
                        >Raw</button></div>

                </Flex>
                <div className="version">beta v.0.319.293</div>
            </Flex>
            {
                isFormattedView ? (
                    <Formatted>
                        <SubTitle>Overview</SubTitle>
                        <Container>
                            <Grid>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4>425353535345</h4>
                                            <h6 className="text-center">Height</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4>425353535345</h4>
                                            <h6 className="text-center">Time</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <Flex style={{ alignItems: "center" }}>
                                                <Circle className="bg-primary"></Circle>
                                                <h4 className="text-primary" style={{ marginLeft: "10px", marginBottom: "0px" }}>Mannyel</h4>
                                            </Flex>
                                            <h6 className="text-center">Status</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4>425353535345</h4>
                                            <h6 className="text-center">gas</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4>3</h4>
                                            <h6 className="text-center">Fee</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4>Transfer</h4>
                                            <h6 className="text-center">Activity</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4 className="text-center">0</h4>
                                            <h6 className="text-center">Memo</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <h4 className="text-center">0</h4>
                                            <h6 className="text-center">Time out height</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                                <Card className="last-grid-item" style={{ height: "100px" }}>
                                    <FlexCenter>
                                        <div>
                                            <Hash>ertertetertetefwewxfewrwexreormwrowrmojxemorjwrmowjrowrjmw</Hash>
                                            <h6 className="text-center">Hash</h6>
                                        </div>
                                    </FlexCenter>
                                </Card>
                            </Grid>
                        </Container>
                        <SubTitle>Messages</SubTitle>
                        <Container className="my-3">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className="accordion-item">
                                    <Accordion.Header className="accordion-header">
                                        <div>
                                            <h4 className="font-xl text-dark">Type: <strong>Withdraw Delegator Reward</strong></h4>
                                            <h5>
                                                <span className="text-primary">234234234232dw3dxex3iojd2dijoixn3</span>
                                                <span> withdraw </span>
                                                <strong>23432.3423 CORIS</strong>
                                                <span> reward from </span>
                                                <span className="text-primary">ade</span>
                                            </h5>
                                        </div>

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Some raw content
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="accordion-item">
                                    <Accordion.Header className="accordion-header">
                                        <div>
                                            <h4 className="font-xl text-dark">Type: <strong>Withdraw Delegator Reward</strong></h4>
                                            <h5>
                                                <span className="text-primary">234234234232dw3dxex3iojd2dijoixn3</span>
                                                <span> withdraw </span>
                                                <strong>23432.3423 CORIS</strong>
                                                <span> reward from </span>
                                                <span className="text-primary">ade</span>
                                            </h5>
                                        </div>

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Some raw content
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="accordion-item">
                                    <Accordion.Header className="accordion-header">
                                        <div>
                                            <h4 className="font-xl text-dark">Type: <strong>Withdraw Delegator Reward</strong></h4>
                                            <h5>
                                                <span className="text-primary">234234234232dw3dxex3iojd2dijoixn3</span>
                                                <span> withdraw </span>
                                                <strong>23432.3423 CORIS</strong>
                                                <span> reward from </span>
                                                <span className="text-primary">ade</span>
                                            </h5>
                                        </div>

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Some raw content
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Container>
                    </Formatted>
                ) : (
                    <Raw>
                        <SubTitle>Overview</SubTitle>
                        <Container>
                            <Card>dasdas</Card>
                        </Container>
                    </Raw>
                )
            }
        </>
    )
}

const Formatted = styled.div`
  display: block
`

const Raw = styled.div`
  display: block
`

const SubTitle = styled.h4`
  font-size: 24px;
`

const Hash = styled.h4`
  text-align: center;
  padding: 0px 20px;
  @media screen and (max-width: 520px){
   font-size: 14px;
  }
`


const Card = styled.div`
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
  word-break: break-all;
  &.last-grid-item{
    grid-column: 1 / span 2;
  }
  @media screen and (max-width: 520px){
   grid-column: 1 / span 2;
  }
`;

const Flex = styled.div`
  display: flex
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;


const InLineFlex = styled.div`
  display:inline-flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns:auto auto;
  grid-gap: 20px;
  @media screen and (max-width: 520px){
    grid-gap: 10px;
  }
`;

const Container = styled.div`
  display: block;
`;

const Responsive = styled.div`
  width: 100%;
  overflow-x: auto;
  @media screen and (max-width: 700px){
    width: 85vw;
  }
  `;

const Circle = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background:red;
`;

const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  margin-top: 54px;
  letter-spacing: 0;
`;

export default TransactionContents