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
            <input type="text" placeholder='Search Location'/>
            <input type="text" placeholder='Search Breed'/>
            <select>
              <option>Select Gender</option>
              <option>Male</option>  
              <option>Female</option>  
            </select>
            <button>Search</button>
          </div>
          <div className='buyPageList'>
            {
              dogList.map((e) => {
                return(
                  <DogCard details={e} />
                )
              })
            }            
          </div>
        </div>
    </div>
  )
}

export default Pups