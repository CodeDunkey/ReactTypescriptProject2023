import React, { useState } from "react"
import { Product, CartLine } from "../../Data/ProductList";

export function CartInventory({ cart }: any) {
    let mapOf: Array<number> = [];
    
    let isCart = (cart: CartLine[]): cart is CartLine[] => {
        return ((cart as CartLine[]).map((item) => item.quantity) !== undefined);}
    
    if(isCart(cart)) {
        cart.map((item) => mapOf.push(item.quantity))
    }
    console.log("mapOf.length", mapOf)
    return mapOf.length
}
