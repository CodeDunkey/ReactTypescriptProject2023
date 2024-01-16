// import './productPictures'
import { Product } from '../../Server/Database/ProductList';
import '.././Main.scss'
import { url } from 'inspector';
import pc from '../../../Assets/pc.png'

// console.log(pc)


export default function ProductViewTop({products}: {products: Product[]}) {

    const topView = products.slice(0, 3);
    
    const product = topView.map((item) => {
        return(<div className='productViewTop'>{item.model}--{item.type}-- Price: {item.price}--</div>)
        
    })


    return (
        <div className='productViewTopWrapper'>{product}</div>
    )
}