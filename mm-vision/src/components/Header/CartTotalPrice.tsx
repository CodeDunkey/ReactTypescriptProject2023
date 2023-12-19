import React, { useState } from "react"
import { Product } from "../../Data/ProductList";

export function CartTotalPrice({ cart }: { cart: Product[]}) {
    
    const price = cart.map((item) => {console.log("price: ", item.price)})
    

    return (
        <div  style={{color: "red"}}>Total Price: {}</div>
    )
}