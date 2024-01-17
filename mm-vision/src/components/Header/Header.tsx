import './Header.scss'
import MenuAndSearchBar from './Menu/MenuAndSearchBar'
import TextArea from './TextArea/TextArea'
import { HeaderCart } from './HeaderCart/HeaderCart'
import { CartLine } from '../../Types/Types'

export default function Header({cart, loadingCart}: {cart: CartLine[], loadingCart: boolean}){
        return(
        <div className='headerWrapper'>
            <TextArea />
            <HeaderCart cart={cart} loadingCart={loadingCart}/>
            <MenuAndSearchBar />
        </div>
    )
}