import { Modal } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';
import gender from '../../../Assets/gender-fluid.png'
import Dog from '../../../Assets/dog.png'
import dog from '../../../Assets/Dog3d.png'
import './style.scss'
import location from '../../../Assets/location-pin.png'
import whatsappIcon from '../../../Assets/whatsapp.svg'


const MatingDogPopup = ({open, setOpen, selectedDog, popUpDog, setPopUpDog}) => {
  const [liked, setLiked] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setPopUpDog({})
  };

  const openWhatsapp = (address) => {
    if(address){
      window.open(`${address}`, '_blank', 'rel= noopener noreferrer')
    }
  }
  const swipeAction = async(swiperId, targetId) => {
    try{
      const res = await axios.post('https://poochku-prod.azurewebsites.net/swipe', {swiperId, targetId})
      console.log("swiped", res)
    }catch(err){
      console.log("Error", err)
    }
  }

  const handleDogLike = () => {
    setLiked(!liked);
    swipeAction(selectedDog, popUpDog.petId)
  }

  const colorStyle = {color: "red", fontSize: "2rem"} ;

  useEffect(() => {
    setLiked(popUpDog?.liked)
  }, [popUpDog])

  
  return (
    <Modal
        open={open}
        onClose={handleClose}
        className='matingPopupWrapper'
    >
      <div className='matingPopup'>
        <div className='card'>
          <div className='dogPhotoWrapper' style={{background:`url(${popUpDog?.imageUrls?.length > 0 ? popUpDog?.imageUrls[0] : dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
          <div className='dogDetailMating'>
              {/* <pre>{JSON.stringify(popUpDog, null, 2)}</pre> */}
              <div className='matchActionWrapper'>
                  <h3 className='font-face-D'>{popUpDog?.name ? popUpDog?.name : popUpDog?.breed}</h3>
                  {!liked ? <FavoriteBorder onClick={handleDogLike} sx={colorStyle} /> : <FavoriteIcon onClick={handleDogLike} sx={colorStyle}/>}
              </div>
              <div><img src={location} /><p>{popUpDog?.location ? `${popUpDog?.location} location` : "N/A"}</p></div>
              <div><img src={gender} /><p>{popUpDog?.gender ? popUpDog?.gender : "N/A"}</p></div>
              <div><img src={Dog} /><p>{popUpDog?.age ? `${popUpDog?.age} days old` : "N/A" }</p></div>
          </div>
          {popUpDog?.description && <div className='matingDescWrapper'>
            <h5 className='font-face-D para'>About Simba</h5>
            <p>{popUpDog?.description}</p>
          </div>}
          <div className='actionWrapper'>
            <button className='whatsappEnquire' onClick={() => openWhatsapp(popUpDog?.owner?.whatsappUrl)}><img src={whatsappIcon} />Enquire</button>
            {/* <button className='bestBuy' disabled>Pending</button> */}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MatingDogPopup