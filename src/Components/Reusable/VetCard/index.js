import React from 'react'
import Hospital from '../../../Assets/hospital-buildings.png'
import Doctor from '../../../Assets/medical-assistance.png'
import { Link } from 'react-router-dom'
import './style.scss'

const VetCard = ({data}) => {
  return (
    <div className='vetCardWrapper'>
        <div className='vetImage'>
            {data?.type === "clinic" ? 
                (<img src={data?.image?.url ?data?.image?.url : Hospital} alt="icon of a hospital"/>) 
                : 
                (<img src={data?.image?.url ?data?.image?.url : Doctor} alt="icon of a doctor"/>) 
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
                    {data?.experience}
                </p> 
                :
                <p className='vetAddress'>
                    {data?.address ? data?.address : 'No Address'}
                </p>
            }
            <p className='vetDesc'>
                {data?.description ? data?.description : 'No Description'}
            </p>
            <Link to={data?.meeting_url} className='button primary'>
                {data?.type === "doctor" ? "Book Online Consultation" : "Book a Visit"}
            </Link>
            <Link className='button secondary' to={`/doctor/${data?.id}`}>See More</Link>
        </div>
    </div>
  )
}

export default VetCard