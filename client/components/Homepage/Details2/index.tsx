import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack16px, UrbanistNormalBlack24px, UrbanistNormalBlack16px } from "../../../styledMixins";


function Details2(props) {
  const { activeValidators, number1, outOf, number2 } = props;

  return (
    <Details>
      <ActiveValidators>{activeValidators}</ActiveValidators>
      <Group7328>
        <Number>{number1}</Number>
        <OutOf>{outOf}</OutOf>
        <Number1>{number2}</Number1>
      </Group7328>
    </Details>
  );
}

const Details = styled.div`
  width: 181px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

const ActiveValidators = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Group7328 = styled.div`
  height: 19px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 125px;
`;

const Number = styled.div`
  ${UrbanistBoldBlack16px}
  min-height: 19px;
  min-width: 27px;
  letter-spacing: 1.28px;
`;

const OutOf = styled.div`
  ${UrbanistNormalBlack16px}
  min-height: 19px;
  margin-left: 10px;
  min-width: 42px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${UrbanistBoldBlack16px}
  min-height: 19px;
  margin-left: 13px;
  letter-spacing: 1.28px;
`;

export default Details2;