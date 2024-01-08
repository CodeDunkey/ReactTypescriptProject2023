import { useState } from "react";
import { Product, CartLine } from "../Data/ProductList";
import webApi from "../Data/WebApi";

export const useCart = () => {
    
    const [cart, setCart] = useState<CartLine[]>([]);

    const addToCart = (item: Product) => {
        
        let cartLine = webApi.addToCart(item);
        console.log("cartLine", cartLine)
        setCart(cartLine);
    }

    const removeFromCart = (productId: number) => {
        let cart = webApi.removeFromCart(productId);
        setCart(cart);
    }
    
    return {
        cart,
        addToCart,
        removeFromCart
    }
}