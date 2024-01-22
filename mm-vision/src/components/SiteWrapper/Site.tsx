import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { useProductList } from "../../Hooks/useProductList"
import { usePictures } from "../../Hooks/usePictureList"
import { SpinnerLoadingIcon } from "../Spinner/Spinner"
import { CartContextProvider } from "../../Hooks/useContext/CartContextProvider"
import './Site.scss'


export default function Site() {

    const { loading, products } = useProductList();
    const { pictures } = usePictures();

    return (
        <CartContextProvider>
            <div className="siteWrapper">
                {loading && SpinnerLoadingIcon()}
                <Header />
                <Main pictures={pictures} products={products} />
                <Footer />
            </div>
        </CartContextProvider>
    )
}