import React from "react";
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
import { Link } from "react-router-dom";

const index = () => {
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
            <a href="https://vdo2385601y.typeform.com/to/fBb79EOi" target="_blank" rel="noreferrer"><button className="landingButtonMain finder">Pet Finder</button></a>
            <Link to="/browse"><button className="landingButtonMain">Browse Dogs</button></Link>
          </div>
        </div>
      </div>
      <section className="landingIntro">
        <div>
          <h1 className="font-face-D">
            WELCOME TO, <br />
            POOCHKU!
          </h1>
          <p style={{marginBottom:"0"}} className="font-face-D">NO.1 PET SHOP IN INDIA </p>
          <div className="introInfo">
            <img src={Logo} />
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
             <button className="landingButtonMain secondary font-face-D">Adopt a Pooch</button>
             {/* <button className="landingButtonMain secondary adopt font-face-D">Adopt Dogs</button> */}
        </div>
      </section>
      <section className="landingBreak">
        <h1 className="font-face-D">Major Cities We Cover!</h1>
        <div className="cityWrapper">
          <div>
            <img src={Delhi}/>
            <p>Delhi</p>
          </div>
          <div>
            <img src={Mumbai} />
            <p>Mumbai</p>
          </div>
          <div>
            <img src={Kolkata} />
            <p>Kolkata</p>
          </div>
          <div>
            <img src={Chandigarh}/>
            <p>Chandigarh</p>
          </div>
          <div>
            <img src={Panjab} />
            <p>Panjab</p>
          </div>
        </div>
      </section>
      <section className="optionBoxWrapper">
        <div className="optionBox">
          <div className="option">
          <div className="optionDetails">
              <h1 className="font-face-D">Swipe Right for Puppy Love!</h1>
              <p>Discover potential matches for your dog with a fun and easy swipe. It's basically tinder, but for your pooch ;)</p>
              <div>
                <button className="landingButtonMain secondary adopt font-face-D">Woof</button>
              </div>
            </div>
            <img src={StaringDog} />
          </div>
          <div className="option ">
            <div className="optionDetails">
              <h1 className="font-face-D">Find a Pup</h1>
              <p>At Phoochku find yourself a loyal companion.</p>
              <div>
                <button className="landingButtonMain secondary font-face-D">Adopt a pooch</button>
                {/* <button className="landingButtonMain secondary adopt font-face-D">Buy</button> */}
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
                {/* <button className="landingButtonMain secondary adopt">Buy</button> */}
              </div>
            </div>
            <img src={StandingDog} />
          </div>
        </div>
      </section>
      <section className="articleSectionWrapper">
        <h1 className="font-face-D">Getting a pet for the first time?</h1>
        <p>Download our guides for absolutely free!</p>
        <div className="articleSection">
          <div className="articleCategory">
            <div>
              <img />
              <p>Dog Owner Guide</p>
            </div>
          </div>
          <div className="articleCategory">
            <div>
              <img />
              <p>Cat Owner Guide</p>
            </div>
          </div>
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
        <img src={Animation} />
      </section>
    </>
  );
};

export default index;
