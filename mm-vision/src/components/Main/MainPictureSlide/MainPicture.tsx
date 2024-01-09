import './MainPictureSlide.scss'
export default function MainPicture() {
    let slideIndex: number = 1;
    showSlides(slideIndex);
    
    // function plusSlides(n: number) {
    //     showSlides(slideIndex += n);
    // }
    
    function currentSlide(n: number) {
        console.log(n)
        showSlides(slideIndex = n);
    }
    
    function showSlides(n: number) {
        let i;
        
        let slides = document.getElementsByClassName("mySlides");
        
        console.log("slides: ", slides.length)
        let dots = document.getElementsByClassName("sliderDot");
        console.log("dots: ", dots.item)
        if (n > slides.length) { slideIndex = 1 }
        
        if (n < 1) { slideIndex = slides.length }
        
        for (i = 0; i < slides.length; i++) {
            // console.log(slides)
            slides[i].className = "block";
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        // slides[slideIndex - 1].className = "block";
        
        // dots[slideIndex - 1].className += " active";
    }




    return (
        <div className="mainPictureSlideContainer">
            <div className='mySlides'>
                <img className='imageOne'></img>
            </div>
            <div className='mySlides'>
                <img className='imageTwo'></img>
            </div>
            <div className='mySlides'>
                <img className='imageThree'></img>
            </div>
            <div className='sliderDotWrapper'>
                <div className='sliderDot' onClick={()=>currentSlide(1)}></div>
                <div className='sliderDot' onClick={()=>currentSlide(2)}></div>
                <div className='sliderDot' onClick={()=>currentSlide(3)}></div>
            </div>

        </div>
    )
}
