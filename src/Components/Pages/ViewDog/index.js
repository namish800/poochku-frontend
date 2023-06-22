import Carousel from 'react-bootstrap/Carousel';
import DashNavUser from '../../Reusable/DashNavUser'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import dog from '../../../Assets/pitbull.jpg'
import './style.css'

const ViewDog = () => {
  return (
        <div className='browsePetWrapper'>
          <DashNavUser />
          <div className='pupListWrapper'>
            <div className='pageHeadingSticky'>
              <div>
                <h1 className='buyPageHeading'>Pitbull</h1>
                <p className='buyPageInfo'>{`Browse  >   View Dog`}</p>
              </div>
              <div className='actionWrapper'>
                <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                <button className='bestBuy'>Get Best Price</button>
              </div>
              {/* <div>
                <input type="text" className='filterInput' placeholder='Search Location'/>
                <input type="text" className='filterInput' placeholder='Search Breed'/>
                <select className='filterInput'>
                  <option>Select Gender</option>
                  <option>Male</option>  
                  <option>Female</option>  
                </select>
                <select className='filterInput'>
                  <option>Any Quality</option>
                  <option>KCI Registered</option>  
                  <option>Champion Bloodline</option>  
                </select>
                <button className='filterButton'>SEARCH</button>
              </div> */}
            </div>
            <div className='dogViewWrapper'>
              <div className='mainInfo'>
                <div className='directInfoWrapper'>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Location</p>
                    <p>Delhi</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Gender</p>
                    <p>Male</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Quality</p>
                    <p>KCI Registered</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Age </p>
                    <p>100 Days</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Vaccination Status </p>
                    <p>Vaccinated</p>
                  </div>
                  <div className='directInfo'>
                    <p className='InfoHeader'>Listed By</p>
                    <p>Satyam</p>
                  </div>
                </div>
                <div className='descriptionWrapper'>
                  <h4>Description</h4>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                </div>
              </div>
              <div className='galleryWrapper'>
              <Carousel interval={null}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={dog}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={dog}
                    alt="Second slide"
                    />
                </Carousel.Item>
              </Carousel>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ViewDog