import React from "react";
import { useState, useEffect} from "react";
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Settings from './components/Settings'
import Home from './components/Home/Home'
import CreateCampaigns from './components/Campaigns/CreateCampaigns'
import BanksHome from './components/BanksHome/BanksHome'
import style from './components/style'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'


import Amplify from "aws-amplify";import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);


const routes = (
  <Routes>
    <Route path="/" element={<Landing/>} exact/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/home" element={<Home/>} exact/>
    <Route path="/campaignsform" element={<CreateCampaigns/>} exact/>
    <Route path="/campaigns" element={<BanksHome/>} exact/>
    <Route path="/login" element={<AmplifyAuthenticator/>} exact/>
  </Routes>
)

const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      console.log(authState);
      setUser(authData);
      console.log(user);
      localStorage.setItem('jwtToken',authData.signInUserSession.idToken.jwtToken);
      localStorage.setItem('role',authData.signInUserSession.idToken.payload["cognito:groups"][0]);
      localStorage.setItem('email',authData.attributes.email);
      localStorage.setItem('access token', authData.signInUserSession.accessToken.jwtToken);
    
    });
  });

  //check if the user is valid and logged in
  return authState === AuthState.SignedIn && localStorage.getItem('role') === 'Banks' ? (
      <div className="app">
        <Landing/>
    </div>
    ) : authState === AuthState.SignedIn && localStorage.getItem('role') === 'Users' ? (
      <div className="app">
        <Landing/>
    </div>
    ) : (
      <div className="bg">
      <Router>
      <main>{routes}</main>
    </Router>
      </div>
    );
}

export default App;

