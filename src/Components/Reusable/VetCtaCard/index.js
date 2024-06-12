import React from 'react'
import { useNavigate } from 'react-router-dom'
import Doctor from '../../../Assets/3dDoctor.png'
import './style.scss'

const VetCtaCard = () => {
    const navigate = useNavigate();
  return (
    <div className='vetSideCardWrapper'>
        <img  src={Doctor}/>
        <h1>Need a Vet?</h1>
        <p>Now you can book online and home consultations on Poochku!</p>
        <button className='landingButtonMain secondary' onClick={() => {navigate("/vets")}}>Find Vets</button>
    </div>
  )
}

export default VetCtaCard