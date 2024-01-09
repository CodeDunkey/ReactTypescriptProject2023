import { Product, productList, CartLine } from "../../Data/ProductList";

export function CartTotalPrice({ cart }: { cart: CartLine[]}) {
    
    let totalPrice: Array<number> = []
    let showPrice: number = 0;

    totalPrice = [];
    const cartId = cart.map(item => {
        productList.forEach(prod => {
            if(prod.id === item.itemId){
                totalPrice.push(prod.price*item.quantity)
            }
        })
    })
    
    if(totalPrice){
    for(let i = 0; i < totalPrice.length; i++){
        showPrice += totalPrice[i]
    }}
   
    if(showPrice > 0)return showPrice
}
