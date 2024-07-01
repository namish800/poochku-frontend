import React, { useEffect, useState } from 'react';
import DashNavUser from '../../Reusable/DashNavUser';
import SpaIcon from '../../../Assets/spaIcon.png';
import GroomingIcon from '../../../Assets/grooming.png'
import BoardingIcon from '../../../Assets/boardingIcon.png'
import VetCard from '../../Reusable/VetCard';
import './style.scss'
import vetApi from '../../../services/vetApi';

const services = {
  "G" : {
    serviceName: "Grooming",
    icon : GroomingIcon,
  },
  "S" : {
    serviceName: "Spa",
    icon: SpaIcon
  },
  "B" : {
    serviceName : "Boarding",
    icon: BoardingIcon
  },
  "W" : {
    serviceName : "Walking",
    icon: BoardingIcon 
  }
}

const Services = () => {
  const [service, setService] = useState("G");
  const [serviceList, setServiceList] = useState([]);
  const [city, setCity] = useState('');


  const getServiceList = async () => {
    try{
      const response = await vetApi.getClinics(city, 'clinic');
      console.log(response.data)
      if(response.status===200){
        setServiceList(response.data.clinics)
      } else {
        console.log("Request failed ", response)
      }
    }
    catch(err){
      console.log(err)
    }
}

  useEffect(()=>{
    getServiceList()
  }, [])

  return (
    <div className='serviceListPage'>
        <DashNavUser />
        <div className='serviceListSection'>
            <div className='pageHeadingSticky'>
              <div>
                  <h1 className='buyPageHeading font-face-D'>Services</h1>
                  <p className='buyPageInfo'>Find service providers for your pooch, near you! </p>
              </div>
            </div>
            <div className='serviceSelector'>
              <p>Looking for</p>
              <select className='serviceDropdown'>
                <option className='serviceOptions' value="">Select a service</option>
                {Object.keys(services).map((ser, index) => {
                  return(<option value={ser} key={index}>{services[ser].serviceName}</option>)
                })}
              </select>
              <p>in Delhi NCR</p>
            </div>
            <div className='serviceListWrapper'>
              {serviceList?.map((ser, index) => {
                  return(
                      <VetCard data={ser} key={index} />
                  )
              })}
            </div>
            {/* <div className='vetListWrapper'>
              {clinicList?.map((vet, index) => {
                  return(
                      <VetCard setOpen={setOpen} setCurrentSelection={setCurrentSelection} data={vet} key={index} />
                  )
              })}
            </div> */}
        </div>
    </div>
  )
}

export default Services