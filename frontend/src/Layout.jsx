import React, { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./context/themeContext";

const Layout = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
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
