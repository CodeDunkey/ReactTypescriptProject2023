// Done

import { productList } from "../Server/Database/ProductList";
import { CartLine } from "../../Types/Types";

export function cartTotalPrice({ cart }: { cart: CartLine[] }) {

    let totalPrice: Array<number> = []
    let showPrice: number = 0;

    totalPrice = [];
    cart.map(item => {
        productList.forEach(prod => {
            if (prod.id === item.itemId) {
                totalPrice.push(prod.price * item.quantity)
            }
        })
    })

    if (totalPrice) {
        for (let i = 0; i < totalPrice.length; i++) {
            showPrice += totalPrice[i]
        }
    }
    // console.log(
    //     new Intl.NumberFormat('dk-DK', { style: 'currency', currency: 'DK' }).format(
    //         showPrice,
    //     ),
    // );
    // console.log(
    //     new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    //         showPrice,
    //     ),
    // );
    // if(showPrice > 0)
    return showPrice
}
