import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import {API2}  from "../Spinner/SpinnerRefresh"
import './Site.scss'
import React, { useState } from "react"
import { Product } from "../Server/Database/ProductList"
import { useCart } from "../../Hooks/useCart"
import { useProductList } from "../../Hooks/useProductList"
import { SpinnerLoadingIcon } from "../Spinner/Spinner"


export default function Site() {
    const { loadingCart, cart, addToCart, removeFromCart } = useCart();
    const { loading, products} = useProductList();
    return (
        <div className="siteWrapper">

            {loading && SpinnerLoadingIcon()} 
            <Header cart={cart} loadingCart={loadingCart}/>
            <Main cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} products={products}/>
            {/* <Footer /> */}
            {/* <API2 /> */}
        </div>
    )
}