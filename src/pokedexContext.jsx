import React, { createContext, useContext, useState } from 'react';

const PokedexContext = createContext();

export const usePokedex = () => useContext(PokedexContext);

export const PokedexProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [pokedex, setPokedex] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [pokemonCount, setPokemonCount] = useState(0);
  const limit = 10;

  return (
    <PokedexContext.Provider value={{ offset, setOffset, pokedex, setPokedex, drawerOpen, setDrawerOpen, selectedRow, setSelectedRow, limit, pokemonCount, setPokemonCount, soundEnabled, setSoundEnabled }}>
      {children}
    </PokedexContext.Provider>
  );
};
