/** @format */

import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const image = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: "#aaa", margin: "1rem 0" }}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          architecto ipsam inventore saepe quasi.
        </p>
        <button type='button' className='custom__button'>
          view more
        </button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {image.map((img, i) => (
            <div
              className='app__gallery-images_card flex__center'
              key={`gallery_image-${i + 1}`}>
              <img src={img} alt='gallery' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
