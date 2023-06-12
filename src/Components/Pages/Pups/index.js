import React from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import DashNavUser from '../../Reusable/DashNavUser';
import dogList from './dogBuyList';
import DogCard from '../../Reusable/DogCard.js';

import './style.css'

const Pups = () => {
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading'>Buy Pups</h1>
              <p className='buyPageInfo'>Find your forever friends!</p>
            </div>
            <div>
              <input type="text" className='filterInput' placeholder='Search Location'/>
              <input type="text" className='filterInput' placeholder='Search Breed'/>
              <select className='filterInput'>
                <option>Select Gender</option>
                <option>Male</option>  
                <option>Female</option>  
              </select>
              <button className='filterButton'>SEARCH</button>
            </div>
          </div>
          <div className='buyPageListWrapper'>
            <div className='buyPageList'>
              {
                dogList.map((e) => {
                  return(
                    <DogCard details={e} />
                  )
                })
              }    
            </div> 
            <div className='bannerWrapper'>
                <div className='mainOffer'>
                  <h3>Let us get you, your best friend!</h3>
                  <p>We can help you find the best fit for you, and bring your new pets right to your door step.</p>
                  <button>Find your Pooch</button>
                </div>
            </div>       
          </div>
        </div>
    </div>
  )
}

export default Pups