import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [newUser, setNewUser] = useState({});

  const providerValue = {
    newUser,
    setNewUser,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>);
};

export default Provider;