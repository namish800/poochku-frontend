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
              <select className='filterInput'>
                <option>Any Quality</option>
                <option>KCI Registered</option>  
                <option>Champion Bloodline</option>  
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
                  <h3>Buy with Poochku!</h3>
                  <p>Leave it to Us! <br/>We Handpick the Finest Partners to bring you the best Pooches, so you don't have to worry.</p>
                  <button>Find your Pooch</button>
                </div>
            </div>       
          </div>
        </div>
    </div>
  )
}

export default Pups