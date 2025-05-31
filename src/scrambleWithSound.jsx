import React from 'react';
import AppBarTitleWithSound from './pokemonSoundEffect';
import TextScrambler from './scramblerText';

const ScrambleWithSound = ({ label, soundEnabled }) => {
  return (
    <AppBarTitleWithSound soundEnabled={soundEnabled}>
      <TextScrambler text={label} />
    </AppBarTitleWithSound>
  );
};

export default ScrambleWithSound;
