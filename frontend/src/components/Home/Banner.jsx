import "./Banner.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../assets/womanwithcash.png";

export default function Banner() {
    return(
        <div className="banner">
            {/* Need to stretch out the image here */}
            <Box sx={{ width: '100%', maxWidth: 1000, marginTop:4, marginLeft:13 }}>
                <Typography variant="h3" color="black" fontWeight= 'bold'>
                    Savour <span style={{color:"#20333c"}}>$300</span> cashback
                </Typography>
                <Typography variant="h5" color="black" gutterBottom>
                    with a <span style={{fontWeight :"bold"}}>SCIS freedom card!</span>
                </Typography>
            </Box>
            <img src={bannerImg} className="bannerImg"/>

            <button className="bannerButton">
                Apply Now
            </button>
        </div>
    )
}