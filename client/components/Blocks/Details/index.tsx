import React from 'react'
import styled from "styled-components";
import {
  UrbanistMediumAbsoluteZero172px,
  UrbanistBoldBlack26px,
  UrbanistSemiBoldSoap24px,
  UrbanistSemiBoldBlack172px,
  UrbanistSemiBoldBlueBell24px,
  UrbanistNormalBlack24px,
  UrbanistNormalNewCar172px,
  UrbanistNormalBlack172px,
  UrbanistSemiBoldCoconut24px,
  UrbanistBoldBlack20px,
  UrbanistBoldBlack40px,
  UrbanistLightBlack15px,
  UrbanistMediumBlack18px,
  ValignTextMiddle,
} from "../../../styledMixins";

function BlockHeightContent(props) {
    const {
        title,
        address1,
        height1,
        text1,
        time1,
        mannyel,
        proposer,
        address2,
        timeAgo,
        number1,
        noOfCrs,
        x0975Coris,
        crTotalFee,
        x34Gd73874Gf783Ff374G,
        hash1,
        iconCopy,
        signatures,
        validators2,
        dgtizeStake1,
        dgtizeStake2,
        dgtizeStake3,
        dgtizeStake4,
        dgtizeStake5,
        dgtizeStake6,
        dgtizeStake7,
        dgtizeStake8,
        dgtizeStake9,
        dgtizeStake10,
        dgtizeStake11,
        transactions,
        height2,
        hash2,
        status,
        fee,
        message,
        type,
        time2,
        phone1,
        x34567EfE34G6J7K85H1,
        place1,
        number2,
        number3,
        x34567EfE34G6J7K85H2,
        x6SAgo1,
        phone2,
        x34567EfE34G6J7K85H3,
        place2,
        number4,
        number5,
        x34567EfE34G6J7K85H4,
        x6SAgo2,
        phone3,
        x34567EfE34G6J7K85H5,
        place3,
        number6,
        number7,
        x34567EfE34G6J7K85H6,
        x6SAgo3,
        phone4,
        x34567EfE34G6J7K85H7,
        place4,
        number8,
        number9,
        x34567EfE34G6J7K85H8,
        x6SAgo4,
        phone5,
        x34567EfE34G6J7K85H9,
        place5,
        number10,
        number11,
        x34567EfE34G6J7K85H10,
        x6SAgo5,
      } = props;
    return (
        <>
         <Title>{title}</Title>
          <OverlapGroupContainer>
            <OverlapGroup18>
              <Address>{address1}</Address>
              <Height>{height1}</Height>
            </OverlapGroup18>
            <OverlapGroup14>
              <Text1>{text1}</Text1>
              <Time>{time1}</Time>
            </OverlapGroup14>
          </OverlapGroupContainer>
          <OverlapGroupContainer1>
            <OverlapGroup13>
              <Ellipse8></Ellipse8>
              <FlexCol3>
                <Mannyel>{mannyel}</Mannyel>
                <Proposer>{proposer}</Proposer>
              </FlexCol3>
            </OverlapGroup13>
            <OverlapGroup15>
              <Address1>{address2}</Address1>
              <TimeAgo>{timeAgo}</TimeAgo>
            </OverlapGroup15>
          </OverlapGroupContainer1>
          <OverlapGroupContainer2>
            <OverlapGroup12>
              <Number>{number1}</Number>
              <NoOfCRs>{noOfCrs}</NoOfCRs>
            </OverlapGroup12>
            <OverlapGroup17>
              <X0975CORIS>{x0975Coris}</X0975CORIS>
              <CRTotalFee>{crTotalFee}</CRTotalFee>
            </OverlapGroup17>
          </OverlapGroupContainer2>
          <OverlapGroup16>
            <FlexCol4>
              <X34gd73874gf783ff374g>{x34Gd73874Gf783Ff374G}</X34gd73874gf783ff374g>
              <Hash>{hash1}</Hash>
            </FlexCol4>
            <OutlineFilesCopy src={iconCopy} />


          </OverlapGroup16>
          <Signatures>{signatures}</Signatures>

          <LatestBlocks>
            <Validators1>{validators2}</Validators1>
            <OverlapGroup10>
              <Ellipse81></Ellipse81>
              <DgtizeStake>{dgtizeStake1}</DgtizeStake>
            </OverlapGroup10>
            <OverlapGroup9>
              <Ellipse82></Ellipse82>
              <DgtizeStake>{dgtizeStake2}</DgtizeStake>
            </OverlapGroup9>
            <OverlapGroup8>
              <Ellipse83></Ellipse83>
              <DgtizeStake>{dgtizeStake3}</DgtizeStake>
            </OverlapGroup8>
            <OverlapGroup9>
              <Ellipse84></Ellipse84>
              <DgtizeStake>{dgtizeStake4}</DgtizeStake>
            </OverlapGroup9>
            <OverlapGroup8>
              <Ellipse85></Ellipse85>
              <DgtizeStake>{dgtizeStake5}</DgtizeStake>
            </OverlapGroup8>
            <OverlapGroup9>
              <Ellipse86></Ellipse86>
              <DgtizeStake>{dgtizeStake6}</DgtizeStake>
            </OverlapGroup9>
            <OverlapGroup8>
              <Ellipse87></Ellipse87>
              <DgtizeStake>{dgtizeStake7}</DgtizeStake>
            </OverlapGroup8>
            <OverlapGroup9>
              <Ellipse81></Ellipse81>
              <DgtizeStake>{dgtizeStake8}</DgtizeStake>
            </OverlapGroup9>
            <OverlapGroup8>
              <Ellipse88></Ellipse88>
              <DgtizeStake>{dgtizeStake9}</DgtizeStake>
            </OverlapGroup8>
            <OverlapGroup9>
              <Ellipse89></Ellipse89>
              <DgtizeStake>{dgtizeStake10}</DgtizeStake>
            </OverlapGroup9>
            <OverlapGroup8>
              <Ellipse810></Ellipse810>
              <DgtizeStake>{dgtizeStake11}</DgtizeStake>
            </OverlapGroup8>
          </LatestBlocks>



          <Transactions>{transactions}</Transactions>
          <OverlapGroup11>
            <LatestBlocksTilte>
              <Height1>{height2}</Height1>
              <Hash1>{hash2}</Hash1>
              <Status>{status}</Status>
              <Fee>{fee}</Fee>
              <Message>{message}</Message>
              <Type>{type}</Type>
              <Time1>{time2}</Time1>
            </LatestBlocksTilte>
            <OverlapGroup19>
              <Phone>{phone1}</Phone>
              <X34567efe34g6j7k85h>{x34567EfE34G6J7K85H1}</X34567efe34g6j7k85h>
              <Place>{place1}</Place>
              <Number1>{number2}</Number1>
              <Number2>{number3}</Number2>
              <X34567efe34g6j7k85h1>{x34567EfE34G6J7K85H2}</X34567efe34g6j7k85h1>
              <X6sAgo>{x6SAgo1}</X6sAgo>
            </OverlapGroup19>
            <OverlapGroup2>
              <Phone1>{phone2}</Phone1>
              <X34567efe34g6j7k85h2>{x34567EfE34G6J7K85H3}</X34567efe34g6j7k85h2>
              <Place1>{place2}</Place1>
              <Number3>{number4}</Number3>
              <Number4>{number5}</Number4>
              <X34567efe34g6j7k85h3>{x34567EfE34G6J7K85H4}</X34567efe34g6j7k85h3>
              <X6sAgo1>{x6SAgo2}</X6sAgo1>
            </OverlapGroup2>
            <OverlapGroup>
              <Phone1>{phone3}</Phone1>
              <X34567efe34g6j7k85h2>{x34567EfE34G6J7K85H5}</X34567efe34g6j7k85h2>
              <Place1>{place3}</Place1>
              <Number3>{number6}</Number3>
              <Number5>{number7}</Number5>
              <X34567efe34g6j7k85h3>{x34567EfE34G6J7K85H6}</X34567efe34g6j7k85h3>
              <X6sAgo1>{x6SAgo3}</X6sAgo1>
            </OverlapGroup>
            <OverlapGroup4>
              <Phone1>{phone4}</Phone1>
              <X34567efe34g6j7k85h2>{x34567EfE34G6J7K85H7}</X34567efe34g6j7k85h2>
              <Place1>{place4}</Place1>
              <Number3>{number8}</Number3>
              <Number6>{number9}</Number6>
              <X34567efe34g6j7k85h4>{x34567EfE34G6J7K85H8}</X34567efe34g6j7k85h4>
              <X6sAgo1>{x6SAgo4}</X6sAgo1>
            </OverlapGroup4>
            <OverlapGroup3>
              <Phone1>{phone5}</Phone1>
              <X34567efe34g6j7k85h2>{x34567EfE34G6J7K85H9}</X34567efe34g6j7k85h2>
              <Place1>{place5}</Place1>
              <Number7>{number10}</Number7>
              <Number8>{number11}</Number8>
              <X34567efe34g6j7k85h5>{x34567EfE34G6J7K85H10}</X34567efe34g6j7k85h5>
              <X6sAgo1>{x6SAgo5}</X6sAgo1>
            </OverlapGroup3>
          </OverlapGroup11>
        </>
    )
}


