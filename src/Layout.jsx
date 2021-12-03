import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Screens/Dashboard";

function Layout() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="others">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Layout;
