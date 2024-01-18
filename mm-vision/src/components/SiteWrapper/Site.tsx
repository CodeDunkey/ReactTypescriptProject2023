import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { useCart } from "../../Hooks/useCart"
import { useProductList } from "../../Hooks/useProductList"
import { usePictures } from "../../Hooks/usePictureList"
import { SpinnerLoadingIcon } from "../Spinner/Spinner"
import { ContextExample } from "../../Hooks/useContextComponentExample"
import { contextCreate } from "../../Hooks/useContextCreateContext"
import './Site.scss'


export default function Site() {
    const { loadingCart, cart, addToCart, removeFromCart } = useCart(); // skal slettes og der skal bruges useContext i stedet!
    const { loading, products} = useProductList();
    const { loadingPicture, pictures} = usePictures();
    return (
        <div className="siteWrapper">
            <contextCreate.Provider>
            {loading && SpinnerLoadingIcon()} 
            <ContextExample />
            <Header cart={cart} loadingCart={loadingCart}/>
            <Main cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} products={products} pictures={pictures}/>
            <Footer />
        </contextCreate.Provider>
        </div>
    )
}