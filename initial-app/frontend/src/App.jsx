import React from "react";
import { useState, useEffect} from "react";
import Navbar from './components/Navbar'
import Landing from './components/Landing'
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
    <Route path="/home" element={<Home/>} exact/>
    <Route path="/campaignsform" element={<CreateCampaigns/>} exact/>
    <Route path="/campaigns" element={<BanksHome/>} exact/>
  </Routes>
)

const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      console.log(user);
    });
  });

  //check if the user is valid and logged in
  return authState === AuthState.SignedIn && user ? (
      <div className="app">
     <Router>
      <main>{routes}</main>
    </Router>
    </div>
    ) : (
      <div className="bg">
        <AmplifyAuthenticator/>
      </div>
    );
}

export default App;

