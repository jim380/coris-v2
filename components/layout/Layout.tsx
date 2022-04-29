import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { sideBarData } from "./SideBar/SideBarData";
import { HeaderData} from "./Header/HeaderData"

const Layout  = ({ children }: {children:React.ReactNode}) => {
    return (
     <div> 
         <SideBar  {...sideBarData} />
         <Header {...HeaderData} />
        <h2>Body</h2>
        {children}
        <h4>Footer</h4>
    </div>
  
    );
  }

  export default Layout
