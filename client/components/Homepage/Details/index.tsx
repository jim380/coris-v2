import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack16px, UrbanistNormalBlack24px, UrbanistNormalBlack16px } from "../../../styledMixins";


function Details(props) {
  const { onlineVotingPower, x36516M1, place, x36516M2 } = props;

  return (
    <Details1>
      <OnlineVotingPower>{onlineVotingPower}</OnlineVotingPower>
      <Group7328>
        <X36516m>{x36516M1}</X36516m>
        <Place>{place}</Place>
        <X36516m1>{x36516M2}</X36516m1>
      </Group7328>
    </Details1>
  );
}

const Details1 = styled.div`
  width: 216px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

const OnlineVotingPower = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  letter-spacing: 0;
`;

const Group7328 = styled.div`
  height: 19px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 192px;
`;

const X36516m = styled.div`
  ${UrbanistBoldBlack16px}
  min-height: 19px;
  min-width: 66px;
  letter-spacing: 1.28px;
`;

const Place = styled.div`
  ${UrbanistNormalBlack16px}
  min-height: 19px;
  margin-left: 10px;
  min-width: 34px;
  letter-spacing: 0;
`;

const X36516m1 = styled.div`
  ${UrbanistBoldBlack16px}
  min-height: 19px;
  margin-left: 10px;
  letter-spacing: 1.28px;
`;

export default Details;
