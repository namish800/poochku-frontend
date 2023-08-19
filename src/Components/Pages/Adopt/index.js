import React, { useEffect, useState } from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import DashNavUser from '../../Reusable/DashNavUser';
import DogCard from '../../Reusable/DogCard.js';
import Search from '../../Reusable/Search'
import MobileNav from '../../Reusable/MobileNav'
import MobileSearch from '../../Reusable/MobileSearch'
import './style.css'
import petApi from '../../../services/petApi';

const Adopt = () => {
  const [pupList, setPupList] = useState([])
  const getPupList = async () => {
    try{
      const res = await petApi.getPetListByService("A");
      console.log("response: ", res)

      setPupList(res.pets)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getPupList()
  }, [])
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
          <MobileSearch />
          <div className='adoptPromptWrapper'>
            <div className='buyPageList'>
              {
                pupList.map((e) => {
                  return(
                    <DogCard details={e} availableForAdoption={true} key={e.petId}/>
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
        <MobileNav/>
    </div>
  )
}

export default Adopt