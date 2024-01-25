import React from 'react'
import dogDb from './breeds'


const BreedOpt = ({ selectedBreed, setSelectedBreed }) => {
  return (
    <select className='filterInput' value={selectedBreed}
	onChange={(e) => setSelectedBreed(e.target.value)}>
        <option value="Breed">Breed</option>
		{
			dogDb.map((e) => <option key={e.id} value={e.breed}>{e.breed}</option>)
		}
    </select>
  )
}

export default BreedOpt