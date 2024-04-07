import React from 'react'
import Hospital from '../../../Assets/hospital-buildings.png'
import Doctor from '../../../Assets/medical-assistance.png'
import { Link } from 'react-router-dom'
import './style.scss'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';


const VetCard = ({data}) => {
  return (
    <div className='vetCardWrapper'>
        <div className='vetImage'>
            {data?.type === "clinic" ? 
                (<img src={data?.image?.url ? data?.image?.url : Hospital} alt="icon of a hospital"/>) 
                : 
                (<img src={data?.image?.url ? data?.image?.url : Doctor} alt="icon of a doctor"/>) 
            }
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
                <ThumbsUpDownIcon className='reviewIcon' sx={{color: "#a7a7a7", marginRight: "10px"}}/>
                <p>30 Reviews</p>
            </div>
            {/* <p className='vetDesc'>
                {data?.description ? data?.description : 'No Description'}
            </p> */}
            <Link to={data?.meeting_url} className='bookingButton primary'>
                {data?.type === "doctor" ? "Book Appointment" : "Book a Visit"}
            </Link>
            <Link className='bookingButton secondary' to={data.type === "doctor" ? `/doctor/${data?.id}` : `/clinic/${data?.id}`}>See More</Link>
        </div>
    </div>
  )
}

export default VetCard