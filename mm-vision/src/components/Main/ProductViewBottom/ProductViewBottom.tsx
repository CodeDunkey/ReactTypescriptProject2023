import '../Main.scss'
import Button from '../../Button/Button';
import {CartInventory} from '../../Header/CartInventory';
import { FunctionExpression } from 'typescript';
import { productList, Product, SetFunction, FindAndRemoveFromCartFun} from '../../../Data/ProductList'
import { webAPIhandleBuy } from '../../APISimulate/ClassTimer';
import { HandleStock } from '../../../Data/HandleStock';
import { SimulateServerCall } from '../../APISimulate/ClassTimer';

export default function ProductViewBottom({cart, setCart, removeFromCart}: {cart: Product[], setCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){
       
    
    const listSlice = productList.slice(3, 6)
 
    // let showRemoveButtonAfterReservation = () => {
        
        // }
        
        const product = listSlice.map((item: Product) => {
            
            const api = webAPIhandleBuy;
            
            console.log("cart hold: ", cart)
            let findCart = cart.find(isItem => isItem.individualRandomNr == item.individualRandomNr)
            let show: boolean = false;
            
            if (findCart){
                show = true;
            }
            // her skal være en boolean for om item antal er 0 i cart eller ej 
            // if(buyButtonPushedAmountOfTimes > 0){
            //     show = true;
            // }
            
        return(
            <div className='productViewBottom'>
                {item.type}___{item.model}___Price: {item.price}
                {HandleStock(item)}
                <SimulateServerCall />
                <Button backgroundColor='green' text="Køb" on_click={() => webAPIhandleBuy.handleBuyButtonClick({cart, item, setCart}) }/>
                {show && <Button backgroundColor='red' text="fjern" on_click={()=> webAPIhandleBuy.SubtractFromCart({cart, item, removeFromCart})}/>}
                {webAPIhandleBuy.render()}
                {/*  */}
                {/*  */}
            </div>
        )
    })
    return (<div className='productViewbottomWrapper'> {product}</div>)
}

// webAPIhandleBuy.AddToCart({cart, item, setCart});
// <Button backgroundColor='red' text='something'/>
