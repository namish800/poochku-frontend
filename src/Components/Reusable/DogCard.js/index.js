import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import dog from '../../../Assets/pitbull.jpg'
import vaccine from '../../../Assets/injection.png'
import Dog from '../../../Assets/dog.png'
import gender from '../../../Assets/gender-fluid.png'
import location from '../../../Assets/location-pin.png'

const id = {
    id: 1,
    breed:"Pitbull",
    weeks:"5",
    months:"2",
    isVaccinated:true,
    isMixedBreed:true,
    motherBreed:"Poodle",
    fatherBreed:"Pitbull",
    photos:[],
    ownerName:"Satyam Mahajan",
    colors:["white", "black"],
    waLink: "",
}

const DogCard = ({details, availableForAdoption}) => {
  return (
    <div className='dogCardWrapper'>
        <div className='dogCardSlider'>
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
        <div className='dogCardDetails'>
            <h3>{details.breed}</h3>
            <div className='detailWrapper'><img src={Dog} /><p>{details.months ? `${details.months} months`: ""}, {details.weeks ? `${details.weeks} weeks`:""} old</p></div>
            <div className='detailWrapper'><img src={vaccine}/><p>Vaccinated: {details.isVaccinated ? "Yes" : "No"} </p></div>
            <div className='detailWrapper'><img src={gender}/><p>Male</p></div>
            <div className='detailWrapper'><img src={location}/><p>Delhi</p></div>
            <div className='actionWrapper'>
                <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                {!availableForAdoption && <button className='bestBuy'>Get Best Price</button>}
            </div>
        </div>
    </div>
  )
}

export default DogCard