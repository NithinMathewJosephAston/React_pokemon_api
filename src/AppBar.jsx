import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ScrambleText from './scramblerText';


export default function SearchAppBar() {
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
                src="/images/gengar.gif"
                alt="Gengar"
                style={{ width: 70, height: 60 }}
            />
          </IconButton>  
          <div className='font-medium'>
          <ScrambleText text="Gengar" />
          </div>  
        </Toolbar>
      </AppBar>
    </Box>
  );
}
