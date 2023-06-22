import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import Pitbull from '../../../Assets/pitbull.jpg'
import Dog from '../../../Assets/dog.png'
import gender from '../../../Assets/gender-fluid.png'
import location from '../../../Assets/location-pin.png'
import vaccine from '../../../Assets/injection.png'
import quality from '../../../Assets/quality.png'

const DogForSaleCard = () => {
  return (
    <div className='dogForSaleCard'>
        <img src={Pitbull}/>
        <hr/>
      <h3>Pitbull</h3>
        <div>
          <div className='detailWrapper'><img src={Dog} /><p>80 days old</p></div>
          <div className='detailWrapper'><img src={gender}/><p>Male</p></div>
          <div className='detailWrapper'><img src={vaccine}/><p>Vaccinated: Yes </p></div>
        </div>
        <div>
          <div className='detailWrapper'><img src={location}/><p>Delhi</p></div>
          <div className='detailWrapper'><img src={quality}/><p>KCI Registered</p></div>
        </div>
        <div className='actionWrapper'>
            <button className='bestBuy'>Edit</button>
            <button className='whatsappEnquire'>Mark as Sold</button>
        </div>
    </div>
  )
}

export default DogForSaleCard