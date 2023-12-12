import './Header.scss'
import Menu from './Menu/Menu'
import TextArea from '../TextArea/TextArea'


const headerCart = <div className='headerWrapperCart'>
    <div className='picture'></div>

    <div className='logoCartWrapper'>
        <div className='logo'></div>
        <div className='cartWrapper'>
            <div className='cart'></div>
            <div className='fullPrice'></div>
        </div>
    </div>
</div>

export default function Header(){
    return(
        <div className='headerWrapper'>
            <TextArea />
            {headerCart}
            <Menu />
        </div>
    )
}