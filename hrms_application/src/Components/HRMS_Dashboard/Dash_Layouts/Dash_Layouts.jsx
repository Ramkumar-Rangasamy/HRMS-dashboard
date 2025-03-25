import React from "react";
import "./Dash_Layouts.css";
import Dash_Sidebar from "../Dash_Sidebar/Dash_Sidebar";
import { Outlet } from "react-router-dom";

const Dash_Layouts = () => {
  return (
    <div className="hrms-dashboard-container">
      <Dash_Sidebar /> {/* Sidebar remains visible */}
      <div className="hrms-layout-dashboard-content-area">
        <Outlet /> {/* Dynamic content from nested routes */}
      </div>
    </div>
  );
};

export default Dash_Layouts;
