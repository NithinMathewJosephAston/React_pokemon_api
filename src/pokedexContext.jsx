import React, { createContext, useContext, useState } from 'react';

const PokedexContext = createContext();

export const usePokedex = () => useContext(PokedexContext);

export const PokedexProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [pokedex, setPokedex] = useState([]);
  const limit = 10;

  return (
    <PokedexContext.Provider value={{ offset, setOffset, pokedex, setPokedex, limit }}>
      {children}
    </PokedexContext.Provider>
  );
};
