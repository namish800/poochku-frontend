import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import whatsappIcon from '../../../Assets/whatsapp.svg'
import dog from '../../../Assets/pitbull.jpg'

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
        <Carousel>
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
            <p>{details.months ? `${details.months} months`: ""}, {details.weeks ? `${details.weeks} weeks`:""} old</p>
            <p>Vaccinated: {details.isVaccinated ? "Yes" : "No"} </p>
            <div className='actionWrapper'>
                <button className='whatsappEnquire'><img src={whatsappIcon} />Enquire</button>
                {!availableForAdoption && <button className='bestBuy'>Get Best Price</button>}
            </div>
        </div>
    </div>
  )
}

export default DogCard