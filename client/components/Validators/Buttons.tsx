import Button from 'react-bootstrap/Button'
import styled from "styled-components";


function ValidatorsActiveInactive () {
    return (
        <>
        <ActiveValidators>
        <Button  variant="outline-primary" className='button'>Active</Button>
        </ActiveValidators> 
        <InActiveValidators>
        <Button  variant="outline-primary" className='button'>InActive</Button>
        </InActiveValidators>
        </>
    )
}

const ActiveValidators = styled.div`
  margin-left: 60px;
  display: flex;
  padding: 5px 19px;
  align-items: center;
  min-width: 280px;
`;
const InActiveValidators = styled.div`
  margin-left: 150px;
  margin-top: -50px;
  display: flex;
  padding: 5px 19px;
  align-items: center;
  min-width: 280px;
`;

export default ValidatorsActiveInactive