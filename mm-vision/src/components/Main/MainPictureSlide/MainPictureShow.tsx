import { useEffect, useState } from 'react';
import './MainPictureSlide.scss'
import { Picture } from '../../../Types/Types';

export default function MainPictureShow({ pictures }: { pictures: Picture[] }) {

    const [pictureNumber, setPictureNumber] = useState(1)

    const showSliderPicturesArray = pictures.slice(0, 4);
    
    function currentSlide(para: number) {
        setPictureNumber(para)
    }


    const find = (pictureNumber: number) => {
        if (pictureNumber < showSliderPicturesArray.length) {
            return pictureNumber + 1
        }
        return 1
    }

    function showSlides() {
        const findCurrentPicture = showSliderPicturesArray.find(findPict => findPict.id === pictureNumber)
      
        const findNextPicture = showSliderPicturesArray.find(findPict => findPict.id === find(pictureNumber))
        
        const makeDotsPrPicture = showSliderPicturesArray.map((e, index) => {
            
            if(index + 1 === findCurrentPicture?.id){
               
                return <div className='sliderDot active' onClick={() => currentSlide(index + 1)}></div>
            }
            return <div className='sliderDot' onClick={() => currentSlide(index + 1)}></div>
        })
        const pictures =
            <div className='mySlides'>
                <div className='imageWrapper'>
                    <div className='image currentPicture' key={findCurrentPicture?.id} style={{ backgroundImage: `url(${findCurrentPicture?.src})`, backgroundSize: findCurrentPicture?.pictureSize }}></div>
                    <div className='image nextPicture' key={findNextPicture?.id} style={{ backgroundImage: `url(${findNextPicture?.src})`, backgroundSize: findNextPicture?.pictureSize }}></div>
                </div>
                <div className='sliderDotWrapper'>
                    {makeDotsPrPicture}
                </div>
            </div>;

        return pictures
    }
    showSlides()

    useEffect(() => {
        const interval = setInterval(() => {
            setPictureNumber((pictureNumber) => {
                if (pictureNumber < showSliderPicturesArray.length) {
                    return pictureNumber + 1
                }
                return 1
            })
        }, 2950);
        return () => clearInterval(interval)
    })

    return (
        <div className="mainPictureSlideContainer">
            {showSlides()}
        </div>
    )
}