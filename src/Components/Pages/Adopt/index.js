import React from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import DashNavUser from '../../Reusable/DashNavUser';
import dogList from '../Pups/dogBuyList';
import DogCard from '../../Reusable/DogCard.js';
import Search from '../../Reusable/Search'

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
            <Search />
          </div>
          <div className='adoptPromptWrapper'>
            <div className='buyPageList'>
              {
                dogList.map((e) => {
                  return(
                    <DogCard details={e} availableForAdoption={true} />
                  )
                })
              }            
            </div>
            <div className='bannerWrapper'>
              <h3>See a puppy in need?</h3> 
              <p>Help them find a forever home!</p>
              <button>List a Pup for adoption</button>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Adopt