import axios from 'axios';
import React, { useEffect, useState } from 'react'
import vetApi from '../../../services/vetApi';
import { useParams } from 'react-router-dom';
import DashNavUser from '../../Reusable/DashNavUser';
import './style.scss'
import VetCard from '../../Reusable/VetCard';

const Doctor = () => {
    const [doctorData, setdoctorData] = useState([]);
    const [view, setView] = useState("info");
    const params = useParams();
    
    const getData = async (id) => {

      try{
        const { data } = await vetApi.getDoctorDetails(id);
        setdoctorData(data)
      }catch(error) {

      }

    }

    useEffect(() => {
      getData(params.id)
    } ,[])



  return (
    <div className='vetListPage'>
      <DashNavUser />
      <section className='vetProfilePage'>
        <div className='pageHeadingSticky'>
          <div>
              <h1 className='buyPageHeading font-face-D'>Vets</h1>
              <p className='buyPageInfo'>Best healthcare for your pooch, always!</p>
          </div>
        </div>
        <div className='vetDetailCardWrapper'>
          <div className='vetMain'>
            <div className='vetDetailCard'>
              <div className='vetImageHolder'>
                <div className='doctorImage' style={{height: "90px", width: "90px", background: `url("${doctorData?.image?.url}")`}}/>
              </div>
              <div className='cardHeaderWrapper'>
                <h1 className='doctorName'>{doctorData?.name}</h1> 
                <p className='doctorDetails'>{doctorData?.qualification}</p>
                <p className='doctorDetails'>{doctorData?.experience} years overall experience</p>
              </div>
            </div>
            <div className='pageSelector'>
              <button 
                className={`selectorButton font-face-D para ${view ==="info" ? "active" : ""}`} 
                onClick={()=>{
                  setView("info");
                }}>
                Doctor Info
              </button>
              <button 
                className={`selectorButton font-face-D para ${view ==="reviews" ? "active" : ""}`}
                onClick={() => {
                setView("reviews");
                }}>
                Reviews
              </button>
            </div>
            <div className='vetViewWrapper'>
              { view === "info" ? 
                <p className='doctorDetails'>{doctorData?.description}</p>
                :
                <div className='reviewWrapper'></div>

              }
            </div>
          </div>  
          <div className='clinicListWrapper'>
            <h1 className='font-face-D'>Find Doctor</h1>
            {doctorData?.clinics?.length > 0 && doctorData?.clinics.map((clinic, index) => {
              return (
                <VetCard data={clinic} key={index} />
              )
            } )}
        </div>
        </div>
      </section>
    </div>
  )
}

export default Doctor