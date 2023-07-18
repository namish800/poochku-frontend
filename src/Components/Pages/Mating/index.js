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
import Close from '../../../Assets/close.png'
import Check from '../../../Assets/check.png'
import Rupee from '../../../Assets/rupee.png'

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
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
  
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
    const swiped = (direction, nameToDelete, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
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
      if (canSwipe && currentIndex < db.length) {
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

  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper mating'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading'>Mating</h1>
              <p className='buyPageInfo'>Find the purrfect match!</p>
            </div>
            <Search />
          </div>
          <div className='matingWrapper'>
            <div className='cardContainer'>
                {dogList.map((character, index) =>
                    <TinderCard  ref={childRefs[index]}
                      className='swipe'
                      key={character.name}
                      onSwipe={(dir) => swiped(dir, character.name, index)}
                      onCardLeftScreen={() => outOfFrame(character.name, index)}>
                        <div className='card'>
                          <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                          <div className='dogDetailMating'>
                            <h3>{character.name}</h3>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                            <div><img src={Rupee} /><p>10,000</p></div>
                          </div>
                        </div>
                    </TinderCard>
                )}
                <div className='matingButtons'>
                  <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className="leftSwipe" onClick={() => swipe('left')}><img src={Close}/></button>
                  <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                  <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className="rightSwipe" onClick={() => swipe('right')}><img src={Check}/></button>
                </div>
            </div>
            <div className='matchSection'>
                  <h3>Your Matches</h3>
                  <Tabs>
                    <TabList>
                      <Tab>Active</Tab>
                      <Tab>Pending</Tab>
                    </TabList>
                    <TabPanel>
                      <div className='matchWrapper'>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy'>Unmatch</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy'>Unmatch</button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='matchWrapper'>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy'>ACCEPT</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy' disabled>Pending</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy' disabled>Pending</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy' disabled>Pending</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy' disabled>Pending</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy' disabled>Pending</button>
                          </div>
                        </div>
                        <div className='match'>
                          <div>
                            <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                            <h6>Dog Breed</h6>
                          </div>
                          <div className='dogDetailMating'>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                          </div>
                          <div className='actionWrapper'>
                            <button className='whatsappEnquire pending' disabled><img src={whatsappIcon} />Enquire</button>
                            <button className='bestBuy' disabled>Pending</button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                  
            </div>
          </div>
        </div>
    </div>

  )
}

export default Mating