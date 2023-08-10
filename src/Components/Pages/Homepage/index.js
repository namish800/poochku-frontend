import React from "react";
import Header from "../../Reusable/Header";
import Logo from "../../../Assets/Logo.png";
import Dogfood from '../../../Assets/dogfood.png'
import StandingDog from '../../../Assets/standing-dog.png'
import StaringDog from '../../../Assets/staringdog.png'
import "./style.css";
import FAQs from "../../Reusable/FAQs";
import Delhi from "../../../Assets/delhi.png"
import Chandigarh from "../../../Assets/chandigarh.png"
import Panjab from "../../../Assets/panjab.png"
import Kolkata from "../../../Assets/kolkata.png"
import Mumbai from "../../../Assets/mumbai.png"
import Kennel from '../../../Assets/dog-house.png'
import Animation from "../../../Assets/animated.gif"

const index = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="landingBanner">
        <div className="landingActions">
          <div className="landingHeading" >
            hugs +<br />
            kisses
          </div>
          <div className="landingAction">
            <input type="text" className="mainSearch" placeholder="Search for the purrfect match!"/>
            <button className="landingButtonMain">Browse Dogs</button>
            {/* <button className="landingButtonMain">Shop</button> */}
          </div>
        </div>
      </div>
      <section className="landingIntro">
        <div>
          <h1>
            WELCOME TO, <br />
            POOCHKU!
          </h1>
          <p style={{marginBottom:"0"}}>NO.1 PET SHOP IN INDIA </p>
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
             <button className="landingButtonMain secondary">Shop Dogs</button>
             <button className="landingButtonMain secondary adopt">Adopt Dogs</button>
        </div>
      </section>
      <section className="landingBreak">
        <h1>Major Cities We Cover!</h1>
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
              <h1>Heading</h1>
              <p>At Phoochku find yourself a loyal companions from a collection of
              pure bred and well trained dogs Huskies, Beagles, Spaniels and
              lots of pups of other popular breeds.</p>
            </div>
            <img src={StaringDog} />
          </div>
          <div className="option">
            <div className="optionDetails">
              <h1>Heading</h1>
              <p>At Phoochku find yourself a loyal companions from a collection of
              pure bred and well trained dogs Huskies, Beagles, Spaniels and
              lots of pups of other popular breeds.</p>
            </div>
            <img src={Dogfood} />
          </div>
          <div className="option">
            <div className="optionDetails">
              <h1>Heading</h1>
              <p>At Phoochku find yourself a loyal companions from a collection of
              pure bred and well trained dogs Huskies, Beagles, Spaniels and
              lots of pups of other popular breeds.</p>
            </div>
            <img src={StandingDog} />
          </div>
        </div>
      </section>
      <section className="articleSectionWrapper">
        <h1>Getting a pet for the first time?</h1>
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
      <section className="breederCallWrapper">
        <div className="breederCall">
          <img src={Kennel}/>
          <div>
            <h4>Are you a breeder?</h4>
            <p>It takes only a few clicks to connect with genuine pet lovers. Register Now!</p>
          </div>
          <button className="landingButtonMain secondary">Join as a Breeder</button>
        </div>  
      </section>
      <section className="faqWrapper">
        <h1>Still got questions? Let us answer!</h1>
        {/* <p>Download our guides for absolutely free!</p> */}
        <FAQs />
      </section>
      <section className="helpSection">
        <div>
          <h1>Can't Find The Puppy You Really Want?</h1>
          <i><p>We'll do the work for you!</p></i>
          <p>In case the breed you are looking for is not listed on our website contact us by reaching out to us on whatsapp or any other social media or call us on +91-9717479570 & we will happily assist you in finding you the right puppy.</p>
        </div>
        <img src={Animation} />
      </section>
    </>
  );
};

export default index;
