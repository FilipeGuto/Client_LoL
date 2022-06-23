import React, { useContext } from "react";
import Context from "../../Context/Context";
import "./lol.css";

import iconLoL from "../../Images/LoL.png";

export default function LoL() {
  const { setLogged } = useContext(Context);

  return (
    <div id="modal-lol" className="modal-lol">
      <div className="container-modal-lol">
        <span className="nav-lol">
          <div className="btn-game">
            <span>
            <img src={iconLoL} alt="" className="icon-lol" />
            <button>JOGAR</button>
            </span>
            <a href="#modal-lol">INÍCIO</a>
            TFT
            CLASH
          </div>
          <div className="btn-perfil">
            1
            2
            3
            4
            5
          </div>
        </span>
        <span className="homepage">CONTEUDO</span>
      </div>
    </div>
  );
}
