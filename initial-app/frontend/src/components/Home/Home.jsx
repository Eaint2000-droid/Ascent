import "./Home.css"
import React from 'react'
import Transactions from './Transactions'
import Cards from './Cards'
import CardCarousel from "./CardCarousel"
import BannerCarousel from "./BannerCarousel"
import Banner from "./Banner"
import Navbar from '../Navbar'

function Home() {

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
        <Banner/>
        <Cards/>
        <Transactions/>
      </div>
      </div>
      
    </div>
  );
}

export default Home
