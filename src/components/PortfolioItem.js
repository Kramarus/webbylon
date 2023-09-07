import React from "react";

export default function PortfolioItem(props) {
  return (
    <a href={props.link} target="_blank">
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img src={props.image} alt="" />
        </div>
        <div className="portfolio-content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
}
