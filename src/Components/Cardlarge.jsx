import React from "react";

export default function Cardlarge() {
  return (
    <div className="cardlarge">
      <p>Cookies</p>
      <div className="content">
        <div className="pie"></div>
        <ul>
          <li>
            <div className="accepted"></div> <span>Accepted</span>
          </li>
          <li >
            <div className="partially"></div>
           <span> Partially Accepted</span>
          </li>
          <li >
            <div className="rejected"></div>
           <span> Rejected</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
