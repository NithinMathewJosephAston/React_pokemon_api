import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './App.css'

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100vw', background: 'red'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img
                src="/images/psyduck.png"
                alt="Psyduck"
                style={{ width: 30, height: 30 }}
            />
          </IconButton>
          <Typography
            className='pixel-font'
          >
            psyduck
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
