import React from "react";
import styles from '../../../styles/SideBar.module.css'
import {SideNaveBar, OverlapGroup18, FlexRow, Asset31, Asset41, Asset51, Group7293, Group7266, Navigation, SolidGeneralChartPie, Overview, Ellipse5, Validators, Group7267, Blocks, Group7269, OutlineInterfaceEdit, Proposals, Group7270, Parameters, Group7268  } from "./SideBarStyles"

function SideBar(props: any) {
  const {
    overlapGroup18,
    asset31,
    asset41,
    asset51,
    solidGeneralChartPie,
    overview,
    iconUser,
    validators,
    outlineInterfaceStack,
    blocks,
    outlineInterfaceEdit,
    proposals,
    outlineInterfaceSettingsAdjust,
    parameters,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className={styles.sidebar} id="screen">
        <SideNaveBar >
          <OverlapGroup18 style={{ backgroundImage: `url(${overlapGroup18})` }}>
            <FlexRow>
              <Asset31 src={asset31} />
              <Group7293>
                <Asset41 src={asset41} />
                <Asset51 src={asset51} />
              </Group7293>
            </FlexRow>
            <Navigation>
              <Group7266>
                <SolidGeneralChartPie src={solidGeneralChartPie} />
                <Overview>{overview}</Overview>
                <Ellipse5></Ellipse5>
              </Group7266>
              <Group7267>
                <SolidGeneralChartPie src={iconUser} />
                <Validators>{validators}</Validators>
              </Group7267>
              <Group7268>
                <SolidGeneralChartPie src={outlineInterfaceStack} />
                <Blocks>{blocks}</Blocks>
              </Group7268>
              <Group7269>
                <OutlineInterfaceEdit src={outlineInterfaceEdit} />
                <Proposals>{proposals}</Proposals>
              </Group7269>
              <Group7270>
                <OutlineInterfaceEdit src={outlineInterfaceSettingsAdjust} />
                <Parameters>{parameters}</Parameters>
              </Group7270>
            </Navigation>
          </OverlapGroup18>
        </SideNaveBar>
        </div>
        </div>);
        }

export default SideBar