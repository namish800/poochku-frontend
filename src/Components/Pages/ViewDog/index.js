import Carousel from 'react-bootstrap/Carousel';
import DashNavUser from '../../Reusable/DashNavUser'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import dog from '../../../Assets/pitbull.png'
import './style.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dogDB from '../../Reusable/breeds';
import { Rating, Skeleton } from '@mui/material';
import EnquiryModal from '../../Reusable/EnquiryModal/EnquiryModal';
import MobileNav from '../../Reusable/MobileNav'
import UserPic from '../../../Assets/userPic.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import CakeIcon from '@mui/icons-material/Cake';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import KidsFreind from '../../../Assets/kidfriendly.png';
import OtherPet from '../../../Assets/otherpet.png';
import Shedding from '../../../Assets/shedding.png';
import GroomingDog from '../../../Assets/grooming.png';
import EnergeticDog from '../../../Assets/energylevels.png';
import IntelligentDog from '../../../Assets/intelligence.png';
import TrainedDog from '../../../Assets/trainability.png';


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
  }, [details])
  
  return (
        <div className='browsePetWrapper'>
          <DashNavUser />
          <div className='pupListWrapper'>
            <div className='pageHeadingSticky viewDog'>
              <div>
                <h1 className='buyPageHeading'>Adoption Center </h1>
                {/* <h1 className='buyPageHeading'>Adopt { details?.name ? details?.name : `Pooch`}</h1> */}
                {/* <p className='buyPageInfo'>{`Browse  >   View Dog`}</p> */}
              </div>
              {/* <div className='actionWrapper'>
                <button className='whatsappEnquire' onClick={waEnquire}><img src={whatsappIcon} />Enquire</button>
                {details && details?.service?.serviceCode !== "A" && <button className='bestBuy' onClick={enquiryRequest}>Get Best Price</button>}
              </div> */}
            </div>
            {details && info ?
              (<div className='dogViewWrapper'>
                <div className='galleryWrapper'>
                  <h2 className='font-face-D'>{ details?.name ? details?.name : `Adopt Pooch`}</h2>
                  <p>{details?.description ? details?.description : "No Description is available"}</p>
                  <img className='dogPic' src={details?.imageUrls ? details?.imageUrls?.[0] : dog}/>
                </div>
                <div className='mainInfo'>
                  <div className='listerDetailWrapper'>
                    {/* <div> */}
                      <img src={details?.owner?.image ? details?.owner?.image : UserPic} alt="dog listed for adoption by"/>
                      <p>{`${details?.owner?.fName}`}</p>
                      {/* <p>{`${details?.owner?.fName} ${details?.owner?.lName}`}</p> */}
                    {/* </div> */}
                    <button className='whatsappEnquire' onClick={waEnquire}><img src={whatsappIcon} />Enquire</button>
                  </div>
                    
                  <div className='directInfoWrapper'>
                    <div className='directInfo'>
                      <LocationOnIcon className='dogDetailIcon' />
                      <p className='InfoHeader'>Location</p>
                      <p>{details?.location ? details?.location : "N/A"}</p>
                    </div>
                    <div className='directInfo'>
                      <div>
                        <FemaleIcon className='dogDetailIcon'/>
                        <MaleIcon className='dogDetailIcon'/>
                      </div>
                      <p className='InfoHeader'>Gender</p>
                      <p>{details?.gender ? details?.gender : "N/A"}</p>
                    </div>
                    {/* <div className='directInfo'>
                      <p className='InfoHeader'>Quality</p>
                      <p>{details?.quality ? details?.quality : "N/A"}</p>
                    </div> */}
                    <div className='directInfo'>
                      <CakeIcon  className='dogDetailIcon'/>
                      <p className='InfoHeader'>Age </p>
                      <p>{`${details?.age?.years && details?.age?.years + " years"} ${details?.age?.months && "and " + details?.age?.months + " months"} old` }</p>
                    </div>
                    <div className='directInfo'>
                      <VaccinesIcon  className='dogDetailIcon'/>
                      <p className='InfoHeader'>Vaccination Status </p>
                      <p>{details?.vaccination_status ? details.vaccination_status : "N/A"}</p>
                    </div>
                    {/* <div className='directInfo'>
                      <p className='InfoHeader'>Listed By</p>
                      <p>{details?.fName ? details.fName : "N/A"}</p>
                    </div> */}
                  </div>

                  <div className='directInfoWrapper scores'>
                    <div className='directInfo'>
                      <img src={KidsFreind} />
                      <p className='InfoHeader'>Kids Friendliness</p>
                      <Rating value={info?.kidFriendlyScore} readOnly />
                    </div>
                    <div className='directInfo'>
                      <img src={OtherPet} />
                      <p className='InfoHeader'>Other Pet Friendliness</p>
                      <Rating value={info?.dogFriendly} readOnly />
                    </div>
                    <div className='directInfo'>
                      <img src={Shedding} />
                      <p className='InfoHeader'>Shedding</p>
                      <p><span>{info?.shedding}</span></p>
                    </div>
                    <div className='directInfo'>
                      <img src={GroomingDog} />
                      <p className='InfoHeader'>Ease in Grooming</p>
                      <Rating value={info?.easyToGroom} readOnly />
                    </div>
                    <div className='directInfo'>
                      <img src={EnergeticDog} />
                      <p className='InfoHeader'>Energy Levels</p>
                      <p><span>{info?.energyLevel}</span></p>
                    </div>
                    <div className='directInfo'>
                      <img src={IntelligentDog} />
                      <p className='InfoHeader'>Intelligence</p>
                      <Rating value={info?.intelligence} readOnly />
                    </div>
                    <div className='directInfo'>
                      <img src={TrainedDog} />
                      <p className='InfoHeader'>Trainability</p>
                      <Rating value={info?.easyToTrain} readOnly />
                    </div>
                  </div>
                </div>
              </div>) 
            : 
             (<div className='seeMoreSkeletonnWrapper'>
                <div style={{display: "flex", justifyContent:"start", marginBottom:"15px"}}>
                  <Skeleton style={skeleton} variant="reactangular" width={"40%"} height={60}/>
                  <Skeleton style={skeleton} variant="reactangular" width={"40%"} height={60}/>
                </div>
                <div style={{display: "flex", justifyContent:"start", marginBottom:"15px"}}>
                  <Skeleton style={skeleton} variant="reactangular" width={"40%"} height={60}/>
                  <Skeleton style={skeleton} variant="reactangular" width={"40%"} height={60}/>
                </div>
                <div style={{display: "flex", justifyContent:"start", marginBottom:"15px"}}>
                  <Skeleton style={skeleton} variant="reactangular" width={"40%"} height={60}/>
                  <Skeleton style={skeleton} variant="reactangular" width={"40%"} height={60}/>
                </div>
                <Skeleton style={skeleton} variant="reactangular" width={"100%"} height={200}/>
              </div>)
            }
          </div>
          <EnquiryModal  open={popup} setOpen={setPopup}/>
          <MobileNav />
        </div>
  )
}

export default ViewDog