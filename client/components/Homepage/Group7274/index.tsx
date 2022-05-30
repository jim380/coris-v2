import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack26px } from "../../../styledMixins";


function Group7274(props) {
  const { phone1, phone2 } = props;

  return (
    <Group72741>
      <Phone>{phone1}</Phone>
      <Phone1>{phone2}</Phone1>
    </Group72741>
  );
}

const Group72741 = styled.div`
  ${UrbanistBoldBlack26px}
  width: 182px;
  margin-left: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
`;

const Phone = styled.div`
  width: 176px;
  min-height: 23px;
  margin-left: 2px;
  letter-spacing: 2.08px;
`;

const Phone1 = styled.div`
  width: 176px;
  min-height: 23px;
  margin-top: 16px;
  letter-spacing: 2.08px;
`;

export default Group7274;
