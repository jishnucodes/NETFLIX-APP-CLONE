import { createContext, useContext, useState } from "react";


const LogginContext = createContext();

export const LogginProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false);
    const [style, setStyle] = useState("");

    const updateLoggin = () => {
        setIsLogged(true);
        setStyle("none");
    }

    return (
        <LogginContext.Provider value={{isLogged, style, updateLoggin}}>
            {children}
        </LogginContext.Provider>
    );
}

export const useLogginContext = () => useContext(LogginContext)