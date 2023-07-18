import React, { useEffect, useState } from 'react'
import DashNavUser from '../../Reusable/DashNavUser';
// import dogList from './dogBuyList';
import DogCard from '../../Reusable/DogCard.js';
import './style.css'
import axios from 'axios';
import Search from '../../Reusable/Search';

const Pups = () => {
  const [pupList, setPupList] = useState()
  const getPupList = async () => {
    try{
      const res = await axios.get("https://poochku.azurewebsites.net/pet", {params: {
        serviceCode: "S",
        page: 0,
        size: 30
      }})
      setPupList(res.data.pets)
      console.log(res, "dog List")
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
        <div className='pupListWrapper'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading'>Buy Pups</h1>
              <p className='buyPageInfo'>Find your forever friends!</p>
            </div>
            <Search />
          </div>
          <div className='buyPageListWrapper'>
            <div className='buyPageList'>
              {
                pupList && pupList.map((e) => {
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