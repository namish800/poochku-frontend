import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import vetApi from '../../../services/vetApi';
import DashNavUser from '../../Reusable/DashNavUser';
import VetCard from '../../Reusable/VetCard';
import './style.scss'

const Clinic = () => {
  const [clinicData, setClinicData] = useState([]);
  const [view, setView] = useState("info");
  const [seeMore, setSeeMore] = useState(false)
  const params = useParams();
  
  const getData = async (id) => {
    console.log("this is clinic data")

    try{
      const { data } = await vetApi.getClinicDetails(id);
      setClinicData(data)
    }catch(error) {
      console.log(error)
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
              <h1 className='buyPageHeading font-face-D'>{clinicData?.name ? clinicData?.name : "Veterinary Clinic"}</h1>
              <p className='buyPageInfo'>Best healthcare for your pooch, always!</p>
          </div>
        </div>
        <div className='vetDetailCardWrapper'>
          <div className='vetMain'>
            <div className='vetDetailCard'>
              <div className='vetImageHolder'>
                <div className='doctorImage' style={{height: "90px", width: "90px", background: `url("${clinicData?.image?.url}")`}}/>
              </div>
              <div className='cardHeaderWrapper'>
                {/* <pre>{JSON.stringify(clinicData, null, 2)}</pre> */}
                <h1 className='doctorName'>{clinicData?.name}</h1> 
                <p className='doctorDetails'>{clinicData?.address}</p>
                {clinicData?.directionUrl && <a href={clinicData?.directionUrl}>Get Directions</a>}
                {/* <p className='doctorDetails'>{clinicData?.experience} years overall experience</p> */}
              </div>
            </div>
            {/* <div className='pageSelector'>
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
            </div> */}
            <div className='vetViewWrapper'>
                {clinicData?.description && <p className='doctorDetails'>{seeMore ? clinicData?.description : clinicData?.description?.slice(0, 250) + "..."}</p>}
                <button className='seeMoreButton' onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'See Less' : 'See More'}</button>
            </div>
          </div>  
          <div className='clinicListWrapper'>
            <h1 className='font-face-D'>Available Doctors</h1>
            {clinicData?.doctors?.length > 0 && clinicData?.doctors.map((clinic, index) => {
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

export default Clinic