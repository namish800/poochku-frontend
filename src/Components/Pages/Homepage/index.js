import React, { useEffect, useState } from "react";
import Header from "../../Reusable/Header";
import Logo from "../../../Assets/Logo.png";
import Dogfood from '../../../Assets/poochku2.png'
import StandingDog from '../../../Assets/poochku3.png'
import StaringDog from '../../../Assets/poochku1.png'
import "./style.scss";
import FAQs from "../../Reusable/FAQs";
import Delhi from "../../../Assets/delhi.png"
import Chandigarh from "../../../Assets/chandigarh.png"
import Panjab from "../../../Assets/panjab.png"
import Kolkata from "../../../Assets/kolkata.png"
import Mumbai from "../../../Assets/mumbai.png"
import Kennel from '../../../Assets/dog-house.png'
import Animation from "../../../Assets/animated.gif"
import { Link, useNavigate } from "react-router-dom";
import Dog from '../../../Assets/pitbull.png'
import Cat from '../../../Assets/cat.png'
import VetVisit from '../../../Assets/homeVisit.png'
import ShopBanner from '../../../Assets/shopbanners.png'
import WalkBanner from '../../../Assets/walkerBanner.png'
import CalendarIcon from '../../../Assets/calendar.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import petApi from '../../../services/petApi'
import AdoptionDogCard from "../../Reusable/AdoptionDogCard";
import { Skeleton } from "@mui/material";


