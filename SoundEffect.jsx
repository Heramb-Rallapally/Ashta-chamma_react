import React from 'react';
import Sound from 'react-sound';

function SoundEffect() {
  return (
    <Sound
      url="D:\Ashta chamma\REACT_CODES\vite-project\src.mp3"
      playStatus={Sound.status.PLAYING}
      volume={50}
    />
  );
}

export default SoundEffect;
