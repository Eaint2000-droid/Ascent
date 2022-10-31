import React, { useState } from 'react'
import { TextField, Button,Paper, Grid, MenuItem, FormControl, InputLabel, Select, Input, InputAdornment } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import {useNavigate} from 'react-router-dom';
import DateAndTimePickers from './DateAndTimePickers';

export default function CampaignForm( {currentId, setCurrentId}) {
    const [campaignData, setCampaignData] = useState({ cardProgram: '', reward:'', minSpend: '', 
                                            merchant:'', startDate:'', endDate:'', selectedFile:''});
    const navigate = useNavigate(); 
    const classes = useStyles();

    //Setting card program 
    const [card, setCard] = useState('');
    const handleCardChange = (event) => {
        setCard(event.target.value);
        setCampaignData({ ...campaignData, cardProgram: event.target.value })
    }


    //Setting minimum spend
    const [minimumspend, setMinimumspend] = useState('');
    const handleMinSpendChange = (event) => {
        setMinimumspend(event.target.value);
        setCampaignData({ ...campaignData, minSpend: event.target.value })
    }

    //Setting start and end date
    const handleStartDateChange = (event) => {
        setCampaignData({ ...campaignData, startDate:event.target.value })
    }

    const handleEndDateChange = (event) => {
        setCampaignData({ ...campaignData, endDate: event.target.value })
    }
    const clear = () => {
      setCampaignData({ cardProgram: '', reward:'', minSpend: '', selectedFile:'', 
        merchant:'', startDate:'', endDate:''})
        setCard('');
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
              merchant: campaignData.merchant,
              minSpend: campaignData.minSpend,
              reward: parseFloat(campaignData.reward),
              startDate: campaignData.startDate,
              endDate: campaignData.endDate,
              selectedFile: campaignData.selectedFile,
            })
          }
      
          try {
              const response = await fetch ('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/v1', campaignRequest);
              if (!response.ok) {
                  throw new Error("Unable to create a new campaign");
              }
          } catch(error) {
              console.log(error);
              throw new Error ("Unable to create a new campaign");
          }
          console.log(parseFloat(campaignData.reward))
          console.log(campaignRequest);
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

      <TextField name="merchant" InputLabelProps={{className: classes.input}} style={{width:550}} variant="outlined" label="Merchant associated with spending" fullWidth value={campaignData.merchant} onChange={(e) => setCampaignData({ ...campaignData, merchant: e.target.value })} />

      <div className={`${classes.flexRow}`}>
      <FormControl sx={{ m: 1 }} variant="standard" style={{width:150, marginRight:10,marginTop:13}}>
          <InputLabel htmlFor="standard-adornment-amount">Reward</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={campaignData.reward}
            onChange={(e) => setCampaignData({ ...campaignData, reward: e.target.value })}
            startAdornment={<InputAdornment position="start"> </InputAdornment>}
          />
        </FormControl>
      {/* <TextField name="reward" InputLabelProps={{className: classes.input}}
       variant="outlined" label="Reward" fullWidth multiline value={campaignData.reward} 
       onChange={(e) => setCampaignData({ ...campaignData, reward: parseInt(e.target.value) })} style={{width:150, marginLeft:0}} /> */}
   
        <FormControl style={{width:410,fontWeight:500, fontSize:30, marginTop:9,marginBottom:6}} variant="outlined" >
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
