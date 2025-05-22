import React, { useEffect, useState } from 'react';
import { usePokedex } from './pokedexContext';
import BasicTable from './table';

function PokemonViewer() {
  const { offset, pokedex, setPokedex, limit } = usePokedex();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch from PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((result) => result.json())
      .then((data) => {
        setPokedex(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      });
  },[]); 

  if (loading) return <p>Loading...</p>;
  if (!pokedex) return <p>No data.</p>;

  return (<div style={{ marginTop: '20px', padding: '16px' }}>
  <BasicTable/>
  </div>);
}

export default PokemonViewer;
