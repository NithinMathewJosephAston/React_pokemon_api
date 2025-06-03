import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ScrambleWithSound from './scrambleWithSound.jsx';
import { usePokedex } from './pokedexContext.jsx';
import gengarGif from '/images/gengar.gif';


export default function SearchAppBar({children}) {
  const { soundEnabled} = usePokedex();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100%', background: 'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img
                src={gengarGif}
                alt="Gengar"
                style={{ width: 70, height: 60 }}
            />
          </IconButton>  
          <div className='font-medium'>
          <ScrambleWithSound label="Gengar" soundEnabled={soundEnabled} />
          </div>  
          {children}
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
