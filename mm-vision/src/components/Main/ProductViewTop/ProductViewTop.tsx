// import './productPictures'
import '.././Main.scss'
import { productList } from '../../../Data/ProductList'
import { url } from 'inspector';
import pc from '../../../Assets/pc.png'

// console.log(pc)


export default function ProductViewTop() {

    const topView = productList.slice(0, 3);
    
    const product = topView.map((item) => {
        return(<div className='productViewTop'>{item.model}--{item.type}-- Price: {item.price}--</div>)
        
    })


    return (
        <div className='productViewTopWrapper'>{product}</div>
    )
}