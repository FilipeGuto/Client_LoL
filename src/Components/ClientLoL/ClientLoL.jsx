import React from "react";
import "./client.css";

import Form from "../Form/Form";

import backClient from "../../Images/LOL/client.jpg";
import logoClient from "../../Images/LOL/logo-riot.png";

export default function ClientLoL({ onClose = () => {} }) {
  return (
    <div className="modal">
      <div className="container-modal">
        <div className="modal-form">
          <span className="box-img">
            <img className="logo-riot" src={logoClient} alt="" />
          </span>
          <div className="form-container">
            <h1 className="title-form">Fazer login</h1>
            <Form />
          </div>
          <div className="box-register">
            <h3 className="text-register">
              Não consegue iniciar sessão?
              <button className="btn-register">Criar Conta</button>
            </h3>
          </div>
        </div>
        <div className="modal-img">
          <img src={backClient} alt="background client" />
          <button id="btn-close" className="close" onClick={() => onClose()}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
