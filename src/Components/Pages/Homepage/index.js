import React from "react";
import Header from "../../Reusable/Header";
import Logo from "../../../Assets/Logo.png";
import "./style.css";

const index = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="landingBanner">
        <div className="landingActions">
          <div className="landingHeading" style={{ marginBottom: "-30px" }}>
            hugs +<br />
            kisses
          </div>
          <div>
            <button className="landingButtonMain">Browse Dogs</button>
            <button className="landingButtonMain">Shop</button>
          </div>
        </div>
      </div>
      <section className="landingIntro">
        <div>
          <h1>
            WELCOME TO, <br />
            PHOOCHKU!
          </h1>
          <p>NO.1 PET SHOP IN INDIA </p>
          <div className="introInfo">
            <img src={Logo} />
            <p>
              At Phoochku find yourself a loyal companions from a collection of
              pure bred and well trained dogs Huskies, Beagles, Spaniels and
              lots of pups of other popular breeds. <br /> We also deal in cats
              from respected and informed registered cat breeders. Our breeders
              strictly adhere to their natural breeding and our volunteers are
              the well-trained experts who provide 24*7 on call support to our
              clients.
              <br /> <br />
              <b>Buy your favorite pet from Phoochku in India.</b>
            </p>
          </div>
        </div>
          <div>
             <button className="landingButtonMain secondary">Contact Us</button>
          </div>
      </section>
    </>
  );
};

export default index;
