import { Product } from "../Types/Types";
export const HandleStock = (item: Product) => {
    let stockAmount: number = item.stock;
    const noStock = !stockAmount || stockAmount < 0;
    if(noStock){return <div style={{color: 'red'}}> Ikke flere på lager. {item.deliveryTime}´s leveringstid.</div>}
    return<div style={{color: 'green'}}> Lagerstatus. {stockAmount} på lager.</div>
}