const Title = styled.h1`
  ${UrbanistBoldBlack40px}
  min-height: 48px;
  margin-top: 54px;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  height: 128px;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 1336px;
`;

const OverlapGroup18 = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  padding: 29px 268px;
  align-items: flex-end;
  min-height: 128px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Address = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  min-width: 123px;
  letter-spacing: 2.08px;
`;

const Height = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  align-self: center;
  margin-top: 8px;
  min-width: 68px;
  letter-spacing: 0;
`;

const OverlapGroup14 = styled.div`
  width: 660px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 29px 0;
  align-items: center;
  min-height: 128px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Text1 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  min-width: 268px;
  letter-spacing: 2.08px;
`;

const Time = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 8px;
  margin-left: 1px;
  min-width: 53px;
  letter-spacing: 0;
`;

const OverlapGroupContainer1 = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 1336px;
`;

const OverlapGroup13 = styled.div`
  height: 128px;
  display: flex;
  padding: 29px 249px;
  align-items: flex-start;
  min-width: 660px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Ellipse8 = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--navy-blue);
  border-radius: 15.93px;
`;

const FlexCol3 = styled.div`
  width: 128px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 68px;
`;

const Mannyel = styled.div`
  min-height: 31px;
  align-self: flex-end;
  min-width: 114px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--absolute-zero);
  font-size: var(--font-size-xxxl2);
  letter-spacing: 2.08px;
`;

