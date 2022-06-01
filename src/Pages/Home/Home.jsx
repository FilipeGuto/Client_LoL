import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./home.css";

import iconGoogle from "../../Images/google.png";
import iconLoL from "../../Images/LoL.png";

export default function Home() {
  return (
    <div className="home-container">    
    <div className="home">
      <div className="container">
        <span className="container-g">
          <a
            className="g-icon"
            href="https://www.google.com/intl/pt-BR/chrome/"
            target="_blank"
            rel="noreferrer"
          >
            <img
            src={iconGoogle}
            alt="icon Google"
            className="icon-g-img" />
            <p>Google Chrome</p>
          </a>
        </span>
        <span className="container-l">
          <button className="l-icon">
            <img
              src={iconLoL}
              alt="icon League of Legends"
              className="icon-l-img"
            />
            <p>League of Legends</p>
          </button>
        </span>
      </div>
    </div>
    <Footer />
    </div>
  );
}
