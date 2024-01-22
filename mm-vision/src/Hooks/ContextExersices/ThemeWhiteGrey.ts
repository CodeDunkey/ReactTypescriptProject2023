import { useState } from "react";

export const useThemeWhiteGrey = () => {
    const [theme, setTheme] = useState("white");

    const changeTheme = ()=> {
        if (theme === "white"){
    
            setTheme("darkgrey")
        }
        if (theme === "darkgrey"){
    
            setTheme("white")
        }
    }
    return { theme, changeTheme }
}