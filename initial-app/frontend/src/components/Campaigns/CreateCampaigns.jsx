import React from 'react'
import CampaignForm from './CampaignForm'
import './CreateCampaigns.css'
import robot from '../../assets/shopping3.jpg'

export default function Campaigns() {
  return (
    <div className="campaigns">
      <div className="left">
      
      <img src={robot} alt="" />
      <h1 className="font-poppins font-semibold ss:text-[30px] text-[52px] 
      text-center text-black ss:leading-[45.8px] leading-[75px] w-full" 
      style={{width:650, marginTop:40, marginLeft:40}}>Drive spend on your card programs in exchange for perks for your customers.</h1>
      
      </div>
      <div className="right">
      <CampaignForm/>
      </div>
    </div>
  )
}
