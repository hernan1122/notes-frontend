import React, { useState, createContext } from 'react';

export const AppContext = createContext()

function AppProvider({ children }) {

  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
