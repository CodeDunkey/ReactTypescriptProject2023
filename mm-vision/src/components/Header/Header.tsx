import './Header.scss'
import MenuAndSearchBar from './Menu/MenuAndSearchBar'
import TextArea from './TextArea/TextArea'
import { HeaderCart } from './HeaderCart/HeaderCart'
import { CartLine } from '../../Types/Types'

export default function Header(){
        return(
        <div className='headerWrapper'>
            <TextArea />
            <HeaderCart />
            <MenuAndSearchBar />
        </div>
    )
}