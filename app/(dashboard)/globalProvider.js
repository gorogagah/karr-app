"use client"

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export default function GlobalProvider({ children }){
    const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

    return (
        <GlobalContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </GlobalContext.Provider>
    );
}
  
export const useGlobalContext = () => useContext(GlobalContext);