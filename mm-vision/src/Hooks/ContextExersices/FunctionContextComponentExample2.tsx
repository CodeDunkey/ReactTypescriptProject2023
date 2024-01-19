import { useState, useContext } from "react";
import { ThemeContext } from "./useContextHook";
// Her skal useContext bruges


// useCart Hook

export const ContextExample2 = () => {
    // const [theme, setTheme] = useState("white");

    let {theme, setTheme} = useContext(ThemeContext)
    console.log("theme", theme)
    
    const changeTheme = ()=> {
        setTheme("blue")
        if (theme === "blue"){

            setTheme("darkgrey")
        }
        if (theme === "darkgrey"){

            setTheme("blue")
        }
    }
    
    
    return (
        <>
            {/* <ThemeContext.Provider value={{ theme, setTheme }}> */}
            current theme {theme}
            <button onClick={changeTheme} style={{backgroundColor: theme, height: "20px", fontSize: "10px"}}>Change Theme</button>
            {/* </ThemeContext.Provider> */}
        </>
    )
}