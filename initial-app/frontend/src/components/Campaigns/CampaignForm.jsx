import React, { useState } from 'react'
import { TextField, Button,Paper, Grid, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import {useNavigate} from 'react-router-dom';
import DateAndTimePickers from './DateAndTimePickers';

export default function CampaignForm( {currentId, setCurrentId}) {
    const [campaignData, setCampaignData] = useState({ cardProgram: '', reward:'', rewardType:'', minSpend: '', 
                                            merchant:'', startDate:'', endDate:'', selectedFile:''});
    const navigate = useNavigate(); 
    const classes = useStyles();

    //Setting card program 
    const [card, setCard] = useState('');
    const handleCardChange = (event) => {
        setCard(event.target.value);
        setCampaignData({ ...campaignData, cardProgram: event.target.value })
    }

    //Setting reward type
    const [typereward, setTypereward] = useState('');
    const handleRewardTypeChange = (event) => {
        setTypereward(event.target.value);
        setCampaignData({ ...campaignData, rewardType: event.target.value })
    }

    //Setting minimum spend
    const [minimumspend, setMinimumspend] = useState('');
    const handleMinSpendChange = (event) => {
        setMinimumspend(event.target.value);
        setCampaignData({ ...campaignData, minSpend: event.target.value })
    }

    //Setting start and end date
    const handleStartDateChange = (event) => {
        var setStartDate = new Date(event.target.value);

        const days = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
        const AM_PM = setStartDate.getHours() < 12 ? 'AM' : 'PM';
     
        const startDateString = days[setStartDate.getDay()] + ', ' +  months[setStartDate.getMonth()] + ' ' + (setStartDate.getDay() + 1) + ' ' +  setStartDate.getFullYear() + ", " + (setStartDate.getHours() % 13) + ':' + setStartDate.getMinutes() + ' ' + AM_PM;

        setCampaignData({ ...campaignData, startDate:event.target.value })
    }

    const handleEndDateChange = (event) => {
        var setEndDate = new Date(event.target.value);

        const days = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
        const AM_PM = setEndDate.getHours() < 12 ? 'AM' : 'PM';
       
        const endDateString = days[setEndDate.getDay()] + ', ' +  months[setEndDate.getMonth()] + ' ' + (setEndDate.getDay() + 1) + ' ' +  setEndDate.getFullYear() + ", " + (setEndDate.getHours() % 13) + ':' + setEndDate.getMinutes() + ' ' + AM_PM;

        setCampaignData({ ...campaignData, endDate: event.target.value })
    }
    const clear = () => {
      setCampaignData({ cardProgram: '', reward:'', rewardType:'', minSpend: '', selectedFile:'', 
        merchant:'', startDate:'', endDate:''})
        setCard('');
        setTypereward('');
        setMinimumspend('');
        
    };

    // Submit Campaign request here
    const handleSubmit = async (e) => {
        e.preventDefault();

        const campaignRequest = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              cardProgram: campaignData.cardProgram,
              spendingRule:campaignData.spendingRule,
              merchant: campaignData.merchant,
              startDate: campaignData.startDate,
              endDate: campaignData.endDate,
              image: campaignData.selectedFile,
            })
          }
      
          // try {
          //     const response = await fetch ('http://localhost:5000/campaigns', campaignRequest);
          //     if (!response.ok) {
          //         throw new Error("Unable to create a new campaign");
          //     }
          // } catch(error) {
          //     console.log(error);
          //     throw new Error ("Unable to create a new campaign");
          // }
          console.log(campaignData);
          clear();
          navigate('/campaigns');

    }
    
  return (
    <Paper className={classes.paper} elevation={0}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
  
      <h1 style={{fontWeight:500, marginTop:6, fontSize:30,marginBottom:40}}>   {"Create a new Campaign"}</h1>
      <FormControl style={{width:550,fontWeight:500, fontSize:30, marginTop:6,marginBottom:6}} fullWidth variant="outlined" >
          <InputLabel>Select Card Program</InputLabel>
          <Select value={card} onChange={handleCardChange}>
            <MenuItem value={'scis_freedom'}>SCIS Freedom</MenuItem>
            <MenuItem value={'scis_platinummiles'}>SCIS PlatinumMiles</MenuItem>
            <MenuItem value={'scis_premiummiles'}>SCIS PremiumMiles</MenuItem>
            <MenuItem value={'scis_shopping'}>SCIS Shopping</MenuItem>
          </Select>
        </FormControl>

      <TextField name="merchant" InputLabelProps={{className: classes.input}} style={{width:550}}variant="outlined" label="Merchant associated with spending" fullWidth value={campaignData.merchant} onChange={(e) => setCampaignData({ ...campaignData, merchant: e.target.value })} />

      <div className={`${classes.flexRow}`}>
      <TextField name="reward" InputLabelProps={{className: classes.input}} variant="outlined" label="Reward" fullWidth multiline value={campaignData.reward} onChange={(e) => setCampaignData({ ...campaignData, reward: parseInt(e.target.value) })} style={{width:100}} />
      <FormControl style={{width:210,fontWeight:500, fontSize:30, marginTop:9,marginBottom:6}} variant="outlined" >
          <InputLabel>Select Reward Type</InputLabel>
          <Select value={typereward} onChange={handleRewardTypeChange}>
            <MenuItem value={'Points'}>Point(s)</MenuItem>
            <MenuItem value={'Miles'}>Miles</MenuItem>
            <MenuItem value={'Cashback'}>Cashback</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{width:210,fontWeight:500, fontSize:30, marginTop:9,marginBottom:6}} variant="outlined" >
          <InputLabel>Select Minimum Spend</InputLabel>
          <Select value={minimumspend} onChange={handleMinSpendChange}>
            <MenuItem value={100}>$100</MenuItem>
            <MenuItem value={200}>$200</MenuItem>
            <MenuItem value={300}>$300</MenuItem>
            <MenuItem value={500}>$500</MenuItem>
            <MenuItem value={'All Spend'}>All Spend</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={`${classes.flexRow}`}>
        <DateAndTimePickers setDate={handleStartDateChange} setLabel="Event Start Date"/>
        <DateAndTimePickers setDate={handleEndDateChange} setLabel="Event End Date"/>
      </div>

      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setCampaignData({ ...campaignData, selectedFile: base64 })} /></div>
      <Grid item xs={12} sm = {6}><Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button></Grid>
        <Grid item xs={12} sm = {6} >
        <Button className={classes.buttonSubmit} style={{marginLeft:35,backgroundColor:"primary"}} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button></Grid>
    </form>
  </Paper>
  )
}
