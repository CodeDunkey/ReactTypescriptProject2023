// Done

import './HeaderCart.scss'
import { CartLine } from '../../Server/Database/ProductList'
import { CartShow } from '../../Cart/CartShow'
import { SpinnerLoadingIconSmall } from '../../Spinner/Spinner'
export const HeaderCart = ({ cart, loadingCart }: { cart: CartLine[], loadingCart: boolean }) => {
    return (
        <div className='headerWrapperCart'>
            <div className='pictureWrapper'>
                <div className='picture'></div>
            </div>
            <div className='logoCartWrapper'>
                <div className='logoCartInner'>
                    <div className='logo'></div>
                    <CartShow cart={cart} />
                    {loadingCart && SpinnerLoadingIconSmall()}
                </div>
            </div>
        </div>
    )
}