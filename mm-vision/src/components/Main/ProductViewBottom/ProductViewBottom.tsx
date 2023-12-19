import '../Main.scss'
import Button from '../../Button/Button';
import {CartInventory} from '../../Header/CartInventory';
import { FunctionExpression } from 'typescript';
import { productList, Product, SetFunction, FindAndRemoveFromCartFun} from '../../../Data/ProductList'

export default function ProductViewBottom({cart, setCart, removeFromCart}: {cart: Product[], setCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){
    
    const listSlice = productList.slice(3, 6)
    
    const product = listSlice.map((item: Product) => {
        return(
            <div className='productViewBottom'>{item.type}--{item.model}-- Price: {item.price}--
                <Button backgroundColor='green' text="Køb" on_click={()=> setCart([...cart, item])}/>
                <Button backgroundColor='red' text="fjern" on_click={()=> removeFromCart(item.individualRandomNr)}/>
            </div>
        )

    })
    
    return (
        <div className='productViewbottomWrapper'> {product}</div>
    )
}