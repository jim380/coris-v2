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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import UndelegationsContent from "./Undelegations";
import RelegationsContent from "./Redelegations";
import { useState } from "react";

function ValidatorsDetailsContent(props) {
  const validatorsDetails = props?.data?.validator
  const delegatorsShares = (validatorsDetails?.delegator_shares / 1000000).toFixed(2)
  //console.log(validatorsDetails)

  //get total bonded tokens
  const getChainPool = useGetChainPoolQuery()
  const bondedTokens = getChainPool?.data?.pool?.bonded_tokens
  const percentageofVotingPower: number = getPercentageOfValidatorsBondedTokens(validatorsDetails?.tokens, bondedTokens)

  //get validatorsDelegations and pass to delegation component and relegation to get fetch the delegators address
  const validatorsDelegations = useGetChainDelegationsQuery(validatorsDetails?.operator_address)

  //get UnDelegations and pass to delegation component
  const unDelegations = useGetChainUnDelegationsQuery(validatorsDetails?.operator_address)

  const [selectedDelegations, setDelegationPage] = useState('delegations')

  return (
    <>
      <Title>Validator Detail</Title>
      <Grid>
        <GridItemOne>
          <div className="d-table w-100">
            <div className="d-row w-100">
              <FlexCenter style={{ marginTop: "20px" }}>
                <FlexColumn>
                  <FlexXCenter>
                    <ImageContainer />
                  </FlexXCenter>
                  <FlexXCenter style={{ marginTop: '20px' }}>
                    <h5>Chibuzor.one</h5>
                  </FlexXCenter>
                  <FlexXCenter>
                    <small><a>https://odogwu.com</a></small>
                  </FlexXCenter>
                </FlexColumn>
              </FlexCenter>
            </div>
            <div className="d-row w-100">
              <FlexCenter>
                <FlexColumn>
                  <FlexXCenter style={{ padding: '20px' }}>
                    <span style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel reprehenderit delectus eos atque in, ex animi accusamus a omnis fugiat.</span>
                  </FlexXCenter>
                </FlexColumn>
              </FlexCenter>
            </div>
          </div>
        </GridItemOne>
        <GridItemTwo>
          <FlexXCenter className="h-100 w-100" style={{ alignItems: "center" }}>
            <FlexColumn style={{ width: '25%' }}>
              <h5>Active</h5>
              <span>Status</span>
            </FlexColumn>
            <FlexColumn style={{ width: '25%' }}>
              <h5>No</h5>
              <span>In Jail</span>
            </FlexColumn>
            <FlexColumn >
              <h5>100%</h5>
              <span>Uptime</span>
            </FlexColumn>
          </FlexXCenter>
        </GridItemTwo>
        <GridItemThree>
          <Flex className="w-100 h-100">
            <FlexCenter className="w-50">
              dasda
            </FlexCenter>
            <FlexCenter className="w-50">
              <FlexColumn>
                <span>Voting Power</span>
                <h5>356 CR</h5>
              </FlexColumn>
            </FlexCenter>
          </Flex>
        </GridItemThree>
        <GridItemFour>
          <FlexColumn>
            <FlexCenter className="p-3">
              <div>Commission</div>
            </FlexCenter>
            <div>
              <FlexBetween className="px-3 pt-3">
                <div>Commission</div>
                <strong>5%</strong>
              </FlexBetween>
              <FlexBetween className="px-3 pt-3">
                <div>Max Rate</div>
                <strong>5%</strong>
              </FlexBetween>
              <FlexBetween className="px-3 pt-3">
                <div>Max Change Rate</div>
                <strong>5%</strong>
              </FlexBetween>
              <FlexBetween className="px-3 pt-3">
                <div>Updated</div>
                <strong>5%</strong>
              </FlexBetween>
            </div>
          </FlexColumn>
        </GridItemFour>
        <GridItemFive>
          <FlexColumn>
            <FlexCenter className="p-3">
              <div>Bonded</div>
            </FlexCenter>
            <div>
              <FlexBetween className="px-3 pt-3">
                <div>Bonded</div>
                <strong>5%</strong>
              </FlexBetween>
              <FlexBetween className="px-3 pt-3">
                <div>Delegator</div>
                <strong>134</strong>
              </FlexBetween>
              <FlexBetween className="px-3 pt-3">
                <div>Bonded Height</div>
                <strong>3045673</strong>
              </FlexBetween>
              <FlexBetween className="px-3 pt-3">
                <div>Commission</div>
                <strong>5%</strong>
              </FlexBetween>
            </div>
          </FlexColumn>
        </GridItemFive>
        <GridItemSix>
          <FlexColumn>
            <FlexCenter className="p-3">
              <div>Addresses</div>
            </FlexCenter>
            <FlexColumn className='p-3'>
              <FlexColumn>
                <strong>Account</strong>
                <Flex>
                  <span>scdnsdlwmdqldj3eop2e2e2px2e2el2enm21elj2e3</span>
                  <div title="copy to clipboard">
                    <svg className="copy" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="grey" d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" /></svg>
                  </div>
                </Flex>
              </FlexColumn>
              <FlexColumn>
                <strong>Operator</strong>
                <Flex>
                  <span>scdnsdlwmdqldj3eop2e2e2px2e2el2enm21elj2e3</span>
                  <div title="copy to clipboard">
                    <svg className="copy" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="grey" d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" /></svg>
                  </div>
                </Flex>
              </FlexColumn>
              <FlexColumn>
                <strong>Consensus</strong>
                <Flex>
                  <span>scdnsdlwmdqldj3eop2e2e2px2e2el2enm21elj2e3</span>
                  <div title="copy to clipboard">
                    <svg className="copy" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="grey" d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" /></svg>
                  </div>
                </Flex>
              </FlexColumn>
              <FlexColumn>
                <strong>Hex</strong>
                <Flex>
                  <span>scdnsdlwmdqldj3eop2e2e2px2e2el2enm21elj2e3</span>
                  <div title="copy to clipboard">
                    <svg className="copy" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="grey" d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" /></svg>
                  </div>
                </Flex>
              </FlexColumn>
            </FlexColumn>
          </FlexColumn>
        </GridItemSix>
        <GridItemSeven>
          <FlexColumn>
            <Flex className="p-3">
              <div>Uptime by latest blocks</div>
            </Flex>
            <BlockGrid>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>

              <Block className="block">
                <Tooltip>
                  <strong>Height:</strong>
                  <br />
                  <strong>7 544 233</strong>
                  <br />
                  <strong style={{ color: "#50df50" }}>Signed: </strong>
                  <br />
                  <strong>Success</strong>
                </Tooltip>
              </Block>
            </BlockGrid>
          </FlexColumn>
        </GridItemSeven>
      </Grid>
      <br />
      <h5>Delegations</h5>
      <Card>
        <div className="w-100 p-3">
          <TabToggler>
            <TabTogglerItem
              className={selectedDelegations === 'delegations' ? "active" : ''}
              onClick={() => setDelegationPage('delegations')}
            >Delegations</TabTogglerItem>
            <TabTogglerItem
              onClick={() => setDelegationPage('underdelegations')}
              className={selectedDelegations === 'underdelegations' ? "active" : ''}
            >Undelegations</TabTogglerItem>
            <TabTogglerItem
              onClick={() => setDelegationPage('redelegations')}
              className={selectedDelegations === 'redelegations' ? "active" : ''}
            >Redelegations</TabTogglerItem>
          </TabToggler>
          {
            selectedDelegations === 'delegations' ? (
              <Delegation>
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
              </Delegation>
            ) : selectedDelegations === 'redelegations' ? (
              <Redelegation>
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
              </Redelegation>
              ) : (
                <Underdelegation>
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
                </Underdelegation>
              )
          }

        </div>
      </Card>

      {/* <FlexRow1>
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
                    <OverlayTrigger  overlay={<Tooltip id="tooltip-disabled">{percentageofVotingPower.toFixed(2)+'%'}</Tooltip>}>
                  <ProgressBar animated   now={percentageofVotingPower} />
                </OverlayTrigger>
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
      </Transactions> */}

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

const Delegation = styled.div`
  display: block;
`

const Underdelegation = styled.div`
  display: block;
`

const Redelegation = styled.div`
  display: block;
`

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
const BlockGrid = styled.div`
  display: flex !important;
  flex-wrap: wrap;
`
const Tooltip = styled.div`
  width: 80px;
  height: 90px;
  background: #324239;
  display: none;
  transform: translate(-35%, -110%);
  border-radius: 10px;
  color: white;
  font-size: 12px;
  padding: 3px;
  text-align: center;
`
const Block = styled.div`
  width: 18px;
  height: 18px;
  background: #48bb78;
  margin: 5px;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  &:hover ${Tooltip} {
    display: block
  }
`
const Flex = styled.div`
  display: flex;
`
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexXCenter = styled.div`
  display: flex;
  justify-content: center;
`
const ImageContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 50%;
  background: red;
  width: 90px;
  height: 90px;
  background-color: #5e2bca;
`

const FlexCenter = styled.div`
  display: flex;
  align-items:center !important;
  justify-content: center;
`
const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: 906px){
    
  }
`
const GridItemOne = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 1 / span 2;
  grid-row: 1 / 3;
  @media screen and (max-width: 906px){
    grid-column: 1 / span 4;
  }
  @media screen and (max-width: 625px){
    grid-column: 1 / span 4;
  }
`

const GridItemTwo = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 3 / span 2;
  height: 150px;
  @media screen and (max-width: 906px){
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
  @media screen and (max-width: 625px){
    grid-column: 1 / span 4;
  }
`

const GridItemThree = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 3 / span 2;
  height: 150px;
   @media screen and (max-width: 906px){
    grid-column: 3 / span 2;
    grid-row: 3 / span 1;
  }
  @media screen and (max-width: 625px){
    grid-column: 1 / span 4;
    grid-row: 4 / span 1;
  }
`

const GridItemFour = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 1 / span 1;
  grid-row: 3 / 6;
  @media screen and (max-width: 906px){
    grid-column: 1 / span 2;
    grid-row: 4 / 7;
    height: fit-content;
    padding-bottom: 20px;
    @media screen and (max-width: 625px){
      grid-column: 1 / span 4;
      grid-row: 5 / span 1;
    }
  }
`

const GridItemFive = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 2 / span 1;
  grid-row: 3 / 6;
  @media screen and (max-width: 906px){
    grid-column: 3 / span 2;
    grid-row: 4 / 7;
    height: fit-content;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 625px){
    grid-column: 1 / span 4;
    grid-row: 6 / span 1;
  }
`

const GridItemSix = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 3 / span 2;
  grid-row: 3 / 6;
  height: 300px;
  @media screen and (max-width: 906px){
    grid-column: 1 / span 4;
    grid-row: 7 /span 6;
    height: fit-content;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 625px){
    grid-column: 1 / span 4;
    grid-row: 7 / span 1;
  }
`

const GridItemSeven = styled.div`
  box-shadow: 0px 7px 30px #0015da29;
  border-radius: 20px;
  grid-column: 1 / span 4;
  padding: 20px;
`


const Responsive = styled.div`
  width: 100%;
  overflow-x: auto;
  @media screen and (max-width: 700px){
    width: calc(100vw - 50px);
  }
`
export default ValidatorsDetailsContent