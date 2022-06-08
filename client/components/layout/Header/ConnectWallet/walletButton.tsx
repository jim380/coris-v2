import Button from 'react-bootstrap/Button'
import styled from "styled-components";


function WalletButton () {
    return (
        <Wallet>
        <Button  variant="outline-primary" className='button'>Connect Wallet</Button>
        </Wallet>
    )
}


const Wallet = styled.div`
  margin-left: 60px;
  display: flex;
  padding: 5px 19px;
  align-items: center;
  min-width: 280px;
`;


export default WalletButton