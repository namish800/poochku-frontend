import React from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import logo from '../../../Assets/Logo.png'
import './style.css'

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
                        <div style={{ backgroundImage: 'url(' + character.url + ')', backgroundPosition:"center", backgroundSize:"contain" }} className='card'>
                            {/* <img src={logo} /> */}
                        <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
          </div>
        </div>
    </div>

  )
}

export default Mating