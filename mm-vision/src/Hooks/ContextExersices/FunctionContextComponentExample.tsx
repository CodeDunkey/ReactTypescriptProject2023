import { useTheme, useThemeUpdate } from "./ThemeContextProviderWhiteGrey";
// import { useCartContext } from "../useContext/CartContextProvider";
// Her skal useContext bruges
// useCart Hook
export const ContextExample = () => {

    // console.log(useCartContext())

    return (
        <>
            {/* Cart {useCartContext()} */}
            <button onClick={useThemeUpdate()} style={{backgroundColor: useTheme()}}>Change Theme</button>
        </>
    )
}