const Proposer = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const OverlapGroup15 = styled.div`
  width: 660px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 29px 263px;
  align-items: flex-end;
  min-height: 128px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Address1 = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  min-width: 133px;
  letter-spacing: 2.08px;
`;

const TimeAgo = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  align-self: center;
  margin-top: 8px;
  min-width: 100px;
  letter-spacing: 0;
`;

const OverlapGroupContainer2 = styled.div`
  height: 128px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 1336px;
`;

const OverlapGroup12 = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  padding: 29px 0;
  align-items: center;
  min-height: 128px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Number = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  min-width: 14px;
  letter-spacing: 2.08px;
`;

const NoOfCRs = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 8px;
  min-width: 110px;
  letter-spacing: 0;
`;

const OverlapGroup17 = styled.div`
  width: 660px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 29px 245px;
  align-items: flex-end;
  min-height: 128px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const X0975CORIS = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  min-width: 169px;
  letter-spacing: 2.08px;
`;

const CRTotalFee = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 8px;
  margin-right: 9px;
  min-width: 124px;
  letter-spacing: 0;
`;

const OverlapGroup16 = styled.div`
  height: 128px;
  margin-top: 16px;
  display: flex;
  padding: 29px 226px;
  align-items: flex-start;
  min-width: 1336px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const FlexCol4 = styled.div`
  width: 843px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 68px;
`;

const X34gd73874gf783ff374g = styled.div`
  ${UrbanistBoldBlack26px}
  min-height: 31px;
  min-width: 843px;
  letter-spacing: 2.08px;
`;

const Hash = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 8px;
  margin-left: 42px;
  min-width: 53px;
  letter-spacing: 0;
`;

const OutlineFilesCopy = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 17px;
  margin-top: 4px;
`;

const Signatures = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 26px;
  letter-spacing: 0;
`;

const LatestBlocks = styled.div`
  width: 1336px;
  margin-top: 9px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  padding: 18.2px 16px;
  align-items: flex-start;
  min-height: 797px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const Validators1 = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack172px}
            height: 21px;
  margin-top: 18px;
  margin-left: 14.64px;
  letter-spacing: 0;
`;

const OverlapGroup10 = styled.div`
  height: 60px;
  margin-top: 19px;
  display: flex;
  padding: 13.8px 15px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Ellipse81 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--roman);
  border-radius: 15.93px;
`;

const DgtizeStake = styled.div`
  ${UrbanistNormalNewCar172px}
  min-height: 21px;
  margin-left: 14px;
  margin-top: 0.33px;
  min-width: 99px;
  letter-spacing: 0;
`;

const OverlapGroup9 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 13.8px 15px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--white);
`;

const Ellipse82 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--navy-blue);
  border-radius: 15.93px;
`;

const OverlapGroup8 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 13.8px 15px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Ellipse83 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 15.93px;
`;

const Ellipse84 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--lavender-magenta);
  border-radius: 15.93px;
`;

const Ellipse85 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--gray);
  border-radius: 15.93px;
`;

const Ellipse86 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--mercury);
  border-radius: 15.93px;
`;

const Ellipse87 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--brilliant-rose);
  border-radius: 15.93px;
`;

const Ellipse88 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--eminence);
  border-radius: 15.93px;
`;

const Ellipse89 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--cyan--aqua);
  border-radius: 15.93px;
`;

const Ellipse810 = styled.div`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  background-color: var(--chartreuse-yellow);
  border-radius: 15.93px;
