import { ContextExample } from './FunctionContextComponentExample'

import './ContextApp.scss'
import { useState, createContext } from 'react'
import { ThemeProvider } from './ThemeContextProviderWhiteGrey'
// import { CartContextProvider } from '../useContext/CartContextProvider'


// import { ThemeContext } from './CreateContext'

export const ContextApp = () => {

    return (
        <>
            <ThemeProvider>
                {/* <CartContextProvider> */}

                    <div className='contextAppWrapper'>
                        <div className='squareOne'>Square one <ContextExample /></div>
                        <div className='squareTwo'>Square two <ContextExample /></div>
                        <div className='squareThree'>Square three <ContextExample /></div>
                        <div className='squareFour'>Square four <ContextExample /></div>
                    </div>

                    <div className='contextAppWrapper'>
                        {/* <div className='squareOne'>Square one <ContextExample2 /></div>
                        <div className='squareTwo'>Square two <ContextExample2 /></div>
                        <div className='squareThree'>Square three <ContextExample2 /></div>
                    <div className='squareFour'>Square four <ContextExample2 /></div> */}
                    </div>
                
                {/* </CartContextProvider> */}
            </ThemeProvider>
        </>
    )
}