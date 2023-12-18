import { useState } from 'react'
import MainPicture from './MainPicture/MainPicture'
import ProductViewTop from './ProductViewTop/ProductViewTop'
import InfoBar from './InfoBar/InfoBar'
import SeriesOption from './SeriesOption/SeriesOption'
import Banner from './Banner/Banner'
import ProductViewBottom from './ProductViewBottom/ProductViewBottom'
import { CartType, SetCartType } from '../../Hooks/useState'
import './Main.scss'

export default function Main({cart, setCart}: {cart: CartType, setCart: SetCartType}){
//    console.log("setcart in main: ", typeof setcart)
   
    return(
        <div className='main'>
            <MainPicture />
            <InfoBar />
            
            <ProductViewTop />
            <SeriesOption />
            <Banner />
            <ProductViewBottom  cart={cart} setcart={setCart}/>
        </div>
    )
}

// setcart={setcart} cart={cart}
// {setcart}: any, {cart}: any