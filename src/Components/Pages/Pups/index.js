import React, { useEffect, useState } from 'react'
import DashNavUser from '../../Reusable/DashNavUser';
import DogCard from '../../Reusable/DogCard.js';
import './style.css'
import axios from 'axios';
import Search from '../../Reusable/Search';
import EnquiryModal from '../../Reusable/EnquiryModal/EnquiryModal.js';
import MobileSearch from '../../Reusable/MobileSearch';
import MobileNav from '../../Reusable/MobileNav';
import { Skeleton } from '@mui/material';
import PopupModal from '../../Reusable/PopupModal/index.js'

const Pups = () => {
  const [pupList, setPupList] = useState()
  const [popup, setPopup] = useState(false)
  const [selectedState, setSelectedState] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("")
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedBreed, setSelectedBreed] = useState("")
  const [open, setOpen] = useState(false);


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
    setTimeout(() => {
      setOpen(true)
    }, 20000)
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
            <Search selectedBreed = {selectedBreed} selectedGender = {selectedGender} selectedQuality = {selectedQuality} selectedState = {selectedState} />
          </div>
          {/* <hr className='mainPageHr' /> */}
          <MobileSearch/>
          <div className='buyPageListWrapper'>
            <div className='buyPageList'>
              {
                pupList ? pupList?.map((e, index) => {
                  return(
                    <DogCard details={e} key={index}/>
                  )
                }) :
                <div className='skeletonCardWrapper'>
                  <Skeleton variant="rectangular" animation="wave" width={"100%"} height={210} className='skeletonCard' />
                  <Skeleton variant="rectangular" animation="wave" width={"60%"} height={20} className='skeletonCard'/>
                  <Skeleton variant="rectangular" animation="wave" width={"100%"} height={20} className='skeletonCard'/>
                  <div style={{display: "flex", justifyContent:"space-around"}}>
                    <Skeleton variant="rectangular" animation="wave" width={"48%"} height={40} className='skeletonCard' />
                    <Skeleton variant="rectangular" animation="wave" width={"48%"} height={40} className='skeletonCard' />
                  </div>
                  <Skeleton variant="rectangular" animation="wave" width={"100%"} height={40} className='skeletonCard' />                  
                </div>
              
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
        <PopupModal open={open} setOpen={setOpen} heading={"Can't find your desired pup?"} subheading={"Let us find them for you!"} />
    </div>
  )
}

export default Pups