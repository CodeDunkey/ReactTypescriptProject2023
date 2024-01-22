import { useTheme, useThemeUpdate } from "./ThemeContextProviderWhiteGrey";
// Her skal useContext bruges
// useCart Hook
export const ContextExample = () => {

    return (
        <>
            <button onClick={useThemeUpdate()} style={{backgroundColor: useTheme()}}>Change Theme</button>
        </>
    )
}
