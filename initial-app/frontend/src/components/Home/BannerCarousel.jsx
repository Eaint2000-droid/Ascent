import "./CardCarousel.css";
import { useState } from "react";
import Slider from "react-slick";
import cardOne from '../../assets/ccc.png'
import cardTwo from "../../assets/ccc.png";
import cardThree from "../../assets/ccc.png";
import cardFour from "../../assets/ccc.png";

const images = [cardOne, cardTwo, cardThree, cardFour];

export default function BannerCarousel() {

const [imageIndex, setImageIndex] = useState(0);

 const imageSliderSettings = {
	autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slideswToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (

    <div className="Carousel">

          <Slider {...imageSliderSettings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>

    </div>
    
  );
}