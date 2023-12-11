import './Header.scss'

const headerTitle = <div className='headerWrapperTitle'>
    <div className='headerTitle1'>WWW.MM-Gaming.dk</div>
    <div className='headerTitle2'>Kontakt os på tlf. 70221744</div>
</div>

const headerCart = <div className='headerWrapperCart'>Cart</div>

const headerMenu = <div className='headerWrapperMenu'>
    <nav className='menu'>
        <div className='itemWrapper'>
            <div className='menuItem'>STATIONÆRE</div>|
            <div className='menuItem'>STATIONÆRE</div>|
            <div className='menuItem'>STATIONÆRE</div>|
            <div className='menuItem'>STATIONÆRE</div>|
            <div className='menuItem'>STATIONÆRE</div>
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