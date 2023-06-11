import React from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import DashNavUser from '../../Reusable/DashNavUser';
import dogList from '../Pups/dogBuyList';
import DogCard from '../../Reusable/DogCard.js';

import './style.css'

const Adopt = () => {
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper adopt'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading'>Adopt Pups</h1>
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
          <div className='adoptPromtWrapper'>
            <div className='buyPageList'>
              {
                dogList.map((e) => {
                  return(
                    <DogCard details={e} availableForAdoption={true} />
                  )
                })
              }            
            </div>
            <div className='adoptPromt'>
              <p>See a puppy in need?<br/> 
              Help them find a forever home!</p>
              <button>List a Pup for adoption</button>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Adopt