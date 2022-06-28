import Button from 'react-bootstrap/Button'
import styled from "styled-components";


<<<<<<< HEAD
function WalletButton ({className}) {
    return (
        <Wallet className={`${className} connect-wallet`}>
         Connect Wallet
=======
function WalletButton () {
    return (
        <Wallet>
        <Button  variant="outline-primary" className='button'>Connect Wallet</Button>
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
        </Wallet>
    )
}


<<<<<<< HEAD
const Wallet = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid #37458d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #37458d;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
  background: none;
  &:hover{
    background: #37458d;
    color: white;
  }
  @media screen and (max-width: 775px){
    display: none;
  }
=======
const Wallet = styled.div`
  margin-left: 60px;
  display: flex;
  padding: 5px 19px;
  align-items: center;
  min-width: 280px;
>>>>>>> fc2b3f0d20d885cab291f180a48a237e4f7fb548
`;


export default WalletButton