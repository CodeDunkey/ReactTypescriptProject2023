import { useState } from 'react'
import MainPicture from './MainPicture/MainPicture'
import ProductViewTop from './ProductViewTop/ProductViewTop'
import InfoBar from './InfoBar/InfoBar'
import SeriesOption from './SeriesOption/SeriesOption'
import Banner from './Banner/Banner'
import ProductViewBottom from './ProductViewBottom/ProductViewBottom'

import './Main.scss'

export default function Main({setcart}: any, {cart}: any){
    return(
        <div className='main'>
            <MainPicture />
            <InfoBar />
            
            <ProductViewTop />
            <SeriesOption />
            <Banner />
            <ProductViewBottom setcart={setcart} cart={cart}/>
        </div>
    )
}