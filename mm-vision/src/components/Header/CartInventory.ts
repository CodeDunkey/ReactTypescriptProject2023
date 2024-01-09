import React, { useState } from "react"
import { Product, CartLine } from "../../Data/ProductList";

export function CartInventory({ cart }: any) {
    let mapOf: Array<number> = [];
    // let quantity: Array<number> = [];
    let cartQauntity: number = 0;
    let isCart = (cart: CartLine[]): cart is CartLine[] => {
        return ((cart as CartLine[]).map((item) => item.quantity) !== undefined);
    }
    
    if (isCart(cart)) {
        cart.map((item) => mapOf.push(item.quantity))
        // cart.map((item) => quantity.push(item.quantity))
    }
    for(let i = 0; i < mapOf.length; i++){
        cartQauntity += mapOf[i]
    }
    if(cartQauntity > 0)return cartQauntity
}
