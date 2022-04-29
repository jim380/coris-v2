import React from "react";
import SideBar from "./SideBar";

const Layout  = ({ children }: {children:React.ReactNode}) => {
    return (
     <div> 
         <SideBar  {...sideBarData}/>
        <h2>Body</h2>
        {children}
        <h4>Footer</h4>
    </div>
  
    );
  }

  export default Layout

  const sideBarData = {
    overlapGroup18: "/img/side-bar@1x.png",
    asset31: "/img/asset-3-1@2x.png",
    asset41: "/img/asset-4-1@2x.png",
    asset51: "/img/asset-5-1@2x.png",
    solidGeneralChartPie: "/img/solid-general-chart-pie@2x.png",
    overview: "Overview",
    iconUser: "/img/outline-communication-user@2x.png",
    validators: "Validators",
    outlineInterfaceStack: "/img/outline-interface-stack@2x.png",
    blocks: "Blocks",
    outlineInterfaceEdit: "/img/outline-interface-edit@2x.png",
    proposals: "Proposals",
    outlineInterfaceSettingsAdjust: "/img/outline-interface-settings-adjust@2x.png",
    parameters: "Parameters",
  }