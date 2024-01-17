import { useState } from "react";
import React from "react";
import { Product, CartLine } from "../Types/Types";
import clientApi from "../Utilities/ClientApi";

// Her skal useContext bruges
export const CartContext = React.createContext<any>("")

// useCart Hook

// export const ContextExample = () => {
//     const [ files, setFiles] = useState("")

//     return (<ContextExample value={files}>

//     </ContextExample>
//         )
// }

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