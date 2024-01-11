import './HeaderCart.scss'
import { cartInventory } from './CartInventory'
import { cartTotalPrice } from './CartTotalPrice'
import { CartLine } from '../../../Data/ProductList'
export const Cart = ({ cart }: { cart: CartLine[] }) => {
    return (
        <div className='headerWrapperCart'>
            <div className='picture'></div>
            <div className='logoCartWrapper'>
                <div className='logo'></div>
                <div className='cartWrapper'>
                    <div >Cart: {cartInventory({ cart })}</div>
                    <div >Total Price: {cartTotalPrice({ cart })}</div>
                </div>
            </div>
        </div>
    )
}