import './MenuAndSearchBar.scss'
import DropdownMenu from './DropdownMenu/DropdownMenu'

export default function MenuAndSearchBar() {
    return (
        <div className='headerWrapperMenu'>
            <DropdownMenu />
        </div>
    )
}