import { useContext, createContext } from "react";
import { useThemeWhiteGrey } from "./ThemeWhiteGrey";

const ThemeContext = createContext("") // <{theme: string, setTheme: (theme: string) => void}>({theme: "white", setTheme: () => {}})
export const useTheme = () => {
    return useContext(ThemeContext)
}

const ThemeUpdateContext = createContext(()=>{})
export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({ children }: any) => {
    
    const theme = useThemeWhiteGrey();
    return(
        <ThemeContext.Provider value={theme.theme}>
            <ThemeUpdateContext.Provider value={theme.changeTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}