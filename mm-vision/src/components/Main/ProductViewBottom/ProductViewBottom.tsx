import '../Main.scss'
import Button from '../../Button/Button';
import {CartInventory} from '../../Header/CartInventory';
import { FunctionExpression } from 'typescript';
import { productList, Product, SetFunction, FindAndRemoveFromCartFun} from '../../../Data/ProductList'
import { webAPIhandleBuy } from '../../APISimulate/ClassTimer';
import { HandleStock } from '../../../Data/HandleStock';

export default function ProductViewBottom({cart, setCart, removeFromCart}: {cart: Product[], setCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){
    
    const listSlice = productList.slice(3, 6)
    
    
    
    
    // let showRemoveButtonAfterReservation = () => {
        
        // }
        
        const product = listSlice.map((item: Product) => {
            let buyButtonPushedAmountOfTimes = 0;
            let show: boolean = false;
            if(buyButtonPushedAmountOfTimes > 0){
                show = true;
            }
            console.log("buyButtonPushedAmountOfTimes", buyButtonPushedAmountOfTimes)
            
        return(
            <div className='productViewBottom'>
                {item.type}___{item.model}___Price: {item.price}
                {HandleStock(item)}
                <Button backgroundColor='green' text="Køb" on_click={() => {webAPIhandleBuy.AddToCart({cart, item, setCart}); buyButtonPushedAmountOfTimes++;}}/>
                {show && <Button backgroundColor='red' text="fjern" on_click={()=> webAPIhandleBuy.SubtractFromCart({cart, item, removeFromCart})}/>}
                {/* <Button backgroundColor='red' text='something'/> */}
            </div>
        )
    })
    return (<div className='productViewbottomWrapper'> {product}</div>)
}

