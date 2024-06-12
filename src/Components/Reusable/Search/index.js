import React from 'react'
import BreedOpt from '../BreedOpt'
import './style.scss'
import LocationOpt from '../LocationOpt'
import petApi from '../../../services/petApi'

const Search = ({populatePupList, selectedBreed, setSelectedBreed, selectedGender, setSelectedGender, selectedQuality, setSelectedQuality, selectedState, setSelectedState}) => {
  
  return (
    <div className='searchWrapper'>
        {/* <input type="text" className='filterInput' placeholder='Search Location'/> */}
        {/* <BreedOpt selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} /> */}
        <LocationOpt selectedState={selectedState} setSelectedState={setSelectedState}/>
        <select className='filterInput' value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="m">Male</option>  
          <option value="f">Female</option>  
        </select>
        {/* <select className='filterInput' value={selectedQuality} onChange={(e) => setSelectedQuality(e.target.value)}>
          <option value="">Any Quality</option>
          <option value="HB">Home Bred</option>  
          <option value="KB">Kennel Bred</option>  
        </select> */}
        <button className='filterButton' onClick={populatePupList}>SEARCH</button>
    </div>
  )
}

export default Search