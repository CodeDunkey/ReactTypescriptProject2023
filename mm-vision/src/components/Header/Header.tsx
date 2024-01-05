import './Header.scss'
import Menu from './Menu/Menu'
import TextArea from '../TextArea/TextArea'
import { CartInventory } from './CartInventory'
import { CartTotalPrice } from './CartTotalPrice'
import { Product } from '../../Data/ProductList'

export default function Header({cart}: any){
    
    console.log("cart in header", typeof cart)
    return(
        <div className='headerWrapper'>
            <TextArea />
            <div className='headerWrapperCart'>
                {/* <div className='picture'></div> */}

                <div className='logoCartWrapper'>
                    <div className='logo'></div>
                    <div className='cartWrapper'>
                    <CartInventory cart={cart} />
                    <CartTotalPrice cart={cart}/>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}