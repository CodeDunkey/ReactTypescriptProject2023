import './Header.scss'

const headerTitle = <div className='headerWrapperTitle'>
    <div className='headerTitle1'>WWW.MM-Gaming.dk</div>
    <div className='headerTitle2'>Kontakt os på tlf. 70221744</div>
</div>

const headerCart = <div className='headerWrapperCart'>
    <div className='picture'></div>

    <div className='headerWrapperCart'>
    <div className='cartWrapper'>
        <div className='cart'></div>
        <div className='fullPrice'></div>
    </div>
    </div>
</div>

const headerMenu = <div className='headerWrapperMenu'>
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

export default function Header(){
    return(
        <div className='headerWrapper'>
            {headerTitle}
            {headerCart}
            {headerMenu}
        </div>
    )
}