import styled, { keyframes } from "styled-components";
import { useAppSelector } from "../../../../lib/hooks";

export function ModalContent({ toggle }) {
    const isToggled = useAppSelector(state => state.general.connectWalletModalToggled)
    const checkNToggle = (e) => {
        if (e.target !== document.querySelector("#modal-parent")) return
        toggle(false)
    }
    const connectWallet1Data = {
        asset62: "/img/asset-6-2@2x.png",
        asset72: "/img/asset-7-1@2x.png",
        outlineMediaShuffle: "/img/outline-media-shuffle@2x.png",
    };

    if (isToggled) return (
        <Modal id="modal-parent" onClick={checkNToggle}>
            <ModalDialogue>
                <div className="d-table w-100 h-100">
                    <div className="t-table-row" style={{ height: "50px" }}>
                        <div className="p-3">
                            <Flex style={{ justifyContent: "flex-start" }}>
                                <Asset62 className="asset-6-2" src={connectWallet1Data.asset62} />
                                <Asset72 className="asset-7-2" src={connectWallet1Data.asset72} />
                            </Flex>
                        </div>
                        <Close onClick={() => toggle(false)}>&times;</Close>
                    </div>
                    <ShowBox className="w-100 h-100">
                        <Show>
                            <Container>
                                <h4 className="text-center">Mainnets</h4>
                                <Grid>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                </Grid>
                            </Container>
                            <Container className="mt-3">
                                <h4 className="text-center">Testnets</h4>
                                <Grid>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                    <GridItem>sddfdf</GridItem>
                                </Grid>
                            </Container>
                        </Show>
                        
                    </ShowBox>
                    <div className="d-table-row" style={{ height: "50px" }}>
                        <div>
                            Developed by Nodes.GURU
                        </div>
                    </div>
                </div>
            </ModalDialogue>
        </Modal>
    )
    else return <div />
}

const Show = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`
const ShowBox = styled.div`
    overflow: auto;
    border: 2px solid;
    display: table-row;
    overflow-y: scroll;
`

const Container = styled.div`
    display: block;
    padding: 40px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 778px){
        grid-template-columns: repeat(2, 1fr);
    }
`

const GridItem = styled.div`
    border-radius: 10px;
    background: #f5f5f5;
    padding: 10px;
`

const appear = keyframes`
 from{
    opacity: 0;
 }
 to{
    opacity: 1;
 }
`

const drawUp = keyframes`
 from{
    opacity: 0;
    transform: translateY(20%);
 }
 to{
    opacity: 1;
    transform: translateY(0%);
 }
 `

const Flex = styled.div`
  display: flex;
  align-items:center;
`;

const Modal = styled.div`
    top: 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    background: #00000052;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:700px){
        align-items:flex-end;
    }
    animation-name: ${appear};
    animation-duration: .6s;
`

const ModalDialogue = styled.div`
    display: block;
    background: white;
    height: 600px;
    width: 900px;
    min-width: 75%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #00000038;
    @media screen and (max-width:700px){
        height: 80%;
        border-radius: 20px 20px 0px 00px ;
        width: 100%;
    }
    position: relative;
    animation-name: ${drawUp};
    animation-duration: .6s;
    overflowY:auto
`

const Close = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    font-size: 25px;
    align-items: center;
    justify-content:center;
    &:hover{
        background: #ededed;
        cursor:pointer;
    }
`

const Asset62 = styled.img`
  width: 30px;
  margin-bottom: 1px;
  object-fit: cover;
`;

const Asset72 = styled.img`
  width: 45px;
  margin-bottom: 1px;
  object-fit: cover;
`;


export default ModalContent;
