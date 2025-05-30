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

function App() {

  const [offset, setOffset] = useState(0);
  

  return (
    <ThemeProvider theme={theme}>
    <SearchAppBar />
    <ParallaxSections>
    <h1 style={{fontSize: '40px', marginTop: '80px', padding: '16px', color: 'white'}}><ScrambleWithSound label='Pokedex' /></h1>
    <PokemonViewer offset={offset} setOffset={setOffset}/>
    <TemporaryDrawer />
    <PaginationRounded />
    </ParallaxSections>
    </ThemeProvider>
  )
}

export default App
