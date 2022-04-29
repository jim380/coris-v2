import React from "react";
import SideBar from "./SideBar";
import { sideBarData } from "./SideBar/SideBarData";

const Layout  = ({ children }: {children:React.ReactNode}) => {
    return (
     <div> 
         <SideBar  {...sideBarData} />
        <h2>Body</h2>
        {children}
        <h4>Footer</h4>
    </div>
  
    );
  }

  export default Layout
