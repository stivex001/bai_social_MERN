import React from "react";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="theme-dark">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{flex: "6"}}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Layout;
