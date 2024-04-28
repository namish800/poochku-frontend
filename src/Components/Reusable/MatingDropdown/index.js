import React, { useState } from 'react'
import dog from '../../../Assets/pitbull.png'
import './style.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MatingDropdown = ({petList, selectedDog, setSelectedDog}) => {
    const [isVisible, setIsVisible] = useState(false)
    
    const toggleView = () => {
        setIsVisible(!isVisible) 
    }


    return (
    <div className='MatingDropdownWrapper' onClick={toggleView}>
        <div className='selectedDropDown'>
            <div>
                <div className='selectedDogImg' style={{background: `url(${petList.filter(e => e.petId === selectedDog)[0].imageUrls[0] || dog})`}}></div>
                <p>{petList.filter(e => e.petId === selectedDog)[0].name || petList.filter(e => e.petId === selectedDog)[0].breed}</p>
            </div>
            <KeyboardArrowUpIcon sx={isVisible ? {} : {transform:"rotate(180deg)"}}/>
        </div>
        {isVisible && <div className='dropDownMating'>
            {
                petList.map((pet, index) => {
                    return(
                        <div key={index} className='selectDropDown' onClick={() => {setSelectedDog(pet.petId)}}>
                            <div className='selectedDogImg' style={{background: `url(${pet.imageUrls[0] || dog})`}}></div>
                            <p>{pet.name || pet.breed}</p>
                        </div>
                    )
                })
            }
        </div>}
    </div>
  )
}

export default MatingDropdown