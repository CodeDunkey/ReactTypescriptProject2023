import React, { useState } from "react"
import { Product } from "../../Data/ProductList";

export function CartInventory({ cart }: any) {
    
    let mapOf: Array<string> = [];
    
    console.log("typeOf mapOf: ", mapOf)

    let isCart = (cart: Product[]): cart is Product[] => {
        return ((cart as Product[]).map((item) => item.model) !== undefined);}

    if(isCart(cart)) {
        cart.map((item) => mapOf.push(item.model))
    }

    return (
        <div style={{color: "red"}}>Cart: {mapOf.length}</div>
    )
}
