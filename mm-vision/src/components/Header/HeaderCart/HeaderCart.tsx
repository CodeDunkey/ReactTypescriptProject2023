// Done
import { CartLine } from '../../../Types/Types'
import { CartShow } from '../../Cart/CartShow'
import { SpinnerLoadingIconSmall } from '../../Spinner/Spinner'
import './HeaderCart.scss'
export const HeaderCart = () => {
    return (
        <div className='headerWrapperCart'>
            <div className='pictureWrapper'>
                <div className='picture'></div>
            </div>
            <div className='logoCartWrapper'>
                <div className='logoCartInner'>
                    <div className='logo'></div>
                    <CartShow />
                    {/* {loadingCart && SpinnerLoadingIconSmall()} */}
                </div>
            </div>
        </div>
    )
}