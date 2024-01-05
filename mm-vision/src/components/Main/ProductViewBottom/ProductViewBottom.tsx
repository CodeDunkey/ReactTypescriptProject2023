import '../Main.scss'
import Button from '../../Button/Button';
import {CartInventory} from '../../Header/CartInventory';
import { FunctionExpression } from 'typescript';
import { productList, Product, SetFunction, FindAndRemoveFromCartFun} from '../../../Data/ProductList'
import { webAPIhandleBuy } from '../../APISimulate/ClassTimer';

export default function ProductViewBottom({cart, setCart, removeFromCart}: {cart: Product[], setCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){
    
    const listSlice = productList.slice(3, 6)
    
    const handleStock = (item: Product) => {
        let stockAmount: any = item.stock;
        const noStock = !stockAmount || stockAmount < 0;
        if(noStock){return <div style={{color: 'red'}}> Ikke flere på lager. {stockAmount = item.deliveryTime}´s leveringstid.</div>}
        return<div style={{color: 'green'}}> Lagerstatus. {stockAmount} på lager.</div>
    }


    const product = listSlice.map((item: Product) => {
        return(
            <div className='productViewBottom'>
                {item.type}___{item.model}___Price: {item.price}
                {handleStock(item)}
                {/* {!newLocal && (handleStock(item))}  */}
                {/* {newLocal && (handleNoStock(item))} */}
                <Button backgroundColor='green' text="Køb" on_click={() => webAPIhandleBuy.AddToCart({cart, item, setCart})}/>
                <Button backgroundColor='red' text="fjern" on_click={()=> webAPIhandleBuy.SubtractFromCart({cart, item, removeFromCart})}/>
            </div>
        )
    })
    return (<div className='productViewbottomWrapper'> {product}</div>)
}

