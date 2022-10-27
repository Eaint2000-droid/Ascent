import "./Home.css"
import React, {useEffect, useState} from 'react'
import Transactions from './Transactions'
import Cards from './Cards'
import CardCarousel from "./CardCarousel"
import BannerCarousel from "./BannerCarousel"
import Banner from "./Banner"
import Navbar from '../Navbar'

function Home() {
  const [initialData, setInitialData] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState([]);
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let currentdate = new Date(`${year}`,`${month}`,`${day}`)



  //Load data
 useEffect(() => {
     const sendRequest = async () => {
     try{
         const response = await fetch('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/v1');
         const responseData = await response.json();
         setInitialData(JSON.parse(responseData));
         console.log(initialData);
         for (let i = 0; i< initialData.length;i++) {
           var date_time_split = initialData[i][3].split('-');
           var campaign_date =  new Date(date_time_split[0], date_time_split[1], date_time_split[2]); 

           if (campaign_date.getMonth() === currentdate.getMonth() && campaign_date.getDate() === currentdate.getDate() && campaign_date.getFullYear() === currentdate.getFullYear()) {
             console.log("Campaign starts now!");
             setCurrentCampaign(initialData[i]);
             console.log(currentCampaign);
           }
         }

     }catch(error){
         console.log(error.message);
     }
     }
     sendRequest();
     
},[initialData])
  return (
    <div className="MainDash bg-primary w-full overflow-hidden">
      <Navbar/>
      <div className="DashboardInfo">
      <div className="leftSide">
        <h1 className="font-poppins font-semibold ss:text-[32px] text-[52px] text-black ss:leading-[90.8px] leading-[75px] text-start ml-12">Welcome back Fabiana!</h1>
        <h4 className="font-semibold ml-12">View your points activities and latest transactions</h4>
          <CardCarousel/>    
      </div>

      <div className="rightSide">
        <Banner campaign={currentCampaign}/>
        <Cards/>
        <Transactions/>
      </div>
      </div>
      
    </div>
  );
}

export default Home
