import Carousel from 'react-bootstrap/Carousel';
import DashNavUser from '../../Reusable/DashNavUser'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import dog from '../../../Assets/pitbull.jpg'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dogDB from '../../Reusable/breeds';
import { Rating, Skeleton } from '@mui/material';
import EnquiryModal from '../../Reusable/EnquiryModal/EnquiryModal';

const ViewDog = () => {
  const params = useParams();
  const petId = params.id;
  const [details, setDetails] = useState();
  const [info, setInfo] = useState()
  const [popup, setPopup]=useState(false);
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate();

  const skeleton = {
    borderRadius: "8px",
    marginRight: "20px",
    marginBottom: "10px"
  }

  const getDogDetails = async (id) => {
    try{
      const res = await axios.get(`https://poochku-prod.azurewebsites.net/pet/${id}`);
      console.log('dog details came', res.data)
      setDetails(res.data)
    }catch(err){
      console.log(err)
    }
  }

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

  useEffect(()=>{
    getDogDetails(petId);
  }, [])

  useEffect(()=> {
    details && setInfo(dogDB.filter((e) => e.breed.toLowerCase().includes(details?.breed.toLowerCase()))[0])
    // console.log('filtereddog', dogDB.filter((e) => e.breed.toLowerCase() ==  details?.breed.toLowerCase())[0])
  }, [details])
  
  return (
        <div className='browsePetWrapper'>
          <DashNavUser />
          <div className='pupListWrapper'>
            <div className='pageHeadingSticky viewDog'>
              <div>
                <h1 className='buyPageHeading'>Pitbull</h1>
                <p className='buyPageInfo'>{`Browse  >   View Dog`}</p>
              </div>
              <div className='actionWrapper'>
                <button className='whatsappEnquire' onClick={waEnquire}><img src={whatsappIcon} />Enquire</button>
                <button className='bestBuy' onClick={enquiryRequest}>Get Best Price</button>
              </div>
            </div>
            {details && info ? <div className='dogViewWrapper'>
              <div className='mainInfo'>
                <div className='directInfoWrapper'>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Location</p>
                    <p>{details?.location ? details?.location : "N/A"}</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Gender</p>
                    <p>{details?.gender ? details?.gender : "N/A"}</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Quality</p>
                    <p>{details?.quality ? details?.quality : "N/A"}</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Age </p>
                    <p>{details?.age ? `${details?.age} days` : "N/A"}</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Vaccination Status </p>
                    <p>{details?.vaccination_status ? details.vaccination_status : "N/A"}</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Listed By</p>
                    <p>{details?.fName ? details.fName : "N/A"}</p>
                  </div>
                </div>
                <div className='descriptionWrapper'>
                  <h4>Description</h4>
                  <p>{info?.generalDescription ? info?.generalDescription : "No Description is available"}</p>
                </div>
                <div className='directInfoWrapper'>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Kids Friendly Score</p>
                    <Rating value={info?.kidFriendlyScore} readOnly />
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Other Pet Friendliness Score</p>
                    <Rating value={info?.dogFriendly} readOnly />
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Shedding</p>
                    <p><span>{info?.shedding}</span></p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Ease in Grooming Score</p>
                    <Rating value={info?.easyToGroom} readOnly />
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Energy Levels</p>
                    <p><span>{info?.energyLevel}</span></p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Intelligence</p>
                    <Rating value={info?.intelligence} readOnly />
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Trainability</p>
                    <Rating value={info?.easyToTrain} readOnly />
                  </div>
                </div>
              </div>
              <div className='galleryWrapper'>
                <img className='dogPic' src={details?.imageUrls ? details?.imageUrls?.[0] : dog}/>
              </div>
            </div> : 
             (<div style={{padding: "15px 30px", width: "40%"}}>
                <div style={{display: "flex", justifyContent:"start", marginBottom:"15px"}}>
                  <Skeleton style={skeleton} variant="reactangular" width={200} height={60}/>
                  <Skeleton style={skeleton} variant="reactangular" width={200} height={60}/>
                </div>
                <div style={{display: "flex", justifyContent:"start", marginBottom:"15px"}}>
                  <Skeleton style={skeleton} variant="reactangular" width={200} height={60}/>
                  <Skeleton style={skeleton} variant="reactangular" width={200} height={60}/>
                </div>
                <div style={{display: "flex", justifyContent:"start", marginBottom:"15px"}}>
                  <Skeleton style={skeleton} variant="reactangular" width={200} height={60}/>
                  <Skeleton style={skeleton} variant="reactangular" width={200} height={60}/>
                </div>
                <Skeleton style={skeleton} variant="reactangular" width={700} height={200}/>
              </div>)
            }
          </div>
          <EnquiryModal  open={popup} setOpen={setPopup}/>
        </div>
  )
}

export default ViewDog