import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [logo, setLogo] = useState(false);
  const [logged, setLogged] = useState(false);
  const [newUser, setNewUser] = useState({});

  const providerValue = {
    logo,
    newUser,
    logged,
    setLogged,
    setLogo,
    setNewUser,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>);
};

export default Provider;