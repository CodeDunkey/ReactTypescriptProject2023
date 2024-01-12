// Done

import './HeaderCart.scss'
import { cartInventory } from './CartInventory'
import { cartTotalPrice } from './CartTotalPrice'
import { CartLine } from '../../../Data/ProductList'
export const Cart = ({ cart }: { cart: CartLine[] }) => {
    return (
        <div className='headerWrapperCart'>
            <div className='pictureWrapper'>
                <div className='picture'></div>
            </div>
            <div className='logoCartWrapper'>
                <div className='logoCartInner'>

                <div className='logo'></div>
                <div className='cartWrapper'>
                    <div className='cartItem'>Indkøbskurv: <span className='cartData'>{cartInventory({ cart })}</span> varer</div>
                    <div className='cartData'> {cartTotalPrice({ cart })} DKK</div>
                </div>
                </div>
            </div>
        </div>
    )
}