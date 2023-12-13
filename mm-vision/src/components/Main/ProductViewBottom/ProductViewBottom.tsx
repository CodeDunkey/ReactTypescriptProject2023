import '../Main.scss'
import { productList } from '../../../Data/ProductList'
import Button from '../../Button/Button';
import {CartInventory} from '../../../Hooks/CartInventory';

export default function ProductViewBottom({setcart}: any, {cart}: any) {
    
    const listSlice = productList.slice(3, 6)
    // console.log(listSlice);
    const product = listSlice.map((item) => {
        return(
            <div className='productViewBottom'>{item.type}--{item.model}-- Price: {item.price}--
                <Button backgroundColor='green' text="Køb" click={()=>setcart([...cart, item])}/>
                <Button backgroundColor='red' text="fjern" click={()=>  console.log("Removing from cart")}/>
            </div>
        )

    })
    
    return (
        <div className='productViewbottomWrapper'> {product}</div>
    )
}