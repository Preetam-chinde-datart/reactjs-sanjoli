export default function Slideshow(){

    // let slideIndex = 0;
    // showSlides();

    // function showSlides() {
    // let i;
    // let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";  
    // }
    // slideIndex++;
    // if (slideIndex > slides.length) {slideIndex = 1}    
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // setTimeout(showSlides, 4000); // Change image every 4 seconds
    // }
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }

    return(
        <>
        <section>
            <div className="slideshow-container">
            <div className="mySlides fade">
                <img src={require("../images/slide1.png")} style={{ width: "100%" }} alt="Slide" />
            </div>
            <div className="mySlides fade">
                <img src={require("../images/slide2.png")} style={{ width: "100%" }} alt="Slide" />
            </div>
            <div className="mySlides fade">
                <img src={require("../images/slide3.png")} style={{ width: "100%" }} alt="Slide" />
            </div>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
            <span className="dot" onclick="currentSlide(1)" />
            <span className="dot" onclick="currentSlide(2)" />
            <span className="dot" onclick="currentSlide(3)" />
            </div>
        </section>
        </>
    )
}