import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import './Site.scss'
import { useState } from "react"
import { Product } from "../../Data/ProductList"

const initialState: Product = { id: 1, type: "a", model: "a", description: "a", picture: "a", price: 1 }
const initialState2: Product = { id: 2, type: "a", model: "a", description: "a", picture: "a", price: 2 }

export default function Site() {
    const [cart, setCart] = useState<Product[]>([]);

    console.log("typewof cart in site: ", typeof cart, cart);
    
    cart.map((item) => {
    console.log("mapped cart in site, showing id: ", item)});
    
    // if(cart.length < 1){

    //     setCart([...cart, initialState2])
    // }
    console.log("cart in site after setCart: ", cart);    

    return (
        <div className="siteWrapper">
            <Header cart={cart} />
            <Main /> 
            <Footer />
        </div>
    )
}

// setcart={setCart} cart={cart}