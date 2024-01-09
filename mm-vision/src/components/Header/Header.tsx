import './Header.scss'
import Menu from './Menu/Menu'
import TextArea from '../TextArea/TextArea'
import { CartInventory } from './CartInventory'
import { CartTotalPrice } from './CartTotalPrice'
import { CartLine, Product } from '../../Data/ProductList'

export default function Header({cart}: {cart: CartLine[]}){
        return(
        <div className='headerWrapper'>
            <TextArea />
            <div className='headerWrapperCart'>
                {/* <div className='picture'></div> */}
                <div className='logoCartWrapper'>
                    <div className='logo'></div>
                    <div className='cartWrapper'>
                    <div style={{color: "red"}}>Cart: {CartInventory({cart})}</div> 
                    <div  style={{color: "red"}}>Total Price: {CartTotalPrice({cart})}</div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}

// her skal CartTotalPrice renderes