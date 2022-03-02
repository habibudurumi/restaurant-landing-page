/** @format */

import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content-about'>
        <h1 className='headtext__cormorant'>about us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          aperiam molestias quae ipsam alias deserunt?
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife' />
      </div>

      <div className='app__aboutus-content-history'>
        <h1 className='headtext__cormorant'>our history</h1>
        <img src={images.spoon} alt='history__spoon' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          aperiam molestias quae ipsam alias deserunt?
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
