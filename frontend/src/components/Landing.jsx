import React from 'react'
import style from './style'
import Navbar from './Navbar'
import Hero from './Hero'
import Rewards from './Rewards'

const Landing = () =>  (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
         <Hero/>
         <Rewards/>
      </div>
      </div>
    </div>
  );

export default Landing