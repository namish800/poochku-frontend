import './style.css'
import Pitbull from '../../../Assets/pitbull.jpg'

const DogForSaleCard = () => {
  return (
    <div className='dogForSaleCard'>
        <img src={Pitbull}/>
        <hr/>
        <h3>Pitbull</h3>
        <p>7 weeks old</p>
        <p>Vaccinated</p>
    </div>
  )
}

export default DogForSaleCard