import React, { useEffect, useRef } from 'react';

const AppBarTitleWithSound = ({children, soundEnabled}) => {
  const hoverSoundRef = useRef(null);

  useEffect(() => {
    hoverSoundRef.current = new Audio('sounds/typewriter.mp3');
    hoverSoundRef.current.preload = 'auto'; // Preload the audio
  }, []);

  const handleHover = () => {
    if (soundEnabled && hoverSoundRef.current) {
        hoverSoundRef.current.currentTime = 0;
        hoverSoundRef.current.play();
        setTimeout(() => {
        hoverSoundRef.current.pause();
        }, 3000);
    }
  };

  return (
    <span onMouseEnter={handleHover}>
      {children}
    </span>
  );
};

export default AppBarTitleWithSound;
