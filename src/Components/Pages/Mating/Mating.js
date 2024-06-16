import React, { useMemo, useRef } from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import dog from '../../../Assets/pitbull.png'
import './style.scss'
import gender from '../../../Assets/gender-fluid.png'
import Dog from '../../../Assets/dog.png'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from '../../Reusable/Search'
import Close from '../../../Assets/matingCancel.png'
import Check from '../../../Assets/matingHeart.png'
import Rupee from '../../../Assets/rupee.png'
import happy from "../../../Assets/happy.png"
import MobileNav from '../../Reusable/MobileNav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import location from '../../../Assets/location-pin.png'
import { useEffect } from 'react'
import MatingDropdown from '../../Reusable/MatingDropdown'
import Cross from '../../../Assets/thick-cross-mark.png'
import petApi from '../../../services/petApi'
import { Skeleton } from '@mui/material'
import Matchcard from '../../Reusable/MatchCard'
import MatingDogPopup from '../../Reusable/MatingDogPopup'
import VetCtaCard from '../../Reusable/VetCtaCard'

const Mating = () => {
    // const dogList = db;
    const userId = localStorage.getItem("userId");
    const [petList, setPetList] = useState();
    const [matingList, setMatingList] = useState([]);
    const [value, setValue] = useState(1)
    const [accepted, setAccepted] = useState([]);
    const [pendingFromSwiper, setPendingFromSwiper] = useState([]);
    const [pendingFromTarget, setPendingFromTarget] = useState([])
    const [selectedDog, setSelectedDog] = useState()
    const [selectedState, setSelectedState] = useState("");
    const [selectedQuality, setSelectedQuality] = useState("")
    const [selectedGender, setSelectedGender] = useState("")
    const [selectedBreed, setSelectedBreed] = useState("")
    const [serviceCode, setServiceCode] = useState("M")
    const [open, setOpen] = useState(false);
    const [popUpDog, setPopUpDog] = useState("")
    const navigate = useNavigate();



    const getPetList = async() => {
      try{
        const res = await axios.get(`https://poochku-prod.azurewebsites.net/user/${userId}`)
        // console.log('pets for mating', res)
        setPetList(res?.data.pets.pets_for_mating);
        if(res?.data.pets.pets_for_mating.length > 0){
          setSelectedDog(res?.data?.pets.pets_for_mating[0].petId)
        }
      }catch(err){
        console.log(err)
      }
    }

    const getMatingList = async() => {
      try{
        const data = await petApi.searchPets(serviceCode, selectedState, selectedBreed, selectedGender, selectedQuality, userId, selectedDog);
        // console.log("selectedDog", selectedDog);
        setMatingList(data?.pets)
      }catch(err){ 
        console.log("Error", err)
      }
    }

    const addMyDog = () => {
      navigate("/newdog/mydog")
    }

    const login = () => {
      navigate("/auth")
    }

    const getSwipedResults = async () => {
      try{
        const res = await axios.get(`https://poochku-prod.azurewebsites.net/swipe/${petList[0]?.petId}`)
        console.log("swipeResult", res)
        setAccepted(res.data.accepted)
        setPendingFromSwiper(res.data.pendingFromSwiper);
        setPendingFromTarget(res.data.pendingFromTarget)
      }catch(err){
        console.log("Err in Swiped Results", err)
      }
    }

    useEffect(()=>{
      getPetList()
    }, [])

    useEffect(() => {
      getMatingList()
    }, [selectedDog])

    useEffect(() => {
      if(petList && petList.length > 0){
        getSwipedResults()
      }
    }, [petList])

  return (
    <div className='browsePetWrapper mating'>
        <DashNavUser />
        <div className='pupListWrapper mating'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading font-face-D'>Paw Match</h1>
              <p className='buyPageInfo'>Find the purrfect Jodi on Poochku!</p>
            </div>
            <Search
            populatePupList={getMatingList}
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
          {!petList ?
            (<div className='skeletonCardWrapperMating' style={{padding: "20px"}}>
              <div className='matingSkeleton1'>
                <Skeleton variant='rectangular' animation="wave" width={"80%"} height={40} />
                <Skeleton variant='rectangular' animation="wave" width={"100%"} height={60}/>
              </div>
              <div className='matingSkeleton2Wrapper'>
                <div style={{display: "flex", justifyContent:"space-around", width: "350px", marginBottom:"20px"}}>
                  <Skeleton variant="rectangular" animation="wave" width={"48%"} height={50} className='skeletonCard' />
                  <Skeleton variant="rectangular" animation="wave" width={"48%"} height={50} className='skeletonCard' />
                </div>
                <div className='matingSkeleton2Section'>
                  <div className='matingSkeleton2'>
                    <Skeleton variant="rectangular" animation="wave" width={"100%"} height={400} className='skeletonCard' />
                    <div style={{display: "flex", justifyContent:"space-around"}}>
                      <Skeleton variant="rectangular" animation="wave" width={"100%"} height={50} className='skeletonCard' />
                      {/* <Skeleton variant="rectangular" animation="wave" width={"48%"} height={50} className='skeletonCard' /> */}
                    </div>
                  </div>
                  <div className='matingSkeleton2'>
                    <Skeleton variant="rectangular" animation="wave" width={"100%"} height={400} className='skeletonCard' />
                    <div style={{display: "flex", justifyContent:"space-around"}}>
                      <Skeleton variant="rectangular" animation="wave" width={"100%"} height={50} className='skeletonCard' />
                      {/* <Skeleton variant="rectangular" animation="wave" width={"48%"} height={50} className='skeletonCard' /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>)
            : 
            (petList && petList?.length > 0) ?  
            (<div className='matingWrapper'>
                <div className='matingSelector'>
                  <div>
                    <h2>Select Pet</h2>
                    {petList && <MatingDropdown petList = {petList} selectedDog={selectedDog} setSelectedDog={setSelectedDog} />}
                  </div>
                  <VetCtaCard />
                </div>
              <div className='MatingSection'>
                <div className='matingTabs'>
                  <div className={`matingTab ${value===1 ? "active" : ""} font-face-D`} onClick={() => setValue(1)}>Pooch World</div>
                  <div className={`matingTab ${value===2 ? "active" : ""} font-face-D`} onClick={() => setValue(2)}>Likes</div>
                </div>
                {value === 1 && <div className='matingPanel'>
                    
                    <div className='matingListWrapper'>
                          {matingList.map((character, index) =>{
                            if(character.petId !== selectedDog){
                              return (
                                  <Matchcard character={character} popUpDog={popUpDog} setOpen={setOpen} setPopUpDog={setPopUpDog} selectedDog={selectedDog} key={index} />
                              )
                            }
                          })}
                    </div>
                </div>}
                {
                  value === 2 && <div className='matingPanel'>
                    <div className='matchSection'>
                          {/* <h3>Your Matches</h3> */}
                          <Tabs>
                            <TabList>
                              <Tab>Likes</Tab>
                              {/* <Tab>Pending</Tab> */}
                            </TabList>
                            <TabPanel>
                              <div className='matchWrapper'>
                                  {accepted.length > 0 && accepted?.map((match, index) => {
                                    return(
                                      <div className='match' key={index}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems: 'center'}}>
                                          <div className='dogPhotoWrapper' style={{background:`url(${match.petDetails.imageUrls?.length > 0 ? match.petDetails.imageUrls[0] : dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                                          <h6>{match.petDetails.name ? match.petDetails.name : match.petDetails.breed}</h6>
                                        </div>
                                        <div className='dogDetailMating'>
                                          <div><img src={gender} /><p>{match.petDetails.gender ? match.petDetails.gender : "N/A"}</p></div>
                                          <div><img src={location} /><p>{match.petDetails.location ? match.petDetails.location : "N/A"}</p></div>
                                          <div><img src={Dog} /><p>{match.petDetails.quality ? match.petDetails.quality : "N/A"}</p></div>
                                        </div>
                                        <div className='actionWrapper'>
                                          <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                                          <button className='bestBuy'>Unmatch</button>
                                        </div>
                                      </div>)})
                                  }
                                  {
                                    accepted.length === 0 && 
                                    <div className='nothingWrapper'>
                                      <img src={happy} />
                                      <h4>No Likes Yet... </h4>
                                      <p>Come back later?</p>
                                    </div>
                                  }
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='matchWrapper'>
                                {pendingFromSwiper.length > 0 && pendingFromSwiper?.map((match, index) => {
                                  return(
                                    <div className='match' key={index}>
                                      <div style={{display: "flex", flexDirection: "row", justifyContent: "start", alignItems: 'center'}}>
                                        <div className='dogPhotoWrapper' style={{background:`url(${match.petDetails.imageUrls?.length > 0 ? match.petDetails.imageUrls[0] : dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                                        <h6>{match.petDetails.name ? match.petDetails.name : match.petDetails.breed}</h6>
                                      </div>
                                      <div className='dogDetailMating'>
                                        <div><img src={gender} /><p>{match.petDetails.gender ? match.petDetails.gender : "N/A"}</p></div>
                                        <div><img src={location} /><p>{match.petDetails.location ? match.petDetails.location : "N/A"}</p></div>
                                        <div><img src={Dog} /><p>{match.petDetails.quality ? match.petDetails.quality : "N/A"}</p></div>
                                      </div>
                                      <div className='actionWrapper'>
                                        <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                                        <button className='bestBuy'>ACCEPT</button>
                                      </div>
                                    </div>)})
                                }
                                {pendingFromTarget.length > 0 && pendingFromTarget?.map((match, index) => {
                                  return(
                                    <div className='match' key={index}>
                                      <div style={{display: "flex", flexDirection: "row", justifyContent: "start", alignItems: 'center'}}>
                                        <div className='dogPhotoWrapper' style={{background:`url(${match.petDetails.imageUrls?.length > 0 ? match.petDetails.imageUrls[0] : dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                                        <h6>{match.petDetails.name ? match.petDetails.name : match.petDetails.breed}</h6>
                                      </div>
                                      <div className='dogDetailMating'>
                                        <div><img src={gender} /><p>{match.petDetails.gender ? match.petDetails.gender : "N/A"}</p></div>
                                        <div><img src={location} /><p>{match.petDetails.location ? match.petDetails.location : "N/A"}</p></div>
                                        <div><img src={Dog} /><p>{match.petDetails.quality ? match.petDetails.quality : "N/A"}</p></div>
                                      </div>
                                      <div className='actionWrapper'>
                                        <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                                        <button className='bestBuy' disabled>Pending</button>
                                      </div>
                                    </div>)})
                                }
                              </div>
                            </TabPanel>
                          </Tabs>
                    </div>
                  </div>
                }
              </div>
            </div>)  
            :
            (<div className='addMatingDog'>
              <img src={happy} />
              <h1>Please add a dog first!</h1>
              {userId ? <button className='landingButtonMain secondary adopt' onClick={addMyDog}>Add a Dog</button> : <button className='landingButtonMain secondary adopt' onClick={login}>Login</button>}
            </div>)
          }
        </div> 
        <MobileNav />
        <MatingDogPopup open={open} setOpen={setOpen} selectedDog={selectedDog} popUpDog={popUpDog} setPopUpDog={setPopUpDog}/>
    </div>

  )
}

export default Mating