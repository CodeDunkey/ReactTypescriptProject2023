import React, { useState } from "react"
import { Product } from "../Data/ProductList";

export function CartInventory({ cart }: Product[]) cart is Product[] {

    // const showCart = cart;
    // const test = " test";
    // // console.log("showCart in CartInventory", typeof showCart, showCart);
    // // console.log("cart in CartInventory", cart);
    // if(showCart.length >= 1){
    //     return(
    //     <div ><h3 style={{color: "red"}}>{showCart.length}</h3></div>)
    // }

    return(
        <div><h3 style={{color: "red"}}>Cart will go here{test}</h3></div>
        )
    }