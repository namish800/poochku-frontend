import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import Pitbull from '../../../Assets/pitbull.png'
import view from '../../../Assets/view.png'
import click from '../../../Assets/click.png'
import { useNavigate } from 'react-router-dom'

const DogForSaleCard = ({dogDetails}) => {
  const navigate = useNavigate()
  console.log("dog details", dogDetails)
  return (
    <div className='dogForSaleCard'>
        <img className='dogPic' src={dogDetails.imageUrls.length ? dogDetails.imageUrls[0] : Pitbull}/>
        {/* <hr/> */}
      {dogDetails?.breed ? <h3>{dogDetails?.breed}</h3> : <h3>Other</h3>}
        {dogDetails?.statistics ? 
          <div className='pupDetail'>
            {/* See more count */}
            <div className='detailWrapper'><img src={view} /><p>{dogDetails?.statistics?.view_count}</p></div>

            {/* Whatsapp click count */}
            <div className='detailWrapper'><img src={click}/><p>{dogDetails?.statistics?.whatsapp_count}</p></div>
          </div>
        : <div></div>}
        <div className='actionWrapper'>
            <button className='bestBuy' onClick={() => navigate(`/editdog/${dogDetails.service.serviceCode}/${dogDetails.petId}`)}>Edit</button>
            <button className='whatsappEnquire'>Mark as Sold</button>
        </div>
    </div>
  )
}

export default DogForSaleCard