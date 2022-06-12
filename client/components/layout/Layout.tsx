import React from "react";
import styles from "./Layout.module.css"
import Footer from "./Footer";
import Header from "./Header";
import SideNavBar from "./SideBar";
import styled from "styled-components";


const Layout  = ({ children }: {children:React.ReactNode}) => {
    return (
<div className="container-center-horizontal">
      <div className={styles["overview-desktop-screen"] +" "+ "screen"}>
    <SideNavBar {...sideNavBarData }/>
      <FlexCol2>
     <Header />
     {children}

     <Footer {...footerData} />
      </FlexCol2>
      </div>
    </div>
    );
  }

  const sideNavBarData = {
    solidGeneralChartPie: "/img/solid-general-chart-pie@2x.png",
    iconUser: "/img/outline-communication-user@2x.png",
    icon1: "/img/outline-interface-stack@2x.png",
    icon2: "/img/outline-interface-edit@2x.png",
    icon3: "/img/outline-interface-settings-adjust@2x.png",
    overview: "Overview",
    validators: "Validators",
    blocks: "Blocks",
    proposals: "Proposals",
    parameters: "Parameters",
    assets: "Assets"
  }
  
  const footerData = {
    company: "Company",
    about1: "About",
    security1: "Security",
    place4: "Contact",
    climate1: "Climate",
    ourProjects: "Our Projects",
    testnetPortal1: "Testnet Portal",
    stakingPortal1: "Staking",
    community: "Community",
    about2: "About",
    security2: "Security",
    place5: "Contact",
    climate2: "Climate",
    iconPaper_Plane: "/img/solid-brands-telegram@2x.png",
    iconLinkedin: "/img/solid-brands-linkedin@2x.png",
    iconInstagram: "/img/solid-brands-instagram@2x.png",
    iconTwitter: "/img/solid-brands-twitter@2x.png",
    solidBrandsYoutube: "/img/solid-brands-youtube@2x.png",
    solidBrandsChrome: "/img/solid-brands-chrome@2x.png",
    eosadolor382GmailCom: "eosadolor382@gmail.com",
    resources: "Resources",
    about3: "About",
    security3: "Security",
    place6: "Contact",
    climate3: "Climate",
    learn: "Learn",
    testnetPortal2: "Testnet",
    stakingPortal2: "Staking",
  }

  const FlexCol2 = styled.div`
  width: 1384px;
  margin-left: 6px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2367px;
`;

  export default Layout
