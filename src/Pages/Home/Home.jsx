import React from "react";
import "./home.css";

import iconGoogle from "../../Images/google.png";
import iconLoL from "../../Images/LoL.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <span className="container-g">
          <a
            className="g-icon"
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconGoogle} alt="icon Google" className="icon-g-img" />
          </a>
        </span>
        <span className="container-l">
          <button className="l-icon">
            <img
              src={iconLoL}
              alt="icon League of Legends"
              className="icon-l-img"
            />
          </button>
        </span>
      </div>
    </div>
  );
}
