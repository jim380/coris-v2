import { } from "./HomePageStyles"
import { FlexRow2, Group7320, Group7319, Group7277, Vector2, FlexCol1, Price, X56824h, OverlapGroup1, Rectangle21, Rectangle23, Rectangle22, Rectangle24, Text2, Text3, Text4, Text5, Vector1, Path4, Oval8Copy, Time, OverlapGroup, Oval7, Price1, LineChart, Oval8, Asset61, Asset71, GroupContainer1, Group7273, Group7274, Group7275, Group7276, Group7278, Group7279, Group7280, Group7321, Group7322, MarketCap, X24thVol, Phone, Phone1, OverlapGroup12, LatestBlock, BlockTime, Phone2, X602s, Corichain1, Rectangle31, Rectangle32, Chain  } from "./HomePageStyles"

function HomePageContent(props) {
  const {
    vector2,
    price1,
    x56824H,
    text2,
    text3,
    text4,
    text5,
    vector1,
    path4,
    oval8Copy,
    time1,
    overlapGroup,
    price2,
    lineChart,
    oval8,
    asset61,
    asset71,
    marketCap,
    x24ThVol,
    phone1,
    phone2,
    latestBlock,
    phone3,
    blockTime,
    x602S,
    chain,
    corichain1,
    rectangle31,
    rectangle32,
  } = props;
    return (
        <FlexRow2>
          <Group7320>
            <Group7319>
              <Group7277>
                <Vector2 src={vector2} />
                <FlexCol1>
                  <Price>{price1}</Price>
                  <X56824h>{x56824H}</X56824h>
                </FlexCol1>
              </Group7277>
              <OverlapGroup1>
                <Rectangle21></Rectangle21>
                <Rectangle23></Rectangle23>
                <Rectangle22></Rectangle22>
                <Rectangle24></Rectangle24>
                <Text2>{text2}</Text2>
                <Text3>{text3}</Text3>
                <Text4>{text4}</Text4>
                <Text5>{text5}</Text5>
                <Vector1 src={vector1} />
                <Path4 src={path4} />
                <Oval8Copy src={oval8Copy} />
                <Time>{time1}</Time>
                <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <Oval7></Oval7>
                  <Price1>{price2}</Price1>
                </OverlapGroup>
                <LineChart src={lineChart} />
                <Oval8 src={oval8} />
              </OverlapGroup1>
              <Asset61 src={asset61} />
              <Asset71 src={asset71} />
            </Group7319>
          </Group7320>
          <GroupContainer1>
            <Group7276>
              <Group7275>
                <Group7273>
                  <MarketCap>{marketCap}</MarketCap>
                  <X24thVol>{x24ThVol}</X24thVol>
                </Group7273>
                <Group7274>
                  <Phone>{phone1}</Phone>
                  <Phone1>{phone2}</Phone1>
                </Group7274>
              </Group7275>
            </Group7276>
            <OverlapGroup12>
              <Group7322>
                <Group7321>
                  <Group7278>
                    <LatestBlock>{latestBlock}</LatestBlock>
                    <Phone2>{phone3}</Phone2>
                  </Group7278>
                  <Group7279>
                    <BlockTime>{blockTime}</BlockTime>
                    <X602s>{x602S}</X602s>
                  </Group7279>
                  <Group7280>
                    <Chain>{chain}</Chain>
                    <Corichain1>{corichain1}</Corichain1>
                  </Group7280>
                </Group7321>
              </Group7322>
              <Rectangle31 src={rectangle31} />
              <Rectangle32 src={rectangle32} />
            </OverlapGroup12>
          </GroupContainer1>
        </FlexRow2>
    )
}

export default HomePageContent