import { useEffect, useState } from "react";
import { Product, CartLine } from "../components/Server/Database/ProductList";
import clientApi from "../Utilities/ClientApi";

// useCart Hook
export const useCart = () => {
    const [loadingCart, setLoadingCart] = useState<boolean>(false)
    const [cart, setCart] = useState<CartLine[]>([]);
    
    // const theCart = clientApi.getCart();
    // console.log("theCart", theCart)
    const addToCart = async (item: Product) => {
        
        setLoadingCart(true)
        // let cartLine = await clientApi.addToCart(item);
        setLoadingCart(false);
        // setCart(cartLine);
    }
    
    const removeFromCart =  async (product: Product) => {
        setLoadingCart(true);
        // let cart = await clientApi.removeFromCart(product);
        setLoadingCart(false);
        // setCart(cart);
    }
    
    // console.log("loadingCart ", loadingCart)

    // getCart return add/remove

    return {
        loadingCart: loadingCart,
        cart,
        addToCart,
        removeFromCart
    }
}