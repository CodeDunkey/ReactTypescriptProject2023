import { Product, Picture } from '../../../Types/Types';
import { onHoverText } from './OnHoverText';
import './ProductViewTop.scss'

export default function ProductViewTop({products, pictures}: {products: Product[], pictures: Picture[]}) {
    const picturesViewTop: Picture[] = [];
    
      
    const HoverText = onHoverText.map((item, index) => {
        return(<div className='onHoverText'>{item.text}</div>)        
    })
    
    const picturesArray = pictures.map((pict, index)=>{
        if(pict.id === 9 || pict.id === 7|| pict.id == 5){
            picturesViewTop.push(pict)
        }
    })
    console.log("picturesViewTop: ", picturesViewTop)
    const showPictures = picturesViewTop.map((element,index)=>{
        return <div className='productViewTopPicture' style={{backgroundImage: `url(${element.src})`, backgroundSize: element.pictureSize}}>{HoverText[index]}</div>
    })


    return (
        <div className='productViewTopWrapper'>{showPictures}</div>
    )
}