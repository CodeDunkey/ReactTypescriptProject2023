//Done
import ProductViewTop from './ProductViewTop/ProductViewTop'
import InfoBar from './InfoBar/InfoBar'
import SeriesOption from './SeriesOption/SeriesOption'
import Banner from './Banner/Banner'
import ProductViewBottom from './ProductViewBottom/ProductViewBottom'
import { Product, CartLine, SetFunction, FindAndRemoveFromCartFun, Picture} from '../../Types/Types'
import './Main.scss'
import MainPictureShow from './MainPictureSlide/MainPictureShow'

export default function Main({products, pictures}: {products: Product[], pictures: Picture[]}){
    return(
        <div className='main'>
            <MainPictureShow pictures={pictures}/>
            <InfoBar pictures={pictures}/>
            <ProductViewTop products={products}/>
            <SeriesOption />
            <Banner />
            <ProductViewBottom  products={products}/>
        </div>
    )
}