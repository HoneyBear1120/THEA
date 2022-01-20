import React from "react";
import AddNoteSidebar from "../Header/AddNoteSidebar";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";

const Layout = ({ header, navbar, sidebar, children, propsForNavBar, isDashboard }) => {
  return (
    <div>
      {header ? <Header /> : null}
      {navbar ? <Navbar preventCollectionReloading={propsForNavBar} isDashboard={isDashboard}/> : null}
      <div className="main-content">
        {sidebar ? <AddNoteSidebar /> : null}
        {children}
      </div>
    </div>
  );
};
export default Layout;
