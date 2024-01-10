import { useEffect, useState } from 'react';
import './MainPictureSlide.scss'
import { ShowSliderPicturesArray } from './MainSliderPictures';

// let slideIndex: number;
export default function MainPicture() {

    const [pictureNumber, setPictureNumber] = useState(1)
    // function plusSlides(n: number) {
    //     showSlides(slideIndex += n);
    // }
    // showSlides2()

    function currentSlide(para: number) {
        setPictureNumber(para)        
    }

    function showSlides() {
        // showSlides2()
        // let i;
        
        // let slides = document.getElementsByClassName("mySlides");
        
        // let dots = document.getElementsByClassName("sliderDot");
        // if (n > slides.length) { slideIndex = 1 }
        
        // if (n < 1) { slideIndex = slides.length }
        
        
        // for (i = 0; i < slides.length; i++) {
            //     console.log(slides)
            //     slides[i].className = "none";
            // }
            
            // for (i = 0; i < dots.length; i++) {
                //     // dots[i].className = dots[i].className.replace(" active", "");
                // }
                
                // slides[slideIndex - 1].className = "block";
                
                // dots[slideIndex - 1].className += " active";
                // Change image every 2 seconds
                const findPicture = ShowSliderPicturesArray.find(findPict => findPict.id === pictureNumber)
                return (
                    <div className='mySlides'>
                <img className='image' key={findPicture?.id} style={{ backgroundImage: `url(${findPicture?.src})`, backgroundSize: findPicture?.pictureSize }}></img>
                <div className='sliderDotWrapper'>
                    <div className='sliderDot' onClick={() => currentSlide(1)}></div>
                    <div className='sliderDot' onClick={() => currentSlide(2)}></div>
                    <div className='sliderDot' onClick={() => currentSlide(3)}></div>
                    {/* <button onClick={()=> {showSlides2()}}>timer</button> */}
                </div>
            </div>
        )
    }
    showSlides()
    
    const slideEffect = useEffect(()=> {
        const interval = setInterval(()=> {
            setPictureNumber((pictureNumber) => {
                if(pictureNumber < ShowSliderPicturesArray.length){
                    return pictureNumber + 1
                }
                return 1
            })

        },3000);
        console.log("interval", interval)
        return() => clearInterval(interval)
    })
    
    // function showSlides2() {
    //     // para: boolean
    //     let slideIndex2: number = 1;
        
    //     slideIndex2 = pictureNumber;
        
    //     const timeout = setTimeout((() => {
    //         console.log("timer works")
    //         setPictureNumber(slideIndex2)}
    //         ), 2000);

    //     // slideIndex2++;
        
    //     if (slideIndex2 > ShowSliderPicturesArray.length) { slideIndex2 = 1 }

    //     // if(para){
    //     //     clearTimeout(timeout)
    //     //     console.log("clearTimeout", clearTimeout)
    //     // }
    //     // console.log("timeout", timeout)
    //     // clearTimeout(timeout)
    //     // let i;
    //     // let slides = document.getElementsByClassName("mySlides");
    //     // let dots = document.getElementsByClassName("dot");
    //     // for (i = 0; i < slides.length; i++) {
    //     //     slides[i].style.display = "none";
    //     // }
    //     // slideIndex++;
    //     // if (slideIndex > slides.length) { slideIndex = 1 }
    //     // for (i = 0; i < dots.length; i++) {
    //     //     dots[i].className = dots[i].className.replace(" active", "");
    //     // }
    //     // slides[slideIndex - 1].style.display = "block";
    //     // dots[slideIndex - 1].className += " active";
    //     // setTimeout(showSlides, 8000); // Change image every 2 seconds
    // }





    // console.log("slidePictures", slidePictures)

    return (
        <div className="mainPictureSlideContainer">
            {showSlides()}
        </div>
    )
}

//
//
// 