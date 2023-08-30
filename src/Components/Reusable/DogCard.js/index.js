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
import EnquiryModal from '../EnquiryModal';
import { useState } from 'react';
import axios from 'axios';


const id = {
    id: 1,
    breed:"Pitbull",
    weeks:"5",
    months:"2",
    isVaccinated:true,
    isMixedBreed:true,
    motherBreed:"Poodle",
    fatherBreed:"Pitbull",
    photos:[],
    ownerName:"Satyam Mahajan",
    colors:["white", "black"],
    waLink: "",
}

const DogCard = ({details, availableForAdoption}) => {
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate();
    const [popup, setPopup]=useState(false);
    console.log(details, 'dogs details')
    const enquiryRequest = async() => {
        try{
            const res = await axios.post("https://poochku-prod.azurewebsites.net/enquiry/best-price", null,{params:{userId, petId:`${details.petId}`}})
            console.log(res, "res")
            setPopup(!popup)
        }catch(err){
            console.log(err)
        }
    }
    const waEnquire = () => {
        if(userId){
            window.open(details.owner.whatsappUrl)
        }else{
            navigate("/auth")
        }
    }
    const viewDogForAdoption = () => {
        navigate(`/viewDog/${details.petId}`)
    }

  return (
    <div className='dogCardWrapper'>
        <div className='dogCardSlider'>
        <Carousel interval={null}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={details?.imageUrls ? details.imageUrls[0] : dog}
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        <div className='dogCardDetails'>
            <div className='dogCardHeader'>
                <h3>  {details.breed}</h3>
                <div>
                    <img src={likeOutline} />
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
                {availableForAdoption ? <button className='bestBuy' onClick={viewDogForAdoption}>See More</button> : <button className='bestBuy'onClick={enquiryRequest}>Get Best Price</button>}
            </div>
            {!availableForAdoption && <div className='actionWrapper2'>
                <Link to={`/viewDog/${details.petId}`}><button>See More</button></Link>
            </div>}
        </div>
        <EnquiryModal open={popup} setOpen={setPopup}/>
    </div>
  )
}

export default DogCard