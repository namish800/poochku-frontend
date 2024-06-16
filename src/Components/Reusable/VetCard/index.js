import React, { useState } from 'react'
import Hospital from '../../../Assets/hospital-buildings.png'
import Doctor from '../../../Assets/medical-assistance.png'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'
// import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import CallIcon from '@mui/icons-material/Call';
import AdjustIcon from '@mui/icons-material/Adjust';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Rating } from '@mui/material'

const VetCard = ({data, setOpen, setCurrentSelection}) => {
    const [available, setAvailable] = useState(false);
    const navigate = useNavigate();

    const setPopup = () => {
        setCurrentSelection({...data});
        setOpen(true)
    }

  return (
    <div className='vetCardWrapper'>
        <div className='vetImage'>
            {data?.type === "clinic" ? 
                (<img src={data?.image?.url ? data?.image?.url : Hospital} alt="icon of a hospital"/>) 
                : 
                (<img src={data?.image?.url ? data?.image?.url : Doctor} alt="icon of a doctor"/>) 
            }
            <div className='availabilityChecker'>
                <AdjustIcon sx={{color: available ? "green" : "red"}} />
                <p style={{color: available ? "green" : "red"}}>{available ? "Available" : "Busy"}</p>
            </div>
        </div>
        <div className='vetCard'>
            <div className='vetRow'>
                <h3 className='vetName'>{data?.name || "Vet"}</h3>
                <p className='vetVerification'>{data?.verified || ''}</p>
            </div>
            <p className='vetQualification'>
                {data?.qualification ? data?.qualification : ''}
            </p>
            {data?.type === "doctor" ?
                <p className='vetExperience'>
                    {data?.experience} years of overall experience 
                </p> 
                :
                <p className='vetAddress'>
                    {data?.address ? data?.address : 'No Address'}
                </p>
            }
            <div className='vetReviews'>
                <Rating value={5} disabled/>
                <p>(100)</p>
            </div>
            <div className='callVet'>
                {/* <CallIcon className='reviewIcon' sx={{color: "#a7a7a7", marginRight: "10px"}}/>
                <p>+919717479570</p> */}
                <a className='vetCallLink' href='tel:+919717479570'><CallIcon className='reviewIcon' sx={{color: "#a7a7a7", marginRight: "10px"}}/> +919717479570</a>
            </div>

            {/* <p className='vetDesc'>
                {data?.description ? data?.description : 'No Description'}
            </p> */}
            <div style={{padding: " 0  0 20px 0"}}>
                <button className='bookingButton call' onClick={setPopup}> Book Now </button>
                <button className='bookingButton ' onClick={() => navigate(data.type === "doctor" ? `/doctor/${data?.id}` : `/clinic/${data?.id}`)}>See More</button>
            </div>
        </div>
    </div>
  )
}

export default VetCard