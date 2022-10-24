import React, {useState} from 'react'
import useStyles  from './styles';
import { Grid, CircularProgress, Box , Typography, Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Campaign from './Campaign'
import './BanksHome.css'
import bannerImg from "../../assets/bankshome.png";
import image from '../../assets/shopping2.jpg'
export default function BanksHome() {
    const classes = useStyles();
    const [initialData, setInitialData] = useState({ cardProgram: '', reward:'', rewardType:'', minSpend: '', 
    merchant:'', startDate:'', endDate:'', selectedFile:image});

     //Load data
//     useEffect(() => {
//         const sendRequest = async () => {
//         try{
//             const response = await fetch('http://localhost:5000/campaigns');
//             const responseData = await response.json();
//             setInitialData(responseData);
//         }catch(error){
//             console.log(error.message);
//         }
//         }
//         sendRequest();
//   },[])
    return (
        <React.Fragment>
        <div className="topcontainer">
            <img src={bannerImg}/>
            <div className="title">
            <Box sx={{ width: '100%', maxWidth: 1000 }}>
                <Typography variant="h4" color="black" style={{width:650, fontWeight:'bold', marginTop:10}}>
                    Launch any campaigns of your choice flexibly with Ascent. 
                </Typography>
            </Box>

            {/* <button> <NavLink to="/campaignsform">
            <Typography variant="h5" color="black" fontWeight= 'bold' style={{width:650}}>
                    <span style={{color:"#fffff"}}>Create new campaign</span>
                </Typography>
            </NavLink></button> */}
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" fullWidth><NavLink to="/campaignsform">Create new Campaign</NavLink></Button>
            </div>
        </div>

        <Grid className={classes.bottomcontainer} container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={3}>
            <Campaign campaign={initialData}/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Campaign campaign={initialData}/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Campaign campaign={initialData}/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Campaign campaign={initialData}/>
        </Grid>
          {/* {partners.map((partner) => (
             <Grid key={partner._id} item xs={12} sm={3}>
                <Partner partner={partner}/>
             </Grid>
          ))} */}
        </Grid>
        </React.Fragment>
    
      );
}
