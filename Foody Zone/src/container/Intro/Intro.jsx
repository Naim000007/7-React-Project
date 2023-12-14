import React, { useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";

function Intro() {
  const [palyvideo, setPlayvideo] = useState(false);
  const videRef = React.useRef();

  const handleVideo = () => {
    setPlayvideo((prevPlayVideo) => !prevPlayVideo);
    if (palyvideo) {
      videRef.current.pause();
    } else {
      videRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={videRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {palyvideo ? <BsFillPauseFill color="#fff" fontSize={30} />  : <BsFillPlayFill color="#fff" fontSize={30} /> }
        </div>
      </div>
    </div>
  );
}

export default Intro;
