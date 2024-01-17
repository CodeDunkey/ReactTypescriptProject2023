import { useEffect, useState } from 'react';
import './MainPictureSlide.scss'
import { Picture } from '../../../Types/Types';

export default function MainPictureShow({pictures}: {pictures: Picture[]}) {

    const [pictureNumber, setPictureNumber] = useState(1)

    const showSliderPicturesArray = pictures.slice(0,3);

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
       
        const pictures =
            <div className='mySlides'>
                <div className='imageWrapper'>
                    <div className='image currentPicture' key={findCurrentPicture?.id} style={{ backgroundImage: `url(${findCurrentPicture?.src})`, backgroundSize: findCurrentPicture?.pictureSize }}></div>
                    <div className='image nextPicture' key={findNextPicture?.id} style={{ backgroundImage: `url(${findNextPicture?.src})`, backgroundSize: findNextPicture?.pictureSize }}></div>
                </div>
                <div className='sliderDotWrapper'>
                    <div className='sliderDot' onClick={() => currentSlide(1)}></div>
                    <div className='sliderDot' onClick={() => currentSlide(2)}></div>
                    <div className='sliderDot' onClick={() => currentSlide(3)}></div>
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