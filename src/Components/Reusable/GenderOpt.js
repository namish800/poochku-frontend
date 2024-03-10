import React from 'react'

const GenderOpt = ({ selectedGender, setSelectedGender }) => {
  return (
    <select className='filterInput' value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
		<option value="">Select Gender</option>
		<option key="M" value="M">Male</option>
		<option key="F" value="F">Female</option>
	</select>

  )
}

export default GenderOpt;