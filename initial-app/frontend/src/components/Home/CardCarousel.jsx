import "./CardCarousel.css";
import { useState } from "react";
import Slider from "react-slick";
import cardOne from '../../assets/ccc.png'
import cardTwo from "../../assets/ccc.png";
import cardThree from "../../assets/ccc.png";
import cardFour from "../../assets/ccc.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

const images = [cardOne, cardTwo, cardThree, cardFour];
const cardInfo = [['SCIS Freedom','**** **** **** 5678','SCIS Bank','Fabiana','03/23'],
                  ['SCIS Shopping','**** **** **** 1234','SCIS Bank','Fabiana','05/27'],
                  ['SCIS PlatinumMiles','**** **** **** 1234','SCIS Bank','Fabiana','03/25'],
                  ['SCIS PremiumMiles','**** **** **** 6878','SCIS Bank','Fabiana','03/22'],
                ];

export default function CardCarousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const imageSliderSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

        <hr style={{ marginTop:'3rem', color: '#000000', maxWidth:'100%' }}/>

        <div>
          <h3 className="font-poppins font-semibold ss:text-[18px] text-[52px] text-black leading-[75px]">Card Information</h3>

          {/* Card Type, Card Number, Bank */}
          <div className="infoRow">
              <div className="firstCell">
                <h4 className="infoText">SCIS Type</h4>
                <h4 className="detailText">{cardInfo[imageIndex][0]}</h4>
              </div>
              <div className="infoCell">
                <h4 className="infoText">Card Number</h4>
                <h4 className="detailText">{cardInfo[imageIndex][1]}</h4>
              </div>
              <div className="infoCell">
                <h4 className="infoText">Bank</h4>
                <h4 className="detailText">{cardInfo[imageIndex][2]}</h4>
              </div>
          </div>

          {/* Name, Valid thru */}
          <div className="infoRow">
              <div className="firstCell">
                <h4 className="infoText">Name</h4>
                <h4 className="detailText">{cardInfo[imageIndex][3]}</h4>
              </div>
              <div className="infoCell">
                <h4 className="infoText">Valid thru</h4>
                <h4 className="detailText">{cardInfo[imageIndex][4]}</h4>
              </div>
          </div>
        </div>
    </div>
    
  );
}
