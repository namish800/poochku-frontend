import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import Pitbull from '../../../Assets/pitbull.jpg'
import view from '../../../Assets/view.png'
import click from '../../../Assets/click.png'

const DogForSaleCard = () => {
  return (
    <div className='dogForSaleCard'>
        <img className='dogPic' src={Pitbull}/>
        <hr/>
      <h3>Pitbull</h3>
        <div className='pupDetail'>
          <div className='detailWrapper'><img src={view} /><p>40</p></div>
          <div className='detailWrapper'><img src={click}/><p>20</p></div>
        </div>
        <div className='actionWrapper'>
            <button className='bestBuy'>Edit</button>
            <button className='whatsappEnquire'>Mark as Sold</button>
        </div>
    </div>
  )
}

export default DogForSaleCard