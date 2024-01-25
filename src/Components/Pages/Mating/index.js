import React, { useMemo, useRef } from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import dog from '../../../Assets/pitbull.jpg'
import './style.css'
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

const db = [
    {
      name: 'Mr Singh',
      url: '../../../Assets/Logo.png'
    },
    {
      name: 'Stevie',
      url: '../../../Assets/Logo.png'
    },
    {
      name: 'Phoochku',
      url: '../../../Assets/Logo.png'
    },
    {
      name: 'Tommy',
      url: '../../../Assets/Logo.png'
    },
    {
      name: 'Magic',
      url: '../../../Assets/Logo.png'
    },
    {
      name: 'Thanos',
      url: '../../../Assets/Logo.png'
    },
    
  ]

const Mating = () => {
    const dogList = db;
    const userId = localStorage.getItem("userId");
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState();
    const [petList, setPetList] = useState();
    const [matingList, setMatingList] = useState([]);
    const [value, setValue] = useState(1)
    const [swipeList, setSwipeList] = useState([])
    const [accepted, setAccepted] = useState([]);
    const [pendingFromSwiper, setPendingFromSwiper] = useState([]);
    const [pendingFromTarget, setPendingFromTarget] = useState([])
    const [selectedDog, setSelectedDog] = useState()
    const [selectedState, setSelectedState] = useState("");
    const [selectedQuality, setSelectedQuality] = useState("")
    const [selectedGender, setSelectedGender] = useState("")
    const [selectedBreed, setSelectedBreed] = useState("")
    const [serviceCode, setServiceCode] = useState("M")

    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    // const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();

    const childRefs = useMemo(
      () =>
        Array(db.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )
    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canGoBack = currentIndex < db.length - 1
  
    const canSwipe = currentIndex >= 0
  
    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index, swiper, target) => {
      console.log("swipeddd", direction, nameToDelete, index, swiper, target)
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
      console.log(direction, "direction")
      if(direction === "right"){
        swipeAction(swiper, target)
      }
    }

    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
      // TODO: when quickly swipe and restore multiple times the same card,
      // it happens multiple outOfFrame events are queued and the card disappear
      // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    // const outOfFrame = (name) => {
    //     console.log(name + ' left the screen!')
    // }

    const swipe = async (dir) => {
      console.log(`this is the dir ${dir} and currentIndex ${currentIndex}, ${db.length}`, childRefs[currentIndex])
      if (canSwipe && currentIndex < db.length && childRefs[currentIndex].current) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }
  
    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
    }

    const getPetList = async() => {
      try{
        const res = await axios.get(`https://poochku-prod.azurewebsites.net/user/${userId}`)
        console.log('pets for mating', res)
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
        const data = await petApi.searchPets(serviceCode, selectedState, selectedBreed, selectedGender, selectedQuality);
        console.log("data", data);
        setMatingList(data?.pets)
      }catch(err){ 
        console.log("Error", err)
      }
    }

    const swipeAction = async(swiperId, targetId) => {
      try{
        const res = await axios.post('https://poochku-prod.azurewebsites.net/swipe', {swiperId, targetId})
        console.log("swiped", res)
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
      getMatingList()
    }, [])

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
              <h1 className='buyPageHeading'>Mating</h1>
              <p className='buyPageInfo'>Find the purrfect match!</p>
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
          {petList?.length > 0 ? <div className='matingWrapper'>
            <div className='MatingSection'>
              <div className='matingTabs'>
                <div className={`matingTab ${value===1 ? "active" : ""}`} onClick={() => setValue(1)}>Pooch World</div>
                <div className={`matingTab ${value===2 ? "active" : ""}`} onClick={() => setValue(2)}>Your Matches</div>
              </div>
              {value === 1 && <div className='matingPanel'>
                    <div className='matingSelector'>
                      <h2>Currently Matching for</h2>
                      {petList && <MatingDropdown petList = {petList} selectedDog={selectedDog} setSelectedDog={setSelectedDog} />}
                    </div>
                    <img src={Cross} className='crossIcon' />
                    <div className='cardContainer'>
                      <div style={{position: "relative", height: "400px", width: '100%'}}>
                        {matingList.map((character, index) =>
                            <TinderCard  ref={childRefs[index]}
                              className='swipe'
                              key={index}
                              onSwipe={(dir) => swiped(dir, character.name, index, selectedDog, character.petId)}
                              onCardLeftScreen={() => outOfFrame(character.name, index)}>
                                <div className='card'>
                                  <div className='dogPhotoWrapper' style={{background:`url(${character.imageUrls.length > 0 ? character.imageUrls[0] : dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                                  <div className='dogDetailMating'>
                                    <h3>{character.name ? character.name : character.breed}</h3>
                                    <div><img src={gender} /><p>{character.gender ? character.gender : "N/A"}</p></div>
                                    <div><img src={Dog} /><p>{character.quality ? character.quality : "N/A" }</p></div>
                                    <div><img src={Rupee} /><p>10,000</p></div>
                                  </div>
                                </div>
                            </TinderCard>
                        )}
                      </div>
                      <div className='matingButtons'>
                        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className="leftSwipe" onClick={() => swipe('left')}><img src={Close}/></button>
                        {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
                        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className="rightSwipe" onClick={() => swipe('right')}><img src={Check}/></button>
                      </div>
                    </div>
              </div>}
              {
                value === 2 && <div className='matingPanel'>
                  <div className='matchSection'>
                        <h3>Your Matches</h3>
                        <Tabs>
                          <TabList>
                            <Tab>Active</Tab>
                            <Tab>Pending</Tab>
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
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className='matchWrapper'>
                              {pendingFromSwiper.length > 0 && pendingFromSwiper?.map((match, index) => {
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
                                      <button className='bestBuy'>ACCEPT</button>
                                    </div>
                                  </div>)})
                              }
                              {pendingFromTarget.length > 0 && pendingFromTarget?.map((match, index) => {
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
          </div> :
        <div className='addMatingDog'>
          <img src={happy} />
          <h1>Please add a dog first!</h1>
          {userId ? <button className='landingButtonMain secondary adopt' onClick={addMyDog}>Add a Dog</button> : <button className='landingButtonMain secondary adopt' onClick={login}>Login</button>}
        </div>}
        </div> 
        <MobileNav />
    </div>

  )
}

export default Mating