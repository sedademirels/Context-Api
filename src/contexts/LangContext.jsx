import React, { createContext, useState } from 'react';

const LangContext = createContext(); // büyük harf

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
