import { Product } from "./ProductList";
export const HandleStock = (item: Product) => {
    const stockAmountCheck: number = item.stock;
    console.log("stockAmountCheck: ", item.stock)
    let stockAmount: any = item.stock;
    console.log("item.stock: ", item.stock)
    const noStock = !stockAmount || stockAmount < 0;
    if(noStock){return <div style={{color: 'red'}}> Ikke flere på lager. {stockAmount = item.deliveryTime}´s leveringstid.</div>}
    return<div style={{color: 'green'}}> Lagerstatus. {stockAmount} på lager.</div>
}