import './App.css'
import SearchAppBar from './appBar.jsx';
import PokemonViewer from './pokemonDetails.jsx';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import TemporaryDrawer from './drawer.jsx';
import PaginationRounded from './pokedexPagination.jsx';
import theme from './theme';
import ScrambleWithSound from './scrambleWithSound.jsx';
import ParallaxSections from './parallaxSection.jsx';
import { Switch, FormControlLabel } from '@mui/material';
import { usePokedex } from './pokedexContext.jsx';
import { Tooltip, Box } from '@mui/material';

function App() {
  const { soundEnabled, setSoundEnabled} = usePokedex();
  const [offset, setOffset] = useState(0);
  const handleToggle = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
    <SearchAppBar>
      <Tooltip title="Scroll down to explore!" slotProps={{tooltip: {
        sx: {
          backgroundColor: 'white', // background color
          color: 'black',           // text color
          fontSize: '16px',           // font size
          padding: '12px 26px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: 'none',
          mr:'300px'
        },
      }
      }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <FormControlLabel
          control={<Switch checked={soundEnabled} onChange={handleToggle} sx={{
            ml: 2,
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: 'yellow', // thumb color when checked
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: 'yellow', // track color when checked
            },
          }}/>}
          label="Enable Sound" 
        />
        </Box>
      </Tooltip>
    </SearchAppBar>
    <ParallaxSections>
    <h1 style={{fontSize: '40px', marginTop: '80px', padding: '16px', color: 'white'}}><ScrambleWithSound label='Pokédex' soundEnabled={soundEnabled} /></h1>
    <PokemonViewer offset={offset} setOffset={setOffset}/>
    <TemporaryDrawer />
    <PaginationRounded />
    </ParallaxSections>
    </ThemeProvider>
  )
}

export default App
