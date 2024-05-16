import React, { useRef } from 'react';

function SoundEffect() {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
      <audio ref={audioRef}>
      <source src="/Rock_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default SoundEffect;
