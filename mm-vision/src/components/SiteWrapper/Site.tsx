import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import './Site.scss'
import React, { useState } from "react"
import { Product } from "../../Data/ProductList"
import { useCart } from "../../Hooks/useState"

const initialState: Product = { id: 1, type: "test-pc", model: "lightning", description: "gamer pc", picture: "a", price: 1 }
const initialState2: Product = { id: 2, type: "test-laptop", model: "dev", description: "working pc", picture: "a", price: 2 }
// type SetFunction = ReturnType<typeof setCart>

export default function Site() {
    const [cart, setCart] = useCart();
    
    

    console.log("typewof setCart in site: ", typeof setCart);
    
    cart.map((item) => {
    console.log("mapped cart in site, showing id: ", item)});
    
    // if(cart.length < 1){

    //     setCart([...cart, initialState2])
    // }
    console.log("cart in site after setCart: ", cart);    

    return (
        <div className="siteWrapper">
            <Header cart={cart} />
            <Main cart={cart} setcart={setCart}/> 
            <Footer />
        </div>
    )
}

//