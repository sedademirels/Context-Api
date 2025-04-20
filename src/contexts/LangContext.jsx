import {  createContext } from "react";

const langContext = createContext();

export const LangContextProvider = ({children}) => {
    return <LangContext.Provider value={"tr"}>{children}</LangContext.Provider>
}

export default LangContext;