import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import Pitbull from '../../../Assets/pitbull.jpg'

const DogForSaleCard = () => {
  return (
    <div className='dogForSaleCard'>
        <img src={Pitbull}/>
        <hr/>
        <h3>Pitbull</h3>
        <p>7 weeks old</p>
        <p>Vaccinated</p>
        <div className='actionWrapper'>
            <button className='bestBuy'>Edit</button>
            <button className='whatsappEnquire'>Mark as Sold</button>
        </div>
    </div>
  )
}

export default DogForSaleCard