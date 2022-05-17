import React from "react";
import styles from "./Layout.module.css"
import Footer from "./Footer";
import Header from "./Header";
import SideNavBar from "./SideBar";

const Layout  = ({ children }: {children:React.ReactNode}) => {
    return (
      <div className="container">
<div className="screen" id={styles['overview-desktop-screen']} style={{}}>
        <SideNavBar />
        <div className={styles["flex-col-3"]} style={{float:"left" }}>
     <Header />

        {children}
  <Footer />
  </div>
  </div>
  </div>
    );
  }

  export default Layout
