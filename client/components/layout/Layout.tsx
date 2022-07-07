import React from "react";
import styles from "./Layout.module.css"
import Footer from "./Footer";
import Header from "./Header";
import SideNavBar from "./SideBar";
import styled from "styled-components";
import Head from "next/head";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <SideNavBar {...sideNavBarData} />
      <FlexCol2>
        <div className="d-table w-100">
          <div className="d-table-row w-100 main-header">
            <Header/>
          </div>
          <div className="d-table-row w-100">
            <div className="d-table w-100">
              <div className="d-table-row w-100">
                <div style={{ minHeight: "400px", paddingTop: "50px"}}>
                  {children}
                </div>
              </div>
              <div className="d-table-row w-100">
                <Footer {...footerData} />
              </div>
            </div>            
          </div>
        </div> 
      </FlexCol2>
      <div id="modal"></div>
    </>
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
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-left: 320px;
  @media screen and (max-width: 1334px){
    padding-left: 120px;
  };
  @media screen and (max-width: 1074px){
    padding: 10px !important;
  };
`;

export default Layout
