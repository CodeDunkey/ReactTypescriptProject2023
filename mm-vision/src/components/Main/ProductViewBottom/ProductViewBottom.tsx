import '../Main.scss'
import {Button, Color} from '../../Button/Button';
import { Product, CartLine, SetFunction, FindAndRemoveFromCartFun} from '../../Server/Database/ProductList';
import { HandleStock } from '../../../Utilities/ViewStockOfProduct';

export default function ProductViewBottom({cart, addToCart, removeFromCart, products}: {cart: CartLine[], addToCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun, products: Product[]}){
       
    


    const listSlice = products.slice(3, 6)
 
    // render classen 
 
    // let showRemoveButtonAfterReservation = () => {
        
        // }
        
        const product = listSlice.map((item: Product) => {
            
            // const api = webAPIhandleBuy;
            
            
            let findCart = cart.find(isItem => isItem.itemId == item.id)
            let show: boolean = false;
            if (findCart && findCart.quantity){
                show = true;
            }

            // her skal være en boolean for om item antal er 0 i cart eller ej 
            
            // if(buyButtonPushed){
            //     show = true;
            // }
            
            return(
                <div className='productViewBottom'>
                {item.type}___{item.model}___Price: {item.price}
                {HandleStock(item)}
                <Button backgroundColor={Color.GREEN} text="Køb" onClick={() => {addToCart(item)}}/>
                {show && <Button backgroundColor={Color.RED} text="fjern" onClick={()=> {removeFromCart(item)}}/>}
            </div>
        )
    })
    return (<div className='productViewbottomWrapper'> {product}</div>)
}

// webAPIhandleBuy.AddToCart({cart, item, setCart});
// <Button backgroundColor='red' text='something'/>
