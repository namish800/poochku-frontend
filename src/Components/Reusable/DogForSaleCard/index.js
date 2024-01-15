import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import Pitbull from '../../../Assets/pitbull.jpg'
import view from '../../../Assets/view.png'
import click from '../../../Assets/click.png'

const DogForSaleCard = ({dogDetails}) => {
  console.log("dog details", dogDetails)
  return (
    <div className='dogForSaleCard'>
        <img className='dogPic' src={dogDetails.imageUrls.length ? dogDetails.imageUrls[0] : Pitbull}/>
        {/* <hr/> */}
      {dogDetails?.breed ? <h3>{dogDetails?.breed}</h3> : <h3>Other</h3>}
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