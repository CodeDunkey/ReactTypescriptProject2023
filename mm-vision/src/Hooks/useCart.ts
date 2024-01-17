import { useState } from "react";
import { Product, CartLine } from "../Types/Types";
import clientApi from "../Utilities/ClientApi";

// useCart Hook
export const useCart = () => {
    const [loadingCart, setLoadingCart] = useState<boolean>(false)
    const [cart, setCart] = useState<CartLine[]>([]);
    
    const addToCart = async (item: Product) => {
        setLoadingCart(true)
        let cartLine = await clientApi.addToCart(item);
        setLoadingCart(false);
        setCart(cartLine);
    }
    
    const removeFromCart =  async (product: Product) => {
        setLoadingCart(true);
        let cart = await clientApi.removeFromCart(product);
        setLoadingCart(false);
        setCart(cart);
    }

    return {
        loadingCart: loadingCart,
        cart,
        addToCart,
        removeFromCart
    }
}