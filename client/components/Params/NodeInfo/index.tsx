import React from 'react'
import styled from "styled-components";
import {
  UrbanistNormalBlack24px,
  UrbanistSemiBoldBlack24px,
  ValignTextMiddle,
} from "../../../styledMixins";

function NodeInfoParams(props) {
    const {
        cosmosSdkVersion,
        tendermintVersion,
        binaryVersion,
        text1,
        text2,
        text3,
      } = props;
    
    return (
       <>
            <FlexRow6>
              <VersionContainer>
                <MintDenom>{cosmosSdkVersion}</MintDenom>
                <InflationRateChange>{tendermintVersion}</InflationRateChange>
                <InflationRateChange>{binaryVersion}</InflationRateChange>
              </VersionContainer>
              <TextContainer>
                <Text1>{text1}</Text1>
                <Text2>{text2}</Text2>
                <Percent4>{text3}</Percent4>
              </TextContainer>
            </FlexRow6>
      </>       
    )
}

const MintDenom = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  letter-spacing: 0;
`;

const InflationRateChange = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const Percent4 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 31px;
  letter-spacing: 0;
`;

const FlexRow6 = styled.div`
  height: 228px;
  margin-left: 16px;
  display: flex;
  padding: 31px 16px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const VersionContainer = styled.div`
  ${UrbanistNormalBlack24px}
  width: 217px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 119px;
`;

const TextContainer = styled.div`
  ${UrbanistSemiBoldBlack24px}
  width: 67px;
  margin-left: 344px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 119px;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 67px;
  letter-spacing: 0;
`;

const Text2 = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  margin-top: 16px;
  min-width: 26px;
  letter-spacing: 0;
`;

export default NodeInfoParams