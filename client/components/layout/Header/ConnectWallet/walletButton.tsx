import Button from 'react-bootstrap/Button'
import styled from "styled-components";


function WalletButton ({className}) {
    return (
        <Wallet className={`${className} connect-wallet`}>
         Connect Wallet
        </Wallet>
    )
}


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
`;


export default WalletButton