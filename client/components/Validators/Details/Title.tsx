import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack40px } from "../../../styledMixins";

function Title(props) {
  const { children } = props;

  return <Title1>{children}</Title1>;
}

const Title1 = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  min-width: 284px;
  letter-spacing: 0;
  margin-top: 20px;
`;

export default Title;