`;

const Transactions = styled.div`
  ${UrbanistNormalBlack24px}
  min-height: 29px;
  margin-top: 26px;
  margin-left: 5px;
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  width: 1336px;
  margin-top: 9px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  padding: 23.1px 16px;
  align-items: flex-start;
  min-height: 415px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 7px 30px #0015da29;
`;

const LatestBlocksTilte = styled.div`
  ${UrbanistSemiBoldBlack172px}
  margin-left: 14.64px;
  display: flex;
  align-items: flex-end;
  min-width: 1193px;
`;

const Height1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  align-self: flex-start;
  min-width: 50px;
  letter-spacing: 0;
`;

const Hash1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 98px;
  margin-bottom: 0;
  min-width: 39px;
  letter-spacing: 0;
`;

const Status = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 190px;
  margin-bottom: 0;
  min-width: 50px;
  letter-spacing: 0;
`;

const Fee = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 101px;
  margin-bottom: 0;
  min-width: 27px;
  letter-spacing: 0;
`;

const Message = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 192px;
  margin-bottom: 0;
  min-width: 70px;
  letter-spacing: 0;
`;

const Type = styled.div`
  ${ValignTextMiddle}
  width: 62px;
  height: 21px;
  margin-left: 92px;
  margin-bottom: 0;
  letter-spacing: 0;
`;

const Time1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 169px;
  margin-bottom: 0;
  min-width: 39px;
  letter-spacing: 0;
`;

const OverlapGroup19 = styled.div`
  height: 60px;
  margin-top: 19px;
  display: flex;
  padding: 19.5px 14.6px;
  align-items: flex-end;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Phone = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  min-width: 74px;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 78px;
  margin-bottom: 0;
  min-width: 167px;
  letter-spacing: 0;
`;

const Place = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 62px;
  margin-bottom: 0;
  min-width: 61px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 90px;
  margin-bottom: 0;
  min-width: 47px;
  letter-spacing: 0;
`;

const Number2 = styled.div`
  ${UrbanistNormalBlack172px}
  width: 32px;
  min-height: 21px;
  margin-left: 172px;
  margin-bottom: 0;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h1 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 127px;
  margin-bottom: 0;
  min-width: 167px;
  letter-spacing: 0;
`;

const X6sAgo = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 63px;
  margin-bottom: 0;
  min-width: 51px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 19.3px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--white);
`;

const Phone1 = styled.div`
  ${UrbanistMediumAbsoluteZero172px}
  min-height: 21px;
  margin-top: 0.33px;
  min-width: 74px;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h2 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 78px;
  margin-top: 0.33px;
  min-width: 167px;
  letter-spacing: 0;
`;

const Place1 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 62px;
  margin-top: 0.33px;
  min-width: 61px;
  letter-spacing: 0;
`;

const Number3 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  align-self: flex-end;
  margin-left: 90px;
  min-width: 47px;
  letter-spacing: 0;
`;

const Number4 = styled.div`
  ${UrbanistNormalBlack172px}
  width: 32px;
  min-height: 21px;
  margin-left: 172px;
  margin-top: 0.33px;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h3 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 127px;
  margin-top: 0.33px;
  min-width: 167px;
  letter-spacing: 0;
`;

const X6sAgo1 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 63px;
  margin-top: 0.33px;
  min-width: 51px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 17.6px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Number5 = styled.div`
  ${UrbanistNormalBlack172px}
  width: 32px;
  min-height: 21px;
  margin-left: 172px;
  margin-top: 0.15px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 17.4px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--white);
`;

const Number6 = styled.div`
  ${UrbanistNormalBlack172px}
  width: 32px;
  min-height: 21px;
  margin-left: 172px;
  margin-bottom: 0.24px;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h4 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  margin-left: 127px;
  margin-bottom: 0.24px;
  min-width: 167px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 60px;
  margin-top: 4px;
  display: flex;
  padding: 19.1px 14.6px;
  align-items: center;
  min-width: 1303px;
  background-color: var(--titan-white);
`;

const Number7 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  align-self: flex-start;
  margin-left: 90px;
  min-width: 47px;
  letter-spacing: 0;
`;

const Number8 = styled.div`
  ${UrbanistNormalBlack172px}
  width: 32px;
  min-height: 21px;
  align-self: flex-start;
  margin-left: 172px;
  margin-top: 0.09px;
  letter-spacing: 0;
`;

const X34567efe34g6j7k85h5 = styled.div`
  ${UrbanistNormalBlack172px}
  min-height: 21px;
  align-self: flex-start;
  margin-left: 127px;
  margin-top: 0.09px;
  min-width: 167px;
  letter-spacing: 0;
`;

export default BlockHeightContent
