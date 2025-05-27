import './App.css'
import SearchAppBar from './appBar.jsx'
import PokemonViewer from './pokemonDetails.jsx'
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import TemporaryDrawer from './drawer.jsx'
import theme from './theme';


function App() {

  const [offset, setOffset] = useState(0);
  

  return (
    <ThemeProvider theme={theme}>
    <SearchAppBar />
    <h1 style={{fontSize: '30px', marginTop: '80px', padding: '16px', color: 'white'}}>Pokedex</h1>
    <PokemonViewer offset={offset} setOffset={setOffset}/>
    <TemporaryDrawer />
    </ThemeProvider>
  )
}

export default App