const Homepage = () => {
  const navigate = useNavigate();
  const {getPetListByService} = petApi;
  const [adoptionList, setAdoptionList] = useState();

  const goToAdoption = () => {
    navigate("/browse")
  }

  useEffect(() => {
    const getDogList = async () => {
      const resp = await getPetListByService("A", 0, 3);
      console.log("dog list", resp)
      setAdoptionList(resp.pets)
    }
    getDogList();
  }, [])

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="landingBanner font-face-D">
        <div className="landingActions">
          <div className="landingHeading font-face-D" >
            hugs +<br />
            kisses
          </div>
          <div className="landingAction">
            {/* <input type="text" className="mainSearch" placeholder="Search for the purrfect match!"/> */}
            <a href="https://vdo2385601y.typeform.com/to/fBb79EOi" target="_blank" rel="noreferrer"><button className="landingButtonMain font-face-D">Pet Finder</button></a>
            <Link to="/browse"><button className="landingButtonMain secondary font-face-D">Browse Dogs</button></Link>
          </div>
        </div>
      </div>
      <section className="landingIntro">
        <div>
          <img src={Logo} />
          <h1 className="font-face-D">
            Hi! <br />
            WELCOME TO, <br />
            POOCHKU!
          </h1>
          <p style={{marginBottom:"0"}} className="font-face-D">NO.1 PET STOP IN INDIA </p>
          <div className="introInfo">
            <p>
              At Phoochku find yourself a loyal companions from a collection of
              pure bred and well trained dogs Huskies, Beagles, Spaniels and
              lots of pups of other popular breeds. 
              {/* <br /> We also deal in cats
              from respected and informed registered cat breeders. Our breeders
              strictly adhere to their natural breeding and our volunteers are
              the well-trained experts who provide 24*7 on call support to our
              clients. */}
              <br /> 
              {/* <b>Buy your favorite pet from Poochku in India.</b> */}
            </p>
          </div>
          <div style={{marginTop:"0px", display:"flex"}}></div>
             <button className="landingButtonMain font-face-D">Services</button>
             <button className="landingButtonMain secondary font-face-D" onClick={()=>navigate("/browse")}>Vets</button>
        </div>
        <img className="animatedSatyam" src={Animation} />
      </section>
      <section className="landingBreak">
        <h1 className="font-face-D">Major Cities We Cover!</h1>
        <div className="cityWrapper">
          <div>
            <img src={Delhi}/>
            <p>Delhi-NCR</p>
          </div>
          <div>
            <img src={Mumbai} />
            <p>Mumbai</p>
          </div>
          {/* <div>
            <img src={Kolkata} />
            <p>Kolkata</p>
          </div> */}
          <div>
            <img src={Chandigarh}/>
            <p>Chandigarh</p>
          </div>
          {/* <div>
            <img src={Panjab} />
            <p>Panjab</p>
          </div> */}
        </div>
      </section>
      <section className="optionBoxWrapper">
        <div className="connectSection-hp">
          <p>INTRODUCING</p>
          <h5 className="font-face-D">PAW MATCH</h5>
          <p>We provide a safe and secure platform for pet owners to connect, chat, and meet up with their furry friends. Our goal is to make sure that every pet owner has the opportunity to meet their pet’s needs and provide them with the best possible experience.</p>
          <div className="connectSectionImgWrapper">
            <div className="petSectionImg">
              <img src={Dog} />
            </div>
            <div className="petSectionImg">
              <img src={Cat} />
            </div>
          </div>
          <button className="landingButtonMain font-face-D">Start Matching</button>
        </div>
        <img className="connectSectionImage" src={StaringDog} />
        {/* <div className="optionBox">
          <div className="option">
          <div className="optionDetails">
              <h1 className="font-face-D">Swipe Right for Puppy Love!</h1>
              <p>Discover potential matches for your dog with a fun and easy swipe. It's basically tinder, but for your pooch ;)</p>
              <div>
                <button className="landingButtonMain secondary adopt font-face-D">Woof</button>
              </div>
            </div>
          </div>
          <div className="option ">
            <div className="optionDetails">
              <h1 className="font-face-D">Find a Pup</h1>
              <p>At Phoochku find yourself a loyal companion.</p>
              <div>
                <button className="landingButtonMain secondary font-face-D">Adopt a pooch</button>
                <button className="landingButtonMain secondary adopt font-face-D">Buy</button>
              </div>
            </div>
            <img src={Dogfood} />
          </div>
          <div className="option">
            <div className="optionDetails">
              <h1 className="font-face-D">Pooch Shop</h1>
              <p>Explore our range of comfortable and stylish dog beds.</p>
              <div>
                <button className="landingButtonMain secondary font-face-D">shop</button>
                <button className="landingButtonMain secondary adopt">Buy</button>
              </div>
            </div>
            <img src={StandingDog} />
          </div>
        </div> */}
      </section>
      <section className="hp-shopSection">
        <img src={ShopBanner} />
      </section>
      <section className="optionBoxWrapper">
        <div className="connectSection-hp">
          <p>Never Again miss any Appointments!</p>
          <h5 className="font-face-D">Home Consultation</h5>
          <p>Can't visit the clinic? Don't worry poochku got you covered! <br /> Find vets and book a home visit for your pooch. </p>
          <div className="connectSectionImgWrapper">
            <div className="petSectionImg">
              <img src={CalendarIcon} />
            </div>
          </div>
          <button className="landingButtonMain font-face-D">Book a home visit</button>
        </div>
        <img className="connectSectionImage" src={VetVisit} />
      </section>
      
      <section className="articleSectionWrapper">
        <h1 className="font-face-D">First time pooch parent?</h1>
        <p>Download our guides for absolutely free!</p>
        <div className="articleSection">
          <div className="articleCategory">
            <div>
              <img />
              <p>Dog Parent Guide</p>
            </div>
          </div>
          <div className="articleCategory">
            <div>
              <img />
              <p>Cat Parent Guide</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hp-walkerSection">
        <img src={WalkBanner} />
      </section>
      <section className="adoptionSectionWrapperHP">
        <p className="font-face-D">ADOPT, DON'T SHOP! </p>
        <h1 className="font-face-D">Pets Available for Adoption Nearby <KeyboardArrowRightIcon onClick={goToAdoption} /></h1>
        {/* <p>Download our guides for absolutely free!</p> */}
        <div className="adoptionSectionHP">
          {adoptionList?.length ? adoptionList?.map((pooch, index) => {
              return <AdoptionDogCard imageUrls={pooch.imageUrls} name={pooch.name} key={index} />
            })
            :
            <>
              <Skeleton variant="rectangular" sx={{marginRight:"10px"}} animation="pulse" width={"25%"} height={300} />
              <Skeleton variant="rectangular" sx={{marginRight:"10px"}} animation="pulse" width={"25%"} height={300} />
              <Skeleton variant="rectangular" sx={{marginRight:"10px"}} animation="pulse" width={"25%"} height={300} />
            </>
          }
          <AdoptionDogCard variant="meet" />
        </div>
      </section>
      
      <section className="faqWrapper">
        <h1 className="font-face-D">Still got questions? Let us answer!</h1>
        {/* <p>Download our guides for absolutely free!</p> */}
        <FAQs />
      </section>
      <section className="breederCallWrapper">
        <div className="breederCall">
          {/* <img src={Kennel}/>
          <div>
            <h4>Are you a breeder?</h4>
            <p>It takes only a few clicks to connect with genuine pet lovers. Register Now!</p>
          </div>
          <button className="landingButtonMain secondary">Join as a Breeder</button> */}
        </div>  
      </section>
      <section className="helpSection">
        <div>
          <h1 className="font-face-D">Can't Find The Puppy You Really Want?</h1>
          <i><p>Let us!</p></i>
          <p>In case the breed you are looking for is not listed on our website contact us by reaching out to us on whatsapp or any other social media or call us on +91-9717479570 & we will happily assist you in finding you the right puppy.</p>
        </div>
      </section>
    </>
  );
};

export default Homepage;
