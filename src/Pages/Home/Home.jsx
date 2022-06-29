import React, { useState, useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import ClientLoL from "../../Components/ClientLoL/ClientLoL";
import LoL from "../../Components/LoL/LoL";
import Context from "../../../src/Context/Context";
import "./home.css";

import iconGoogle from "../../Images/google.png";
import iconLoL from "../../Images/LoL.png";
import logoLoL from "../../Images/logo.png";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { logo, setLogo, logged, setLogged } = useContext(Context);

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
              <img src={iconGoogle} alt="icon Google" className="icon-g-img" />
              <p>Google Chrome</p>
            </a>
          </span>
          <span className="container-l">
            <button onClick={() => setOpen(true)} className="l-icon">
              <img
                src={iconLoL}
                alt="icon League of Legends"
                className="icon-l-img"
              />
              <p>League of Legends</p>
            </button>
          </span>
        </div>
        {open ? <ClientLoL onClose={() => setOpen(false)} /> : null}
        {logo === true ? (
          <div className="logo-LoL">
            <img src={logoLoL} alt="" className="lol-img" />
            {setTimeout(() => {
              setLogo(false);
              setLogged(true);
            }, 2000)}
          </div>
        ) : null}
        {logged === true ? <LoL onClose={() => setOpen(false)} /> : null}
      </div>
      <Footer />
    </div>
  );
}
