import React, { createContext, useState } from "react";
import { CartLine } from "../../Types/Types";

export type CartContextValue = {
    cart: CartLine[], 
    setCart: (cart: CartLine[]) => void,
    loadingCart: boolean,
    setLoadingCart: (loadingCart: boolean)=> void
};

export const CartContext = createContext<CartContextValue>({
    cart: [],
    setCart: () => console.log("dummy function"),
    loadingCart: false,
    setLoadingCart: ()=> {}
});

export const CartContextProvider = ({children}: { children: React.ReactElement }) => {
    // har skal state være og ikke i hooken da den vil få sin egen instans hvis det er i hooken.
    const [cart, setCart] = useState<CartLine[]>([]);
    // console.log("cart fra cartcontext: ", cart)
    // har skal state være og ikke i hooken da den vil få sin egen instans hvis det er i hooken.
    const [loadingCart, setLoadingCart] = useState<boolean>(false)

    return (
        <CartContext.Provider value={{cart, setCart, loadingCart, setLoadingCart}}>
            {children}
        </CartContext.Provider>
    )
}