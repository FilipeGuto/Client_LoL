import React from "react";
import "./client.css";

import backClient from "../../Images/LOL/client.jpg";
import logoClient from "../../Images/LOL/logo-riot.png";

export default function ClientLoL({ onClose = () => {} }) {
  return (
    <div className="modal">
      <div className="container-modal">
        <div className="modal-form">
          <img className="logo-riot" src={logoClient} alt="" />
          <form>
            <div className="form-container">
              <h1>Fazer login</h1>
              <label className="form-label">
                <input type="text" placeholder="NOME DE USUÁRIO" />
                <input type="text" placeholder="SENHA" />
                <span className="box-btn">
                <button className="btn-face"><i className="fa-brands fa-facebook"></i></button>
                <button className="btn-google"><i className="fa-brands fa-google"></i></button>
                <button className="btn-apple"><i className="fa-brands fa-apple"></i></button>
                </span>
                <input type="checkbox" />
              </label>
            </div>
          </form>
          <button className="btn-login">
          <i class="fa-solid fa-arrow-right"></i>
          </button>
          <div className="box-register">
            <h3 className="text-register">Não consegue iniciar sessão?
            <button className="btn-register">Criar Conta</button>
            </h3>
          </div>
        </div>
        <div className="modal-img">
          <img src={backClient} alt="background client" />
          <button className="close" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
