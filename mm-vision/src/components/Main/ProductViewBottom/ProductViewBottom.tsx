import '../Main.scss'
import Button from '../../Button/Button';
import {CartInventory} from '../../Header/CartInventory';
import { FunctionExpression } from 'typescript';
import { productList, Product, SetFunction, FindAndRemoveFromCartFun} from '../../../Data/ProductList'

export default function ProductViewBottom({cart, setCart, removeFromCart}: {cart: Product[], setCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){
    
    const listSlice = productList.slice(3, 6)
    
    const product = listSlice.map((item: Product) => {

        let stockAmount: any = item.stock
        if(!stockAmount || stockAmount < 0){
            stockAmount = item.deliveryTime
        }
        // const inStock = () => {
        //     if (!item.stock){
        //         item.deliveryTime
        //     }
        //     else item.stock
        // }
        return(
            <div className='productViewBottom'>{item.type}--{item.model}-- Price: {item.price}-- {stockAmount}
                <Button backgroundColor='green' text="Køb" on_click={() => { const updatedCart = [...cart, item]; item.stock--; setCart(updatedCart); }}/>
                <Button backgroundColor='red' text="fjern" on_click={()=> { const updatedRemoveFromCart = item.stock++; removeFromCart(item.individualRandomNr);}}/>
            </div>
        )

    })
    
    return (
        <div className='productViewbottomWrapper'> {product}</div>
    )
}