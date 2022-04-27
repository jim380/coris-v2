import React from "react";

const Layout  = ({ children }: {children:React.ReactNode}) => {
    return (
     <div> 
          <nav>
            <li>
                Home
            </li>
            </nav>
        <h2>Body</h2>
        {children}
        <h4>Footer</h4>
    </div>
  
    );
  }

  export default Layout