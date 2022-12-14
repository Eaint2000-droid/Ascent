import React, {useState, useEffect} from 'react'
import useStyles  from './styles';
import { Grid, CircularProgress, Box , Typography, Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Campaign from './Campaign'
import './BanksHome.css'
import bannerImg from "../../assets/bankshome.png";
import image from '../../assets/shopping2.jpg';
import axios from 'axios';

export default function BanksHome() {
    const classes = useStyles();
    const [initialData, setInitialData] = useState([]);
    const token = localStorage.getItem('access token');
    const sendRequest = async () => {
        const response = await axios.get('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/v1', {
            headers: {
                "Authorization" : localStorage.getItem("jwtToken")
            }
        });
        setInitialData(JSON.parse(response.data));
    }
     //Load data
    useEffect(() => {
            sendRequest();
    },[])

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

            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" fullWidth><NavLink to="/campaignsform">Create new Campaign</NavLink></Button>
            </div>
        </div>

        <Grid className={classes.bottomcontainer} container alignItems="stretch" spacing={3}>
        {initialData.map((campaign) => (
            <Grid item xs={12} sm={3}>
            <Campaign campaign={campaign}/>
        </Grid>
        ))}
        </Grid>
        </React.Fragment>
    
      );
}
