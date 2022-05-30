import React from "react";
import styled from "styled-components";


function Group7277(props) {
  const { vector2, price, x56824H } = props;

  return (
    <Group72771>
      <Vector2 src={vector2} />
      <FlexCol>
        <Price>{price}</Price>
        <X56824h>{x56824H}</X56824h>
      </FlexCol>
    </Group72771>
  );
}

const Group72771 = styled.div`
  position: absolute;
  height: 77px;
  top: 0;
  left: 669px;
  display: flex;
  align-items: flex-end;
  min-width: 138px;
`;

const Vector2 = styled.img`
  width: 14px;
  height: 10px;
  margin-bottom: 6px;
`;

const FlexCol = styled.div`
  width: 110px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 77px;
`;

const Price = styled.div`
  min-height: 38px;
  min-width: 69px;
  font-family: var(--font-family-urbanist);
  font-weight: 800;
  color: var(--mountain-meadow);
  font-size: 32px;
  letter-spacing: 0;
`;

const X56824h = styled.div`
  width: 110px;
  min-height: 23px;
  margin-top: 16px;
  font-family: var(--font-family-urbanist);
  font-weight: 400;
  color: var(--black);
  font-size: 22px;
  letter-spacing: 0;
`;

export default Group7277;
