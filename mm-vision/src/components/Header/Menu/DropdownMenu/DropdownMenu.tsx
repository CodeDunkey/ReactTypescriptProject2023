import './DropdownMenu.scss'
import { SearchBar } from '../SearchBar/SearchBar'
export default function DropdownMenu() {
    return (
        <nav className='menu'>
            <div className='itemWrapper'>
                <div className='menuItem'>STATIONÆRE</div>|
                <div className='menuItem'>BÆRBARE</div>|
                <div className='menuItem'>HARDWARE</div>|
                <div className='menuItem'>TILBEHØR</div>|
                <div className='menuItem'>SOFTWARE</div>
            </div>
            <SearchBar />
        </nav>
    )
}

