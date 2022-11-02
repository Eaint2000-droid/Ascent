import "./CardCarousel.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import cardOne from '../../assets/ccc.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const cardInfo = [['SCIS Freedom','**** **** **** 5678','SCIS Bank','Fabiana','03/23'],
                  ['SCIS Shopping','**** **** **** 1234','SCIS Bank','Fabiana','05/27'],
                  ['SCIS PlatinumMiles','**** **** **** 1234','SCIS Bank','Fabiana','03/25'],
                  ['SCIS PremiumMiles','**** **** **** 6878','SCIS Bank','Fabiana','03/22'],
                ];


export default function CardCarousel({user}) {
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

  const [initialData, setInitialData] = useState([]);

     //Load data
    useEffect(() => {
        const sendRequest = async () => {
        try{
            const response = await fetch('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/users-cards/'+ user);
            const responseData = await response.json();
            setInitialData(responseData.users_cards);
            // console.log(initialData);

        }catch(error){
            console.log(error.message);
        }
        }
        sendRequest();
        
  },[])
  
  const [imageIndex, setImageIndex] = useState(0);

  const imageSliderSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
          <Slider {...imageSliderSettings}>
            {console.log("here")}
            {initialData?.map((entry, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={cardOne} alt={""} />
               
              </div>
            ))}
          </Slider>

        <hr style={{ marginTop:'3rem', color: '#000000', maxWidth:'100%' }}/>

        <div>
          <h3 className="font-poppins font-semibold ss:text-[18px] text-[52px] text-black leading-[75px]">Card Information</h3>

          {/* Card Type, Card Number, Bank */}
          {initialData?.map((data, index) => {
            if (index === imageIndex) {
              var cardProgram;
              switch(data.card_name) {
                case "scis_shopping":
                  cardProgram = "SCIS Shopping Card";
                  break;
                case "scis_premiummiles":
                  cardProgram = "SCIS PremiumMiles Card";
                  break;
                case "scis_platinummiles":
                  cardProgram = "SCIS PlatinumMiles Card";
                  break;
                case "scis_freedom":
                  cardProgram = "SCIS Freedom Card";
                  break;
                default:
                 cardProgram = "";
              }
              return (
                <div className="infoRow">
                  <div className="firstCell">
                    <h4 className="infoText">SCIS Type</h4>
                    <h4 className="detailText">{cardProgram}</h4>
                  </div>
                  <div className="infoCell">
                    <h4 className="infoText">Card Number</h4>
                    <h4 className="detailText">{data.card_pan}</h4>
                  </div>
                  <div className="infoCell">
                <h4 className="infoText">Bank</h4>
                <h4 className="detailText">{data.bank_name}</h4>
              </div>
                </div>
              )
            }
            
            }
          )}
         

          {/* Name, Valid thru */}
          <div className="infoRow">
              <div className="firstCell">
                <h4 className="infoText">Name</h4>
                <h4 className="detailText">{localStorage.getItem('CognitoIdentityServiceProvider.4eid9s9q0khtii45ko77b20ijt.LastAuthUser')}</h4>
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
