import React from "react";
import monitor from "../assets/monitor.png";
import browser from "../assets/browser.png";
import biscuit from "../assets/005-biscuit.png";
import search from "../assets/search-1.png";
import file from "../assets/file.png";
import settings from "../assets/settings-2.png";
import group from "../assets/group.png";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand-name">
       <img src={group} class="monitor" />
        {/* <p> Cookieyes</p> */}
      </div>

      <ul>
        <li className="focused">
          {" "}
          <img src={monitor} class="monitor" />
          <p>Dashboard</p>
        </li>
        <li>
          {" "}
          <img src={browser} class="monitor" />
          <p>Consent Banner </p>
        </li>
        <li>
          {" "}
          <img src={biscuit} class="monitor" />
          <p>Cookies </p>
        </li>
        <li>
          {" "}
          <img src={search} class="monitor" />
          <p>Scan</p>
        </li>
        <li>
          {" "}
          <img src={file} class="monitor" />
          <p>Reports</p>
        </li>
        <li>
          {" "}
          <img src={settings} class="monitor" />
          <p>Settings</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
