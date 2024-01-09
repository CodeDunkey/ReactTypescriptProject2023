import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import {API2}  from "../APISimulate/ClassTimer"
import './Site.scss'
import React, { useState } from "react"
import { Product } from "../../Data/ProductList"
import { useCart } from "../../Hooks/use-cart"

export default function Site() {
    const { cart, addToCart, removeFromCart } = useCart();
    // console.log("totalCart", cart)
    return (
        <div className="siteWrapper">
            {/* <Header cart={cart} /> */}
            <Main cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
            {/* <Footer /> */}
            {/* <API2 /> */}
        </div>
    )
}