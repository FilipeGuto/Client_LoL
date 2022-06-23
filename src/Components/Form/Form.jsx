import React, { useState } from "react";
import Context from "../../Context/Context";
import { useContext } from "react";

import { Box, TextField } from "@mui/material";

import "./form.css";

import iconGoogle from "../../Images/LOL/iconGoogle.png";

export default function FormUser() {
  const { setNewUser } = useContext(Context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitButton = (name, password) => {
    const data = {
      name,
      password,
    };

    setNewUser(data);
    document.getElementById('btn-close').click();
  };

  return (
    <Box className="box-form">
      <TextField
        size="small"
        className="input-name"
        label="NOME DE USUÁRIO"
        variant="filled"
        InputProps={{ disableUnderline: true }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        size="small"
        className="input-password"
        label="SENHA"
        variant="filled"
        InputProps={{ disableUnderline: true }}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <span className="box-btn">
        <button disabled className="btn-face">
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button disabled className="btn-google">
          <img className="img-icon-google" src={iconGoogle} alt="" />
        </button>
        <button disabled className="btn-apple">
          <i className="fa-brands fa-apple"></i>
        </button>
      </span>
      <div className="input-checkbox">
        <label className="input-label-checkbox">
          <input type="checkbox" />
          Manter login
        </label>
      </div>
      {name === "" || password === "" ? (
        <button className="btn-login" disabled>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      ) : (
        <button
          type="button"
          className="btn-active-login"
          onClick={() => handleSubmitButton(name, password)}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      )}
    </Box>
  );
}
