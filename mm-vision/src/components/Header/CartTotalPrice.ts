import { Product, CartLine } from "../../Data/ProductList";

export function CartTotalPrice({ cart }: { cart: CartLine[]}) {
    const price = cart.map((item) => item.quantity)
    let totalPrice: number = 0; 
    
    for(let i = 0; i < price.length; i++){
        totalPrice += price[i];}

    return totalPrice
}