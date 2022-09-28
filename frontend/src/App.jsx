import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Home from './components/Home/Home'
import style from './components/style'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

const routes = (
  <Routes>
    <Route path="/" element={<Landing/>} exact/>
    <Route path="/home" element={<Home/>} exact/>
  </Routes>
)
const App = () =>  (
    <div className="app">
     <Router>
      <main>{routes}</main>
    </Router>
    </div>
  );

export default App
