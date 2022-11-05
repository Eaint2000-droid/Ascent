import "./Home.css"
import React, {useEffect, useState} from 'react'
import Transactions from './Transactions'
import Cards from './Cards'
import CardCarousel from "./CardCarousel"
import BannerCarousel from "./BannerCarousel"
import Banner from "./Banner"
import Navbar from '../Navbar'

function Home() {
  const [currentCampaign, setCurrentCampaign] = useState([]);
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let currentdate = new Date(`${year}`,`${month}`,`${day}`);
  var user = localStorage.getItem('email');
  var username = localStorage.getItem('CognitoIdentityServiceProvider.4eid9s9q0khtii45ko77b20ijt.LastAuthUser');


 const sendRequest = async () => {
         const response = await fetch('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/v1', {
            headers: {
              "Authorization" : localStorage.getItem("jwtToken")
            }
          })
        return response.json();
}

  //Load data
 useEffect(() => {
    sendRequest().then(data=>{
      const initialData = JSON.parse(data);
        for (let i = 0; i< initialData.length;i++) {
        var startdate_and_time = initialData[i][3].split(' '); 
        var startdate_time_split = startdate_and_time[0].split('-');

        var enddate_and_time = initialData[i][4].split(' ');
        var enddate_time_split = enddate_and_time[0].split('-');

        var campaign_date =  new Date(startdate_time_split[0], startdate_time_split[1]-1, startdate_time_split[2]); 
        var end_campaign_date = new Date(enddate_time_split[0],enddate_time_split[1]-1,enddate_time_split[2]);
      
          if (campaign_date.getMonth() <= currentdate.getMonth() 
            && campaign_date.getDate() <= currentdate.getDate() 
            && campaign_date.getFullYear() <= currentdate.getFullYear() 
            && currentdate.getMonth() <= end_campaign_date.getMonth()
            && currentdate.getDate() <= end_campaign_date.getDate()
            && currentdate.getFullYear() <= end_campaign_date.getFullYear()) {
              console.log("Campaign is ongoing now!");
              setCurrentCampaign(initialData[i]);
              console.log(currentCampaign);
        }
      }
    })
},[])

  return (
    <div className="MainDash bg-primary w-full overflow-hidden">
      <Navbar/>
      <div className="DashboardInfo">
      <div className="leftSide">
        <h1 className="font-poppins font-semibold ss:text-[32px] text-[52px] text-black ss:leading-[90.8px] leading-[75px] text-start ml-12">Welcome back {username}!</h1>
        <h4 className="font-semibold ml-12">View your points activities and latest transactions</h4>
          <CardCarousel user={user}/>    
      </div>

      <div className="rightSide">
        <Banner campaign={currentCampaign}/>
        <Cards user={user}/>
        <Transactions user={user}/>
      </div>
      </div>
      
    </div>
  );
}

export default Home
