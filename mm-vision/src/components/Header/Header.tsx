import './Header.scss'
import MenuAndSearchBar from './Menu/MenuAndSearchBar'
import TextArea from './TextArea/TextArea'
import { Cart } from './HeaderCart/Cart'
import { CartLine } from '../../Data/ProductList'

export default function Header({cart}: {cart: CartLine[]}){
        return(
        <div className='headerWrapper'>
            <TextArea />
            <Cart cart={cart} />
            <MenuAndSearchBar />
        </div>
    )
}

// her skal CartTotalPrice renderes