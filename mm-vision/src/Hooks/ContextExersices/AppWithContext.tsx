import { ContextExample } from './FunctionContextComponentExample'
import { ContextExample2 } from './FunctionContextComponentExample2'
import './ContextApp.scss'
import { useState, createContext } from 'react'
// import { ThemeContext } from './CreateContext'

export const ContextApp = () => {

    return (
        <>
            <div className='contextAppWrapper'>
                    <div className='squareOne'>Square one <ContextExample /></div>
                    <div className='squareTwo'>Square two <ContextExample /></div>
                    <div className='squareThree'>Square three <ContextExample /></div>
                    <div className='squareFour'>Square four <ContextExample /></div>
            </div>

            {/* <div className='contextAppWrapper'>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className='squareOne'>Square one <ContextExample2 /></div>
                </ThemeContext.Provider>

                <div className='squareTwo'>Square two <ContextExample2 /></div>

                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className='squareThree'>Square three <ContextExample2 /></div>
                    <div className='squareFour'>Square four <ContextExample2 /></div>
                </ThemeContext.Provider>
            </div> */}

        </>
    )
}