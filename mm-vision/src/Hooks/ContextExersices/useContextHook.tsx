import { useState, createContext } from "react";


export const ThemeContext = createContext<{theme: string, setTheme: (theme: string) => void}>({theme: "white", setTheme: () => {}})


export const ThemeProvider = ({ children }: any) => {
    
    const [theme, setTheme] = useState("white");
    
    const changeTheme = ()=> {
        if (theme === "white"){
    
            setTheme("darkgrey")
        }
        if (theme === "darkgrey"){
    
            setTheme("white")
        }
        if (theme === "blue"){
    
            setTheme("white")
        }
    }
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}