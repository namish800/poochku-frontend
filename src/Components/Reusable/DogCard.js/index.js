import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import dog from '../../../Assets/pitbull.jpg'
import Dog from '../../../Assets/dog.png'
import gender from '../../../Assets/gender-fluid.png'
import location from '../../../Assets/location-pin.png'
import share from '../../../Assets/share.png'
import likeOutline from '../../../Assets/heartLine.png'
import like from '../../../Assets/heart.png'
import quality from '../../../Assets/quality.png'
import { Link, useNavigate } from 'react-router-dom';
import EnquiryModal from '../EnquiryModal/EnquiryModal';
import { useState } from 'react';
import axios from 'axios';


const DogCard = ({details, availableForAdoption}) => {
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate();
    const [popup, setPopup]=useState(false);
    console.log(details, 'dogs details')
    const enquiryRequest = async() => {
        if(userId){
            setPopup(!popup)
            try{
                const res = await axios.post("https://poochku-prod.azurewebsites.net/enquiry/best-price", null,{params:{userId, petId:`${details.petId}`}})
                console.log(res, "res")
            }catch(err){
                console.log(err)
            }}
        else{
            navigate("/auth")
        }
    }
    const waEnquire = () => {
        if(userId){
            window.open(details.owner.whatsappUrl)
            axios.post('https://poochku-prod.azurewebsites.net/enquiry/whatsapp-inquiry', {}, {params:{
                userId,
                petId : details.petId
            }})
        }else{
            navigate("/auth")
        }
    }
    const seeMoreEnquiry = () => {
        // navigate(`/viewDog/${details.petId}`)
        axios.post('https://poochku-prod.azurewebsites.net/enquiry/see-more', {}, {params:{
                userId,
                petId : details.petId
            }})
    }

    const viewDogForAdoption = () => {
        // navigate(`/viewDog/${details.petId}`)
        axios.post('https://poochku-prod.azurewebsites.net/enquiry/see-more', {}, {params:{
                userId,
                petId : details.petId
            }})
    }

  return (
    <div className='dogCardWrapper'>
        <div className='dogCardSlider'>
        <Carousel interval={null}>
            <Carousel.Item>
                {/* <img
                className="d-block w-100"
                src={details?.imageUrls.length > 0 ? details.imageUrls[0] : dog}
                alt="First slide"
                /> */}
                <div className='DogImageWrapper' style={{background: `url(${details?.imageUrls.length > 0 ? details.imageUrls[0] : dog})`}}></div>
            </Carousel.Item>
        </Carousel>
        </div>
        <div className='dogCardDetails'>
            <div className='dogCardHeader'>
                <h3>  {details.breed}</h3>
                <div>
                    {/* <img src={likeOutline} /> */}
                    <img src={share} />
                </div>
            </div>
            <div className='dogDetails'>
                    <div className='detailWrapper'><img src={gender}/><p>{details.gender ? details.gender : "N/A"}</p></div>
                    <div className='detailWrapper'><img src={Dog}/><p>{details.age ? `${details.age} days` : "N/A"}</p></div>
                    <div className='detailWrapper'><img src={location}/><p>{details.location ? details.location : "N/A"}</p></div>
                    {/* <div className='detailWrapper'><img src={vaccine}/><p>Vaccinated: {details.isVaccinated ? "Yes" : "No"} </p></div> */}
                    {/* <div className='detailWrapper'><img src={Dog} /><p>80 days old</p></div> */}
            </div>            
            <div className='actionWrapper'>
                <button className='whatsappEnquire' onClick={waEnquire}><img src={whatsappIcon} />Enquire</button>
                {availableForAdoption ? <Link to={`/viewDog/${details.petId}`} className='bestBuy' target="_blank" rel="noopener noreferrer"><button onClick={viewDogForAdoption}>See More</button></Link> : <button className='bestBuy'onClick={enquiryRequest}>Get Best Price</button>}
            </div>
            {!availableForAdoption && <div className='actionWrapper2'>
                <Link to={`/viewDog/${details.petId}`} target="_blank" rel="noopener noreferrer"><button onClick={seeMoreEnquiry}>See More</button></Link>
            </div>}
        </div>
        <EnquiryModal open={popup} setOpen={setPopup}/>
    </div>
  )
}

export default DogCard