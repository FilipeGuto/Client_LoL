import React, { useEffect, useState } from "react";
import "./footer.css";

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
        <i className="fa-brands fa-windows icon-windows-img fa-lg"></i>
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
        <i className="fa-solid fa-wifi fa-xs"></i>
        </li>
        <li>
        <i className="fa-solid fa-volume-low fa-sm"></i>
        </li>
        <div className="container-language">
          <li>POR</li>
          <li>PTBR</li>
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
