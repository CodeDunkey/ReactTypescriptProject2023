import { useContext } from "react";
import { Product } from "../Types/Types";
import clientApi from "../Utilities/ClientApi";
import { CartContext } from "./useContext/CartContextProvider";

// useCart Hook
export const useCart = () => {

    // henter information fra de states der er i CartContextProvider
    // der bliver givet i "site"
    const cartContext = useContext(CartContext);
     
    const addToCart = async (item: Product) => {
        cartContext.setLoadingCart(true)
        let cartLine = await clientApi.addToCart(item);
        cartContext.setLoadingCart(false);
        cartContext.setCart(cartLine);
    }
    
    const removeFromCart =  async (product: Product) => {
        cartContext.setLoadingCart(true);
        let cart = await clientApi.removeFromCart(product);
        cartContext.setLoadingCart(false);
        cartContext.setCart(cart);
    }

    return {
        loadingCart: cartContext.loadingCart,
        cart: cartContext.cart,
        addToCart,
        removeFromCart
    }
}