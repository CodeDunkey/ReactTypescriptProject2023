import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { useCart } from "../../Hooks/useCart"
import { useProductList } from "../../Hooks/useProductList"
import { usePictures } from "../../Hooks/usePictureList"
import { SpinnerLoadingIcon } from "../Spinner/Spinner"
import './Site.scss'


export default function Site() {
    const { loadingCart, cart, addToCart, removeFromCart } = useCart();
    const { loading, products} = useProductList();
    const { loadingPicture, pictures} = usePictures();
    return (
        <div className="siteWrapper">
            {loading && SpinnerLoadingIcon()} 
            <Header cart={cart} loadingCart={loadingCart}/>
            <Main cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} products={products} pictures={pictures}/>
            <Footer />
        </div>
    )
}