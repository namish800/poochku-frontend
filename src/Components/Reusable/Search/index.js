import React from 'react'
import BreedOpt from '../BreedOpt'
import './style.css'
import LocationOpt from '../LocationOpt'

const Search = () => {
  return (
    <div className='searchWrapper'>
        {/* <input type="text" className='filterInput' placeholder='Search Location'/> */}
        <BreedOpt />
        <LocationOpt />
        <select className='filterInput'>
        <option>Select Gender</option>
        <option>Male</option>  
        <option>Female</option>  
        </select>
        <select className='filterInput'>
        <option value="AQ">Any Quality</option>
        <option value="KR">KCI Registered</option>  
        <option value="CB">Champion Bloodline</option>  
        </select>
        <button className='filterButton'>SEARCH</button>
    </div>
  )
}

export default Search