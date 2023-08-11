import React, { useEffect, useState } from 'react'
import DashNavUser from '../../Reusable/DashNavUser';
import dogList from './dogBuyList';
import DogCard from '../../Reusable/DogCard.js';
import './style.css'
import axios from 'axios';
import Search from '../../Reusable/Search';
import EnquiryModal from '../../Reusable/EnquiryModal';
import MobileSearch from '../../Reusable/MobileSearch';
import MobileNav from '../../Reusable/MobileNav';

const Pups = () => {
  const [pupList, setPupList] = useState()
  const [popup, setPopup] = useState(false)
  const getPupList = async () => {
    try{
      const res = await axios.get("https://poochku-prod.azurewebsites.net/pet", {params: {
        serviceCode: "S",
        // page: 1,
        // size: 30
      }})
      setPupList(res.data.pets)
      // console.log(res, "dog List")
    }
    catch(err){
      console.log(err)
    }
  }
  const enquiryRequest = () => {
    setPopup(!popup);
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
          <MobileSearch/>
          <div className='buyPageListWrapper'>
            <div className='buyPageList'>
              {
                pupList && pupList.map((e, index) => {
                  return(
                    <DogCard details={e} key={index}/>
                  )
                })
              }    
            </div> 
            <div className='bannerWrapper'>
                <div className='mainOffer'>
                  <h3>Buy with Poochku!</h3>
                  <p>Leave it to Us! <br/>We Handpick the Finest Partners to bring you the best Pooches, so you don't have to worry.</p>
                  <button onClick={enquiryRequest}>Find your Pooch</button>
                </div>
            </div>       
          </div>
        </div>
        <MobileNav />
        <EnquiryModal open={popup} setOpen={setPopup}/>
    </div>
  )
}

export default Pups