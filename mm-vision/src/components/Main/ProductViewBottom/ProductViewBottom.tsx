// Done
import './ProductViewBottom.scss'
import { Color } from '../../../Types/Types';
import { Button } from '../../Button/Button';
import { Product, CartLine, SetFunction, FindAndRemoveFromCartFun, Picture } from '../../../Types/Types';
import { HandleStock } from '../../ShowStock/ShowStockOfProduct';
import { useCart } from '../../../Hooks/useCart';

// import { useCartContext, useAddToCart, useRemoveFromCart } from '../../../Hooks/useContext/CartContextProvider';

export default function ProductViewBottom({ products, pictures }: { products: Product[], pictures: Picture[] }) {
    const { cart, addToCart, removeFromCart } = useCart();

    const picturesSlice = pictures.slice(13, 16)
    const showPictures = picturesSlice.map((pict) => {
        const textLi = pict.ListItems.map((Li) => {
            return <li>{Li.li}</li>
        })
        console.log(picturesSlice)
        return (
            <>
                <div className='showPicture' style={{ backgroundImage: `url(${pict.src})`, backgroundSize: pict.pictureSize }}></div>
                <div className='textWrapper'>
                    <h2 className='textHeader'>{pict.Header}</h2>
                    <ul className='textUL'>{textLi}</ul>
                </div>
            </>
        )
    })
    console.log(picturesSlice)
    const listSlice = products.slice(3, 6)

    const product = listSlice.map((item: Product, index) => {

        let findCart = cart.find(isItem => isItem.itemId == item.id)
        console.log(index)
        let show: boolean = false;
        if (findCart && findCart.quantity) {
            show = true;
        }
        return (
            <div className='productViewBottom'>
                <div className='placePicture'>{showPictures[index]}</div>
                <div className='buttonAndPriceWrapper'>
                    <div className='showPrice'>{item.price}</div>
                    <div className='button'><Button backgroundColor={Color.GREEN} text="Køb" onClick={() => { addToCart(item) }} /></div>
                    <div className='button'>{show && <Button backgroundColor={Color.RED} text="fjern" onClick={() => { removeFromCart(item) }} />}</div>
                    <div className='showStock'>{HandleStock(item)}</div>
                </div>
            </div>
        )
    })
    return (<div className='productViewbottomWrapper'> {product}</div>)
}
