import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';
import { useState } from 'react';
import gender from '../../../Assets/gender-fluid.png'
import Dog from '../../../Assets/dog.png'
import dog from '../../../Assets/Dog3d.png'
import './style.scss'
import location from '../../../Assets/location-pin.png'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Matchcard = ({character, selectedDog, setOpen, setPopUpDog, popUpDog}) => {
  const [liked, setLiked] = useState(character?.liked ? character?.liked : false);
  const colorStyle = {color: "red", fontSize: "2rem"} ;
  const navigate = useNavigate();

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
    swipeAction(selectedDog, character.petId)
  }

  const openWhatsapp = (address) => {
    if(address){
      window.open(`${address}`, '_blank', 'rel= noopener noreferrer')
    }
  }

  return (
    <div className='matchCardWrapper' onClick={()=>{setPopUpDog({...popUpDog, ...character}); setOpen(true)}}>
        <div className='card'>
            <div className='dogPhotoWrapper' style={{background:`url(${character.imageUrls.length > 0 ? character.imageUrls[0] : dog})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
            <div className='dogDetailMating'>
                {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
                <div className='matchActionWrapper'>
                    <h3 className='font-face-D'>{character.name ? character.name : character.breed}</h3>
                    {!liked ? <FavoriteBorder onClick={handleDogLike} sx={colorStyle} /> : <FavoriteIcon onClick={handleDogLike} sx={colorStyle}/>}
                </div>
                <div><img src={location} /><p>{character?.location ? `${character.location} location` : "N/A"}</p></div>
                <div><img src={gender} /><p>{character?.gender ? character.gender : "N/A"}</p></div>
                <div><img src={Dog} /><p>{character?.age ? `${character.age} days old` : "N/A" }</p></div>
            </div>
            <div className='actionWrapper'>
              <button className='whatsappEnquire' onClick={() => openWhatsapp(character?.owner?.whatsappUrl)}><img src={whatsappIcon} />Enquire</button>
              {/* <button className='bestBuy' disabled>Pending</button> */}
            </div>
        </div>
    </div>
  )
}

export default Matchcard