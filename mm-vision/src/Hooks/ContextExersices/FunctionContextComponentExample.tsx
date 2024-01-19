import { useContext } from "react";
// import { ThemeContext } from "./useContextHook";
// Her skal useContext bruges


// useCart Hook

export const ContextExample = () => {

    // let {theme, setTheme} = useContext(ThemeContext)
    
    // console.log("theme", theme)
    
    
    
    
    return (
        <>
            {/* current theme {theme} */}
            {/* <button onClick={changeTheme} style={{backgroundColor: theme}}>Change Theme</button> */}
        </>
    )
}

// export const useCart = () => {
//     const [loadingCart, setLoadingCart] = useState<boolean>(false) // useContext
//     const [cart, setCart] = useState<CartLine[]>([]); // useContext
    
//     const addToCart = async (item: Product) => {
//         setLoadingCart(true)
//         let cartLine = await clientApi.addToCart(item);
//         setLoadingCart(false);
//         setCart(cartLine);
//     }
    
//     const removeFromCart =  async (product: Product) => {
//         setLoadingCart(true);
//         let cart = await clientApi.removeFromCart(product);
//         setLoadingCart(false);
//         setCart(cart);
//     }

//     return {
//         loadingCart: loadingCart,
//         cart,
//         addToCart,
//         removeFromCart
//     }
// }