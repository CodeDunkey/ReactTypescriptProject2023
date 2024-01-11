import './HeaderMenu.scss'

export default function Menu() {
    return (
        <div className='headerWrapperMenu'>
            <nav className='menu'>
                <div className='itemWrapper'>
                    <div className='menuItem'>STATIONÆRE</div>|
                    <div className='menuItem'>BÆRBARE</div>|
                    <div className='menuItem'>HARDWARE</div>|
                    <div className='menuItem'>TILBEHØR</div>|
                    <div className='menuItem'>SOFTWARE</div>
                </div>

                <div className='searchWrapper'>
                    <div className='searchInput'> {/* placeholder='Søg her */}

                        <button className='searchButton'>Søg</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}