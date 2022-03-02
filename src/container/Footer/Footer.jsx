/** @format */

import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Dutsen Kuran Gwari, Minna, Niger State</p>
        <p className='p__opensans'>Nigeria</p>
        <p className='p__opensans'>+2348036988409</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.logo} alt='logo' className='logo__img' />
        <p className='p__opensans'>
          The best way to find yourself is to loose yourself to the service of
          others
        </p>
        <img
          src={images.spoon}
          alt='spoon'
          className='spoon__image'
          style={{ marginTop: "15px" }}
        />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_works'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>8:00am - 5:00pm</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00am - 4:00pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <div className='p__opensans'>&copy;2022, All Rights Reserved</div>
    </div>
  </div>
);

export default Footer;
