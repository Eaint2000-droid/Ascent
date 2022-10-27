import "./Banner.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../assets/womanwithcash.png";
import React from "react";

export default function Banner({campaign}) {
    var rewardType;
    var cardProgram;
    console.log(campaign)
  
    switch(campaign[2]){
      case 1:
        cardProgram = "SCIS Shopping Card";
        rewardType = campaign[7] + "Points";
        break;
      case 2: 
        cardProgram = "SCIS Premium Miles Card";
        rewardType = campaign[7] + "Miles";
        break;
      case 3: 
        cardProgram = "SCIS Platinum Miles Card";
        rewardType = campaign[7] + "Miles";
        break;
      case 4: 
        cardProgram = "SCIS Freedom Card";
        rewardType = campaign[7] + "% Cashback";
        break;
      default:
        cardProgram = "";
    }
    return(
        <div className="banner">
            {campaign.length !== 0? (
                <div>
                <Box sx={{ width: '100%', maxWidth: 1000, marginTop:4, marginLeft:7 }}>
                <Typography variant="h4" color="black" fontWeight= 'bold' style={{width:650}}>
                    Earn {rewardType} with a <span style={{color:"#1386b5"}}>{cardProgram}</span>
                </Typography>
                <Typography variant="h5" color="black" gutterBottom style={{marginTop:12}}>
                    for a minimum spending of <span style={{fontWeight :"bold"}}>${campaign[6]}</span> with {campaign[1]}!
                </Typography>
            </Box>
            <img src={'https://cs301-campaign-image-upload.s3.ap-southeast-1.amazonaws.com/' + campaign[5]} alt="" className="bannerImg"/>
                </div>
            ): (
                <div>
                <Box sx={{ width: '100%', maxWidth: 1000, marginTop:7, marginLeft:7 }}>
                <Typography variant="h4" color="black" fontWeight= 'bold' style={{width:650}}>
                    Keep a lookout for upcoming campaigns!</Typography>
            </Box>
            <img src={bannerImg} alt="" className="bannerImg"/>
                </div>
            )
            }
            </div>
      
    )
}