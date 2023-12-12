import '../Main.scss'
import { productList } from '../../../Data/ProductList'
export default function ProductViewBottom() {
    const listSlice = productList.slice(3, 6)
    console.log(listSlice);
    const product = listSlice.map((item) => {
        return(<div className='productViewBottom'>{item.type}--{item.model}--</div>)
    })

    return (
        <div className='productViewbottomWrapper'> {product}</div>
    )
}