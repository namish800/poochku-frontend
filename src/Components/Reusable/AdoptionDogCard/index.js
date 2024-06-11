import Dog from '../../../Assets/pitbull.png'
import './style.scss'
import DogPaw from '../../../Assets/dog-paw.png'

const AdoptionDogCard = ({name, imageUrls, variant}) => {
  return (
    <div className={`adoptionDogCardWrapper ${variant ? "meet" : ""}`}>
        {!variant ? <>
                <div className='adoptionCardImg' style={{background: imageUrls?.[0] ? `url(${imageUrls?.[0]})` : "grey", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
                <p>{name ? name : "Adopt Me" }</p> 
            </> 
            : 
            <>
            <div className='adoptionCardImg' style={{background:`url(${DogPaw})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
            <p className='meetText'>Meet Them</p> 
            </>
        }
    </div>
  )
}

export default AdoptionDogCard