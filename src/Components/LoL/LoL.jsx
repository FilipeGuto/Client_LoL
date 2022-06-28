import React, { useContext } from "react";
import Context from "../../Context/Context";
import Chat from "../Chat/Chat";
import "./lol.css";

import play from "../../Images/LOL/jogar.png";
import userPerfil from "../../Images/LOL/user.png";
import backpack from "../../Images/LOL/backpack.png";
import espolio from "../../Images/LOL/espolio.png";
import store from "../../Images/LOL/store.png";
import RP from "../../Images/LOL/rp.png";
import EA from "../../Images/LOL/essencia.png";
import userIcon from "../../Images/LOL/user-yi.png";

import NASA from "../../Images/Projects/NASA.png";
import COIN from "../../Images/Projects/Coin.png";
import PORTFOLIO from "../../Images/Projects/Portfolio.png";

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
          <div className="box-chat-lol">
            <Chat />
          </div>
        </div>
        <div className="header-lol">
          <div className="header">
            <span className="box-header-lol">
              <div className="header-game">
                <button className="btn-play">
                  <img src={play} alt="" className="img-play" />
                </button>
                <div className="box-game">
                  <div className="choose" />
                  INÍCIO
                </div>
                <div className="box-game">
                  <div className="choose" />
                  TFT
                </div>
                <div className="box-game">
                  <div className="choose" />
                  CLASH
                </div>
              </div>
              <div className="header-user">
                <span className="box-img-user">
                  <div className="box-perfil-lol">
                    <img src={userPerfil} alt="" className="img-perfil" />
                  </div>
                  <div className="box-perfil-lol">
                    <img src={backpack} alt="" className="img-perfil" />
                  </div>
                  <div className="box-perfil-lol">
                    <img src={espolio} alt="" className="img-perfil" />
                  </div>
                  <div className="box-perfil-lol">
                    <img src={store} alt="" className="img-perfil" />
                  </div>
                </span>
                <hr className="row-vertical"></hr>
                <span className="box-gold-user">
                  <div className="box-rp">
                    <div className="rp-name">RP</div>
                    <img src={RP} alt="" className="rp" />
                    1500
                  </div>
                  <div className="box-ea">
                    <div className="ea-name">Essência Azul</div>
                    <img src={EA} alt="" className="ea" />
                    100MIL
                  </div>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="page-initial">
          <div className="container-description">
            <h1>Muito obrigado por ver este meu projeto</h1>
            <p>
              Aqui em baixo tem alguns outros projetos que já fiz, além de links
              para meu LinkedIn e GitHub
            </p>
            <a
              href="https://github.com/FilipeGuto/Client_LoL"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-repo">REPOSITÓRIO</button>
            </a>
          </div>
          <div className="container-project">
            <span className="container-img-project">
              <div className="box-img-title">
                <img src={NASA} alt="" className="img-project" />
                <a
                  href="https://project-nasa-api.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-projetos"
                >
                  <p>Projeto feito em React com API NASA</p>
                </a>
              </div>
            </span>
            <span className="container-img-project">
              <div className="box-img-title">
                <img src={COIN} alt="" className="img-project" />
                <a
                  href="https://deft-moxie-065dae.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-projetos"
                >
                  <p>Projeto Full Stack do 0 ao Deploy</p>
                </a>
              </div>
            </span>
            <span className="container-img-project">
              <div className="box-img-title">
                <img src={PORTFOLIO} alt="" className="img-project" />
                <a
                  href="https://portfolio-react-filipe-augusto.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-projetos"
                >
                  <p>Portfolio em React</p>
                </a>
              </div>
            </span>
            <div className="container-img-project container-social">
              <a
                href="https://www.linkedin.com/in/filipeguto/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social"
              >
                <i className="fa-brands fa-linkedin fa-3x"></i>
              </a>
              <a
                href="https://github.com/FilipeGuto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social"
              >
                <i className="fa-brands fa-github-square fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
