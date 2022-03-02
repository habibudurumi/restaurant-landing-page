/** @format */

import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playVido, setPlayVido] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVido((prevPlayVideo) => !prevPlayVideo);
    if (playVido) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className='app__video'>
      <video
        src={meal}
        typ='video/mp4'
        loops
        controls={false}
        muted
        ref={vidRef}
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}>
          {playVido ? (
            <BsPauseFill color='#dcca78' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#dcca78' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
