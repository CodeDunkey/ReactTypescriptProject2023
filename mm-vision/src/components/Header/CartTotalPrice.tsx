import { Product } from "../../Data/ProductList";

export function CartTotalPrice({ cart }: { cart: Product[]}) {
    
    const price = cart.map((item) => item.price)
    console.log(price.length)
    let totalPrice: number = 0; 
    for(let i = 0; i < price.length; i++){
        totalPrice += price[i];}

    return (
        <div  style={{color: "red"}}>Total Price: {totalPrice}</div>
    )
}