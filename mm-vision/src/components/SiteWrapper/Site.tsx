import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import './Site.scss'
import { useState } from "react"
import { Product } from "../../Data/ProductList"

const initialState: Product = { id: 1, type: "a", model: "a", description: "a", picture: "a", price: 1}
const initialState2: Product = { id: 2, type: "a", model: "a", description: "a", picture: "a", price: 2}

export default function Site(){

   
 const [cart, setCart] = useState<Product[]>([initialState]);
console.log("cart: ", cart);
    return(
        <div className="siteWrapper">
            <Header cart={cart} />
            <Main setcart={setCart} cart={cart}/>
            <Footer />
        </div>
    )
}