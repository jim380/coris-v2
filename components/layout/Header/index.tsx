import { FlexRow1, FlexCol, Group7325, IconSearch, Title, GroupContainer, OverlapGroup2, OutlineGeneralMoon, Group7295, Asset62, Asset72, OutlineMediaShuffle  } from "./HeaderStyles"


function Header(props: any) {
    const {
        iconSearch,
        title,
        overlapGroup2,
        asset621,
        asset721,
        outlineMediaShuffle
    } = props

    return (
<FlexRow1>
<FlexCol>
  <Group7325>
    <IconSearch src={iconSearch} />
  </Group7325>
  <Title>{title}</Title>
</FlexCol>
<GroupContainer>
  <OverlapGroup2 style={{ backgroundImage: `url(${overlapGroup2})` }}>
    <OutlineGeneralMoon src="/img/outline-general-moon@2x.svg" />
  </OverlapGroup2>
  <Group7295>
    <Asset62 src={asset621} />
    <Asset72 src={asset721} />
    <OutlineMediaShuffle src={outlineMediaShuffle} />
  </Group7295>
</GroupContainer>
</FlexRow1>
    )
}

export default Header