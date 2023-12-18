import React, { useState } from "react"
import { Product } from "../../Data/ProductList";

export function CartInventory({ cart }: any) {
    let mapOf;

    let isCart = (cart: Product[]): cart is Product[] => {return ((cart as Product[]).map((item) => item.model) !== undefined);}

    if(isCart(cart)) {mapOf = cart.map((item) => item.model)}

    return (
        <div><h3 style={{color: "red"}}>Cart: {mapOf}</h3></div>
    )
}