import React, { useContext } from "react";
import Context from "../../Context/Context";
import "./lol.css";

import play from "../../Images/LOL/jogar.png";
import userPerfil from "../../Images/LOL/user.png";
import backpack from "../../Images/LOL/backpack.png";
import espolio from "../../Images/LOL/espolio.png";
import store from "../../Images/LOL/store.png";
import RP from "../../Images/LOL/rp.png";
import EA from "../../Images/LOL/essencia.png";

import userIcon from "../../Images/LOL/user-yi.png";

export default function LoL() {
  const { setLogged, newUser } = useContext(Context);

  return (
    <div id="modal-lol" className="modal-lol">
      <div className="container-modal-lol">
        <div className="nav-right">
          <div className="box-btn-lol">
            <div className="info-user">
              <div>
                <img src={userIcon} alt="" className="img-user" />
              </div>
              <div className="box-status">
                <div className="user-name">{newUser.name}</div>
                <div className="user-status">
                  <i className="fa-solid fa-circle"></i> Online
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn-close-lol"
                onClick={() => setLogged(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
        <div className="header-lol">
          <div className="header">
            <span className="box-header-lol">
              <div className="header-game">
                <div className="box-game">
                  <button className="btn-play">
                    <img src={play} alt="" className="img-play" />
                  </button>
                </div>
                <div className="box-game">INICIO</div>
                <div className="box-game">TFT</div>
                <div className="box-game">CLASH</div>
              </div>
              <div className="header-user">
                <span className="box-img-user">
                  <div className="box-perfil-lol">
                    <img src={userPerfil} alt="" />
                  </div>
                  <div className="box-perfil-lol">
                    <img src={backpack} alt="" />
                  </div>
                  <div className="box-perfil-lol">
                    <img src={espolio} alt="" />
                  </div>
                  <div className="box-perfil-lol">
                    <img src={store} alt="" />
                  </div>
                </span>
                <hr className="row-vertical"></hr>
                <span className="box-gold-user">
                  <div className="box-rp">
                    <img src={RP} alt="" className="rp" />
                    1500
                  </div>
                  <div className="box-ea">
                    <img src={EA} alt="" className="ea" />
                    100MIL
                  </div>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="content">
          <div></div>
        </div>
      </div>
    </div>
  );
}
