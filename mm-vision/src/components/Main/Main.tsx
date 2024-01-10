import { useState } from 'react'
import MainPicture from './MainPictureSlide/MainPicture'
import ProductViewTop from './ProductViewTop/ProductViewTop'
import InfoBar from './InfoBar/InfoBar'
import SeriesOption from './SeriesOption/SeriesOption'
import Banner from './Banner/Banner'
import ProductViewBottom from './ProductViewBottom/ProductViewBottom'
// import { CartType, SetCartType } from '../../Hooks/useState'
import './Main.scss'
import { Product, CartLine, SetFunction, FindAndRemoveFromCartFun} from '../../Data/ProductList'

export default function Main({cart, addToCart, removeFromCart}: {cart:CartLine[], addToCart: SetFunction, removeFromCart: FindAndRemoveFromCartFun}){

    // CartType SetCartType
    //    console.log("setcart in main: ", typeof setcart)
   
    return(
        <div className='main'>
            <MainPicture />
            {/* <InfoBar /> */}
            {/* <ProductViewTop /> */}
            {/* <SeriesOption /> */}
            {/* <Banner /> */}
            <ProductViewBottom  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
        </div>
    )
}

// setcart={setcart} cart={cart}
// {setcart}: any, {cart}: any