import React, { useRef } from 'react';
import Total from "./Total.jsx";

function Finalize() {
return (
  <div>
    <Total/>
  </div>
)
}

function print_check() {
  console.log("music");
};

function SoundEffect() {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={Finalize} onMouseEnter={print_check}>Play Sound</button>
      <Finalize/>
      <audio ref={audioRef}>
        <source src="/Rock_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default SoundEffect;
