// Done
import '../Main.scss'
import { Color } from '../../../Types/Types';
import { Button } from '../../Button/Button';
import { Product, CartLine, SetFunction, FindAndRemoveFromCartFun } from '../../../Types/Types';
import { HandleStock } from '../../../Utilities/ViewStockOfProduct';
import { ContextExample } from '../../../Hooks/useContextComponentExample';
export default function ProductViewBottom({ cart, addToCart, removeFromCart, products }: { cart: CartLine[], addToCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun, products: Product[] }) {
    
    const listSlice = products.slice(3, 6)

    const product = listSlice.map((item: Product) => {

        let findCart = cart.find(isItem => isItem.itemId == item.id)
        let show: boolean = false;
        if (findCart && findCart.quantity) {
            show = true;
        }
        return (
            <div className='productViewBottom'>
                {item.type}___{item.model}___Price: {item.price}
                {HandleStock(item)}
                <Button backgroundColor={Color.GREEN} text="Køb" onClick={() => { addToCart(item) }} />
                {show && <Button backgroundColor={Color.RED} text="fjern" onClick={() => { removeFromCart(item) }} />}
                <ContextExample />
            </div>
        )
    })
    return (<div className='productViewbottomWrapper'> {product}</div>)
}
