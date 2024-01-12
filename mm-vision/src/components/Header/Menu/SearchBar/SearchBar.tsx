import './SearchBar.scss'
export const SearchBar = () => {

    return (
        <div className='searchWrapper'>
            <input className='searchInput' placeholder='Søg her'></input>
                <button className='searchButton'>SØG</button>
        </div>
    )
}