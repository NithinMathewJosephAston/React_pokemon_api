import './App.css'
import SearchAppBar from './appBar.jsx'
import PokemonViewer from './pokemonDetails.jsx'
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import theme from './theme';


function App() {

  const [offset, setOffset] = useState(0);
  

  return (
    <ThemeProvider theme={theme}>
    <SearchAppBar />
    <PokemonViewer offset={offset} setOffset={setOffset}/>
    </ThemeProvider>
  )
}

export default App
