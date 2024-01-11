import './Header.scss'
import Menu from './Menu/Menu'
import TextArea from './TextArea/TextArea'
import { Cart } from './HeaderCart/Cart'
import { CartLine } from '../../Data/ProductList'

export default function Header({cart}: {cart: CartLine[]}){
        return(
        <div className='headerWrapper'>
            <TextArea />
            <Cart cart={cart} />
            <Menu />
        </div>
    )
}

// her skal CartTotalPrice renderes