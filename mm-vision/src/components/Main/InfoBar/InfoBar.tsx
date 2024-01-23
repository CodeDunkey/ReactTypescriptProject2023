import { Picture } from '../../../Types/Types'
import { infoArray } from './InfoArray'
import './InfoBar.scss'

export default function InfoBar({pictures}: {pictures: Picture[]}) {
    const checkIcon = pictures.slice(9, 10);
    const picture = checkIcon.map((pict)=>{
        return <div className='checkIcon' style={{backgroundImage: `url(${pict.src})`, backgroundSize: pict.pictureSize}}></div>        
    })

    const infoText = infoArray.map((element, index)=>{
        return <div className='boxTextAndIconWrapper'>{picture}<div className='infoText'>{element.text}</div></div>
    })

    return (
        <div className='infoBarTopWrapper'>
            <div className='fullTextAndIconWrapper'>{infoText}</div>
            
        </div>
    )
}