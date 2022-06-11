import React from "react";
import styled from "styled-components";
import { UrbanistSemiBoldBlack172px, ValignTextMiddle } from "../../styledMixins";


function ValidatorsTitle(props) {
  const { rank, validator, votingPower, cumulativeshare, commission, uptime } = props;

  return (
    <ValidatorTilte>
       <Rank>{rank}</Rank>
      <Validator>{validator}</Validator>
      <VotingPower>{votingPower}</VotingPower>
      <CumulativeShare>{cumulativeshare}</CumulativeShare>
      <Commission>{commission}</Commission>
        <Uptime>{uptime}</Uptime>
    </ValidatorTilte>
  );
}

const ValidatorTilte = styled.div`
  ${UrbanistSemiBoldBlack172px}
  margin-top: 18px;
  margin-left: 14.64px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 1158px;
`;

const Rank = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-top: 0;
  min-width: 95px;
  letter-spacing: 0;
`;

const Validator = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 10px;
  margin-top: 0;
  min-width: 39px;
  letter-spacing: 0;
`;

const VotingPower = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 350px;
  margin-top: 0;
  min-width: 69px;
  letter-spacing: 0;
`;

const CumulativeShare = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 200px;
  margin-top: 0;
  min-width: 77px;
  letter-spacing: 0;
`;

const Commission = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 50px;
  margin-top: 0;
  letter-spacing: 0;
`;

const Uptime = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 118px;
  margin-top: 0;
  letter-spacing: 0;
`;

export default ValidatorsTitle;
