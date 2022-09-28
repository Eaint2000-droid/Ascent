import "./Home.css"
import React from 'react'
import Transactions from './Transactions'
import Cards from './Cards'
import CardCarousel from "./CardCarousel"
import BannerCarousel from "./BannerCarousel"
import Banner from "./Banner"

function Home() {

  return (
    <div className="MainDash bg-primary w-full overflow-hidden">
      
      <div className="leftSide">
        <h1 className="font-poppins font-semibold ss:text-[32px] text-[52px] text-black ss:leading-[90.8px] leading-[75px] ml-12">Dashboard</h1>
        <h4 className="font-semibold ml-12">Welcome back Fabiana!</h4>
          <CardCarousel/>    
      </div>

      <div className="rightSide">
        {/* <BannerCarousel/> */}
        <Banner/>
        <Cards/>
        <Transactions/>
      </div>

      
    </div>
  );
}

export default Home
