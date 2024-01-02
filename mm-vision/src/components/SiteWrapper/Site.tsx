import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { Test } from "../Classes/ClassTimer"
import './Site.scss'
import React, { useState } from "react"
import { Product } from "../../Data/ProductList"




export default function Site() {
    const [cart, setCart] = useState<Product[]>([]);

    const removeFromCart = (param: number) => {
        const findInCart = cart.find(findRandomNr => findRandomNr.individualRandomNr === param)
        
        if (findInCart !== undefined) {
            const cartIndex = cart.indexOf(findInCart);
            const cartSlice1 = cart.slice(0, cartIndex);
            const cartSlice2 = cart.slice(cartIndex + 1, cart.length);
            const concatCart = cartSlice1.concat(cartSlice2);
            setCart(concatCart);
        }
    }

    

    console.log("cart after remove: ",cart)

    return (
        <div className="siteWrapper">
            <Header cart={cart} />
            <Main cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
            <Footer />
            <Test />
        </div>
    )
}