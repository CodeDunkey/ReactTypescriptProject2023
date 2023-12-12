import { useState } from 'react'
import MainPicture from './MainPicture/MainPicture'
import ProductViewTop from './ProductViewTop/ProductViewTop'
import './Main.scss'




const infoBarTop = <div className='infoBarTop'> 
Gratis Fragt |
1-3 dages produktionstid |
Salg Til Private, erhverv og ean |
En del af mm-vision
</div>



const seriesOption = <div className='seriesOptionWrapper'>
    <button className='optionButton'>vision gaming serien</button>
    <button className='optionButton'>Corsair hydro serien</button>
    <button className='optionButton'>Bærebare computere</button>
</div>

const banner = <div className='banner'>Udvalgte produkter</div>

const productViewbottom = <div className='productViewbottomWrapper'>
    <div className='productViewBottom'></div>
    <div className='productViewBottom'></div>
    <div className='productViewBottom'></div>
</div>

export default function Main(){
    return(
        <div className='main'>
            <MainPicture />
            {infoBarTop}
            <ProductViewTop />
            {seriesOption}
            {banner}
            {productViewbottom}
        </div>
    )
}