import React, { useEffect, useState } from 'react';
import BasicTable from './table';

function PokemonViewer() {
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);

  let offset = 0;
  const limit = 10;

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

  return (<div style={{ marginTop: '80px', padding: '16px' }}>
  <BasicTable pokedex={pokedex} limit={limit} offset={offset}/>
  </div>);
}

export default PokemonViewer;
