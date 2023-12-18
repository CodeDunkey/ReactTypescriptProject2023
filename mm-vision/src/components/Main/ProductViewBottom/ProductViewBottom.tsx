import '../Main.scss'
import { productList, Product} from '../../../Data/ProductList'
import Button from '../../Button/Button';
import {CartInventory} from '../../Header/CartInventory';
import { FunctionExpression } from 'typescript';
// import { SetFunction } from '../../SiteWrapper/Site';
import { CartType, SetCartType } from '../../../Hooks/useState';


export default function ProductViewBottom({cart, setCart}: {cart: CartType, setCart: SetCartType}){
    
    // let fullCart: Product[];
    // let isFullCart = (cart: Product[]): cart is Product[] => {return ((cart as Product[]).map((item) => item.model) !== undefined);}
    // if(isFullCart(cart)) {fullCart = cart}
    
    console.log("setCart in ProductViewBotton: ", setCart)
    
    
    
    // let isFunction = (setCart: function): setCart is function => {return ((setCart as function) !== undefined);}
    // if(isFunction(setCart)) {fullCart = setCart}
    
    const listSlice = productList.slice(3, 6)
    // console.log(listSlice);
    const product = listSlice.map((item) => {
        return(
            <div className='productViewBottom'>{item.type}--{item.model}-- Price: {item.price}--
                <Button backgroundColor='green' text="Køb" on_click={()=> setCart([...cart, item])}/>
                <Button backgroundColor='red' text="fjern" on_click={()=> console.log("Removing from cart")}/>
            </div>
        )

    })
    
    return (
        <div className='productViewbottomWrapper'> {product}</div>
    )
}

// console.log("a")
//console.log("Add ", item.id," to cart")
// setcart([item])
// {setcart}: any, {cart}: any