import { useState } from 'react'
import MainPicture from './MainPicture/MainPicture'
import ProductViewTop from './ProductViewTop/ProductViewTop'
import InfoBar from './InfoBar/InfoBar'
import SeriesOption from './SeriesOption/SeriesOption'
import Banner from './Banner/Banner'
import ProductViewBottom from './ProductViewBottom/ProductViewBottom'
// import { CartType, SetCartType } from '../../Hooks/useState'
import './Main.scss'
import { Product, SetFunction, FindAndRemoveFromCartFun} from '../../Data/ProductList'

export default function Main({cart, setCart, removeFromCart}: {cart:Product[], setCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){

    // CartType SetCartType
    //    console.log("setcart in main: ", typeof setcart)
   
    return(
        <div className='main'>
            <MainPicture />
            <InfoBar />
            
            <ProductViewTop />
            <SeriesOption />
            <Banner />
            <ProductViewBottom  cart={cart} setCart={setCart} removeFromCart={removeFromCart}/>
        </div>
    )
}

// setcart={setcart} cart={cart}
// {setcart}: any, {cart}: any