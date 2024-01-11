import { useEffect, useState } from 'react';
import './MainPictureSlide.scss'
import { ShowSliderPicturesArray } from './MainSliderPictures';

export default function MainPicture() {

    const [pictureNumber, setPictureNumber] = useState(1)


    function currentSlide(para: number) {
        setPictureNumber(para)
    }

    
    const find = (pictureNumber: number) => {
        if (pictureNumber < ShowSliderPicturesArray.length) {
            return pictureNumber + 1
        }
        return 1
    }
    
    function showSlides() {
        
        // dots[slideIndex - 1].className += " active";
        
        const findCurrentPicture = ShowSliderPicturesArray.find(findPict => findPict.id === pictureNumber)
        const findNextPicture = ShowSliderPicturesArray.find(findPict => findPict.id === find(pictureNumber))
        console.log("pictureNumber", pictureNumber)
        console.log("findNextPicturePictureNumber", find(pictureNumber))

        // console.log("findCurrentPicture", findCurrentPicture)
        // console.log("findNextPicture", findNextPicture)
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
                    {/* <button onClick={()=> {showSlides2()}}>timer</button> */}
                </div>
            </div>;

        // console.log("pictureNumber: ", pictureNumber)
        // console.log("findNextPicturePictureNumber(): ", findNextPicturePictureNumber())

        return pictures
    }
    showSlides()

    const slideEffect = useEffect(() => {
        const interval = setInterval(() => {
            setPictureNumber((pictureNumber) => {
                if (pictureNumber < ShowSliderPicturesArray.length) {
                    return pictureNumber + 1
                }
                return 1
            })
        }, 2950);

        console.log("interval", interval)
        return () => clearInterval(interval)
    })


    return (
        <div className="mainPictureSlideContainer">
            {showSlides()}
        </div>
    )
}