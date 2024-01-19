import './Cart.scss'
import { cartTotalPrice } from './CartTotalPrice'
import { cartInventory } from './CartInventory'
import { CartLine } from '../../Types/Types'

export const CartShow = ({ cart }: { cart: CartLine[] }) => {
    
    return (
        <div className='cartWrapper'>
            <div className='cartItem'>Indkøbskurv: <span className='cartData'>{cartInventory({ cart })}</span> varer</div>
            <div className='cartData'> {cartTotalPrice({ cart })} DKK</div>
        </div>
    )
}