import React from 'react'
import deleteIcon from "../assets/delete.png";
import './Settings.css'
import {Typography, Button} from '@material-ui/core';

export default function Settings() {
    var user = localStorage.getItem('email');
    var access_token = localStorage.getItem('access token');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const accessTokenParam = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              accessToken: access_token,
            })
          }
        try {
            const response = await fetch('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/users/'+ user, accessTokenParam);
            const responseData = await response.json();
            console.log(responseData);
            console.log(user);
        } catch(error) {
            console.log(error.message);
        }
    }

  return (
    <div className="settings">
    <img src={deleteIcon} alt="" style={{marginRight:60}}/>
    <Typography variant="h5" color="black" style={{width:630, fontWeight:'bold', marginTop:10, textAlign:'center'}}>
        We're sorry to see you go. If you want to permanently delete your account, click Delete Account. 
    </Typography>
    <div className="button">
    <Button style={{textTransform: "none"}} onClick={handleSubmit} variant="contained" color="primary" size="small" fullWidth>Delete Account</Button>
    </div>
    </div>
  )
}
