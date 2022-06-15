import React, { useEffect, useState } from "react";
import "./footer.css";

import iconWindowns from "../../Images/windowns.png";
import iconWifi from "../../Images/wifi.png";
import iconAudio from "../../Images/audio.png";
import iconScreens from "../../Images/screens.png";
import iconExplorer from "../../Images/explorer.png";

export default function Footer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="footer">
      <span className="container-w">
        <div className="icon-w">
          <img
            src={iconWindowns}
            alt="icon Windowns"
            className="icon-windowns-img"
          />
        </div>
        <div className="input-w">
          <input
            type="text"
            className="input"
            placeholder="Pesquisar na Web e no Windowns"
          />
        </div>
        <img
          className="icon-screens-img"
          src={iconScreens}
          alt="Icon Screens"
        />
        <a
          className="e-icon"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer"
        >
          {/* <div className="teste" /> */}
          <img
            className="icon-explorer-img"
            src={iconExplorer}
            alt="icon Explorer"
          />
        </a>
      </span>
      <span className="container-info">
        <li>
          <img src={iconWifi} alt="Icon Wifi" className="icon-wifi-img" />
        </li>
        <li>
          <img src={iconAudio} alt="Icon Audio" className="icon-audio-img" />
        </li>
        <div className="container-language">
          <li>POR</li>
          <li>PTB2</li>
        </div>
        <div className="container-date">
          <li>
            {dateState.toLocaleString("pt-BR", {
              hour: "numeric",
              minute: "numeric",
            })}
          </li>
          <li>{dateState.toLocaleDateString()}</li>
        </div>
      </span>
    </div>
  );
}
