import './MainPictureSlide.scss'
import { ShowSliderPicturesArray } from './MainSliderPictures';

export default function MainPicture() {
    let slideIndex: number = 1;


    // // function plusSlides(n: number) {
    // //     showSlides(slideIndex += n);
    // // }
    // function currentSlide(n: number) {
    //     showSlides(slideIndex = n);
    // }
    
    function showSlides(n: number) {
        let i;
        
        console.log(n)
        let slides = document.getElementsByClassName("mySlides");

        let dots = document.getElementsByClassName("sliderDot");
        // if (n > slides.length) { slideIndex = 1 }
        
        if (n < 1) { slideIndex = slides.length }

        const findPict = slides
        
        for (i = 0; i < slides.length; i++) {
            // console.log(slides)
            slides[i].className = "block";
        }

        for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            
            slides[slideIndex - 1].className = "block";
            
            dots[slideIndex - 1].className += " active";
    }
    
    showSlides(slideIndex);
    
    const slidePictures = ShowSliderPicturesArray.map(pict => { 
        return(
            <div className='mySlides'>
                <img className='image' key={pict.id} style={{backgroundImage: `url(${pict.src})`, backgroundSize: pict.pictureSize }}></img>
            </div>
        )})
    
    
    // console.log("slidePictures", slidePictures)
    
    return (
        <div className="mainPictureSlideContainer">
            {slidePictures}
            <div className='sliderDotWrapper'>
                <div className='sliderDot' ></div>
                <div className='sliderDot' ></div>
                <div className='sliderDot' ></div>
            </div>

        </div>
    )
}

// onClick={() => currentSlide(1)}
// onClick={() => currentSlide(2)}
// onClick={() => currentSlide(3)}