import React from "react";

export default function Service(props) {
  return (
    <div className="card black">
      <div className="card-image">
        <div className="icon-container">
          <img src={props.icon} alt="Icon" />
        </div>
      </div>
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
