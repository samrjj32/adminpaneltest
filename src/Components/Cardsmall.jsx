import React from "react";

export default function Cardsmall(props) {
  const {icon, overlayColor, count, heading, subHeading } = props;

  return (
    <div className="card-small">
      <div className="overlay" style={{ backgroundColor: overlayColor }}>
        <img src={icon} class="monitor" />
      </div>
      <p className="count">{count}</p>
      <div className="content">
        <p className="heading">{heading}</p>
        <p className="sub-heading">{subHeading}</p>
      </div>
    </div>
  );
}
