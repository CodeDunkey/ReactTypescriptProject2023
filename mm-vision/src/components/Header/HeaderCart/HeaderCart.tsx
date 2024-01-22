// Done
import { CartLine } from '../../../Types/Types'
import { CartShow } from '../../Cart/CartShow'
import { SpinnerLoadingIconSmall } from '../../Spinner/Spinner'
import { useCart } from '../../../Hooks/useCart'
import './HeaderCart.scss'
export const HeaderCart = () => {
    const { loadingCart} = useCart();
    return (
        <div className='headerWrapperCart'>
            <div className='pictureWrapper'>
                <div className='picture'></div>
            </div>
            <div className='logoCartWrapper'>
                <div className='logoCartInner'>
                    <div className='logo'></div>
                    <CartShow />
                    {loadingCart && SpinnerLoadingIconSmall()}
                </div>
            </div>
        </div>
    )
}