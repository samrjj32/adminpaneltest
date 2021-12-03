import React, { useEffect, useState, useContext } from "react";
import greenTick from "../assets/dashboard/check-2.png";
import alert from "../assets/dashboard/icon-1.png";
import Cardsmall from "../Components/Cardsmall";
import Cardlarge from "../Components/Cardlarge";

import biscuit from "../assets/dashboard/005-biscuit.png";
import script from "../assets/dashboard/group-10.png";
import category from "../assets/dashboard/free.png";
import scan from "../assets/dashboard/computer-1.png";

const initialState = {
  cookies: 0,
  script: 0,
  categories: 0,
  scaned: 0,
};

function Dashboard() {
  const [userdata, setUserData] = useState(initialState);

  const handleClickIncrement = () => {
    const { cookies, script, categories, scaned } = userdata;

    setUserData({
      cookies: cookies + 1,
      script: script + 1,
      categories: categories + 1,
      scaned: scaned + 1,
    });
  };

  const handleReset = () => {
    console.log("ksad");
    setUserData(initialState);
  };

  return (
    <div className="dashboard">
      <div className="section1">
        <div className="leftpart">
          <p className="first">https://cookeyes.com</p>
          <div className="activesection">
            <img src={greenTick} class="monitor" />
            <p>Banner Active</p>
          </div>
        </div>
        <div className="rightpart">
          <p>Last Scan:09/24/2019</p>
          <div className="rescan-btn" onClick={handleClickIncrement}>
            Rescan
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="cookie-text">
          <img src={alert} class="monitor" />{" "}
          <p>Cookieyes banner not active yet.</p>{" "}
          <span onClick={handleReset}>Complete Setup</span>{" "}
        </div>
      </div>

      <div className="section3">
        <Cardsmall
          overlayColor="#ecf2ff"
          count={userdata.cookies}
          heading="Total Cookies"
          subHeading="2 new cookies"
          icon={biscuit}
        />
        <Cardsmall
          overlayColor="#fff9eb"
          count={userdata.script}
          heading="Total Script"
          subHeading="1 new script"
          icon={script}
        />
        <Cardsmall
          overlayColor="#ecf9f6"
          count={userdata.categories}
          heading="Categories"
          subHeading="1 new categories"
          icon={category}
        />
        <Cardsmall
          overlayColor="#fdecec"
          count={userdata.scaned}
          heading="Pages scaned"
          subHeading="1 new page"
          icon={scan}
        />
        <Cardlarge />

        {/* <div>lasdlasd</div> */}
      </div>
      <div className="section-4">
        <p className="heading-s4"> Recent visitors</p>
        <div className="tablecontents">
          <ul className="headers">
            <li>IP Address</li>
            <li>Country</li>
            <li>Device</li>
            <li>Consent status</li>
            <li>Time and date</li>
          </ul>
          {RecentVisitors.map((item, i) => {
            return (
              <ul className="item1">
                <li>{item.ip}</li>
                <li>{item.country}</li>
                <li>{item.device}</li>
                <li
                  className="statusOverlay"
                  style={{
                    backgroundColor: `${
                      item.status == "Accepted" ? "#ecf9f6" : "#ecf2ff"
                    }`,
                    color: `${
                      item.status == "Accepted" ? "#00c9a6" : "#1b7cf8"
                    }`,
                  }}
                >
                  {item.status}
                </li>
                <li>{item.time}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

let RecentVisitors = [
  {
    ip: "202.164.149.**",
    country: "United States",
    device: "Mobile",
    status: "Accepted",
    time: "10:23,01/11/2019",
  },
  {
    ip: "202.164.149.**",
    country: "United States",
    device: "Mobile",
    status: "Partially Accepted",
    time: "10:23,01/11/2019",
  },
  {
    ip: "202.164.149.**",
    country: "United States",
    device: "Mobile",
    status: "Partially Accepted",
    time: "10:23,01/11/2019",
  },
];
