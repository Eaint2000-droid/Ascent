import React, {useState, useEffect} from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "./Card";

const Cards = ({user}) => {
  const [initialData, setInitialData] = useState([]);
  const [totalMiles, setTotalMiles] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalCashback, setTotalCashback] = useState(0);


   const sendRequest = async () => {
         const response = await fetch('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/users-cards/'+ user,
         {
              headers: {
                "Authorization" : localStorage.getItem("jwtToken")
            }
         });

         return response.json();
}

  //Load data
 useEffect(() => {
    
     sendRequest().then(data=>{
       const initialData = data.users_cards;
      var total_miles = 0;
      var total_points = 0;
      var total_cashback = 0;
      for (let i = 0; i< initialData.length;i++) {
        if (initialData[i].reward_type === "miles") {
          total_miles += initialData[i].reward_amount;
        } else if (initialData[i].reward_type === "points") {
        total_points += initialData[i].reward_amount;
        } else if (initialData[i].reward_type === "cashback") {
        total_cashback += initialData[i].reward_amount;
        }
      }
      setTotalMiles(total_miles);
      setTotalPoints(total_points);
      setTotalCashback(total_cashback);

     });
     
},[initialData])
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        if (card.title === "Total Points") {
          card.value = totalPoints;
      
        } else if (card.title === "Total Cashback") {
          card.value = '$' + totalCashback ;
       
        } else if (card.title === "Total Miles") {
          card.value = totalMiles;
         
        }
       
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;