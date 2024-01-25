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
  const [popup, setPopup] = useState(false)
  const [selectedState, setSelectedState] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("")
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedBreed, setSelectedBreed] = useState("")
  const [serviceCode, setServiceCode] = useState("A")
  const [open, setOpen] = useState(false);
  const getPupList = async () => {
    try{
      const data = await petApi.searchPets(serviceCode, selectedState, selectedBreed, selectedGender, selectedQuality);
      console.log("data", data);
      setPupList(data.pets)
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
            <Search
            populatePupList={getPupList}
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