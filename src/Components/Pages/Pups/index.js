import React, { useEffect, useState } from 'react'
import DashNavUser from '../../Reusable/DashNavUser';
import DogCard from '../../Reusable/DogCard.js';
import './style.scss'
import axios from 'axios';
import Search from '../../Reusable/Search';
import EnquiryModal from '../../Reusable/EnquiryModal/EnquiryModal.js';
import MobileSearch from '../../Reusable/MobileSearch';
import MobileNav from '../../Reusable/MobileNav';
import { Skeleton } from '@mui/material';
import PopupModal from '../../Reusable/PopupModal/index.js'
import petApi from '../../../services/petApi.js';
import { useLocation, useNavigate } from 'react-router-dom';

const Pups = () => {
  const [buyPupList, setBuyPupList] = useState()
  const [adoptPupList, setAdoptPupList] = useState()
  const [popup, setPopup] = useState(false)
  const [selectedState, setSelectedState] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("")
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedBreed, setSelectedBreed] = useState("")
  const [serviceCode, setServiceCode] = useState("A")
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("adopt");
  const navigate = useNavigate();
  const location = useLocation();


  const getBuyPupList = async () => {
    try{
      const data = await petApi.searchPets("S", selectedState, selectedBreed, selectedGender, selectedQuality);
      console.log("data", data);
      setBuyPupList(data.pets)
      // console.log(res, "dog List")
    }
    catch(err){
      console.log(err)
    }
  }

  const getAdoptPupList = async () => {
    try{
      const data = await petApi.searchPets("A", selectedState, selectedBreed, selectedGender, selectedQuality);
      console.log("data", data);
      setAdoptPupList(data.pets)
    }
    catch(err){
      console.log(err)
    }
  }
  
  const enquiryRequest = () => {
    setPopup(!popup);
  }

  const navigateToListAdoptionIfLoggedIn = () => {
    if(localStorage.getItem('userId')==null){
      //navigate to auth page
      navigate("/auth", { state: { prevPath: location.pathname } })
    }
  }
  
  useEffect(()=>{
    getBuyPupList();
    getAdoptPupList();
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
              <h1 className='buyPageHeading font-face-D'>Pooches</h1>
              <p className='buyPageInfo'>Find your forever friends!</p>
            </div>
            <Search
            populatePupList={value === "buy" ? getBuyPupList : getAdoptPupList}
            selectedBreed={selectedBreed}
            setSelectedBreed={setSelectedBreed}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedQuality={selectedQuality}
            setSelectedQuality={setSelectedQuality}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
          </div>
          {/* <hr className='mainPageHr' /> */}
          <MobileSearch/>

          {/* <div className='pageSelector'>
            <button 
              className={`selectorButton font-face-D para ${value ==="adopt" ? "active" : ""}`} 
              onClick={()=>{
                setServiceCode("A");
                setValue("adopt");
              }}>
              Adopt
            </button>
            <button 
              className={`selectorButton font-face-D para ${value ==="buy" ? "active" : ""}`}
              onClick={() => {
              setServiceCode("S");
              setValue("buy");
              }}>
              Buy
            </button>
          </div> */}
          <div className='buyPageListWrapper'>
            {value === "adopt" && 
              <div className='adoptionSection '>
                <div className='buyPageList'>
                {
                  (adoptPupList?.length > 0) ? adoptPupList.map((e) => {
                    return(
                      <DogCard details={e} availableForAdoption={true} key={e.petId}/>
                    )
                  })
                  : 
                  (
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
                  )
                }            
                </div>
                <div className='bannerWrapper'>
                  <h3 className='font-face-D'>See a puppy in need?</h3> 
                  <p>Help them find a forever home!</p>
                  <button onClick={navigateToListAdoptionIfLoggedIn}>Add Pooch</button>
                </div>  
              </div>}
            {value === "buy" && 
              <div className='buySection '>
                <div className='buyPageList'>
                  {
                    (buyPupList?.length > 0) ? buyPupList?.map((e, index) => {
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
                  <h3 className='font-face-D'>Buy with Poochku!</h3>
                  <p>Leave it to Us! <br/>We Handpick the Finest Partners to bring you the best Pooches, so you don't have to worry.</p>
                  <button onClick={enquiryRequest}>Find your Pooch</button>
                </div>
                </div> 
              </div>}
                  
          </div>
        </div>
        <MobileNav />
        <EnquiryModal open={popup} setOpen={setPopup}/>
        <PopupModal open={open} setOpen={setOpen} heading={"Can't find your desired pup?"} subheading={"Let us find them for you!"} />
    </div>
  )
}

export default Pups