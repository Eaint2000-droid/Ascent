import "./Banner.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../assets/womanwithcash.png";

export default function Banner() {
    return(
        <div className="banner">
            {/* Need to stretch out the image here */}
            <Box sx={{ width: '100%', maxWidth: 1000, marginTop:4, marginLeft:7 }}>
                <Typography variant="h4" color="black" fontWeight= 'bold' style={{width:650}}>
                    Earn $300 cashback with a <span style={{color:"#1386b5"}}>SCIS Freedom Card</span>
                </Typography>
                <Typography variant="h5" color="black" gutterBottom style={{marginTop:12}}>
                    for a minimum spending of <span style={{fontWeight :"bold"}}> $500!</span>
                </Typography>
            </Box>
            <img src={bannerImg} className="bannerImg"/>

            {/* <button className="bannerButton">
                Apply Now
            </button> */}
        </div>
    )
}