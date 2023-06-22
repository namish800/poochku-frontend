import React from 'react'
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
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
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
            <div>
              <input type="text" className='filterInput' placeholder='Search Location'/>
              <input type="text" className='filterInput' placeholder='Search Breed'/>
              <select className='filterInput'>
                <option>Select Gender</option>
                <option>Male</option>  
                <option>Female</option>  
              </select>
              <button className='filterButton'>Search</button>
            </div>
          </div>
          <div className='matingWrapper'>
            <div className='cardContainer'>
                {dogList.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div className='card'>
                          <div className='dogPhotoWrapper' style={{background:`url(${dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                          <div className='dogDetailMating'>
                            <h3>{character.name}</h3>
                            <div><img src={gender} /><p>Male</p></div>
                            <div><img src={Dog} /><p>KCI Registered</p></div>
                            <div><img src={Dog} /><p>Rs 10,000</p></div>
                          </div>
                        </div>
                    </TinderCard>
                )}
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