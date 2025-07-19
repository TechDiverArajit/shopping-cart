import { createContext, useContext, useState } from "react";

const themeContext = createContext();
const ThemeContextProvider = ({children})=>{
    const [Theme , setDarkTheme] = useState("light");
    const toggleTheme=()=>{
        setDarkTheme((p)=>(p==="light"?"dark":"light"))
    }
    return(
        <themeContext.Provider value={{Theme , toggleTheme}}>
            <div className={Theme}>{children}</div>
        </themeContext.Provider>
    )
}
const useDarkTheme = ()=> useContext(themeContext);
export {useDarkTheme,ThemeContextProvider}