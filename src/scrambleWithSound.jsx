import React from 'react';
import AppBarTitleWithSound from './pokemonSoundEffect';
import TextScrambler from './scramblerText';

const ScrambleWithSound = ({ label }) => {
  return (
    <AppBarTitleWithSound>
      <TextScrambler text={label} />
    </AppBarTitleWithSound>
  );
};

export default ScrambleWithSound;
