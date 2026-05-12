import React, { useEffect, useState } from 'react';
import { usePokedex } from './pokedexContext';
import BasicTable from './table';

function PokemonViewer() {
  const { offset, pokedex, setPokedex, limit, setPokemonCount } = usePokedex();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch from PokeAPI
    fetch(`http://localhost:8000/api/pokemon?limit=${limit}&offset=${offset}`)
      .then((result) => result.json())
      .then((data) => {
        setPokedex(data);
        setLoading(false);
        setPokemonCount(data.count);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      });
  },[offset]); 

  if (loading) return <p>Loading...</p>;
  if (!pokedex) return <p>No data.</p>;

  return (<div style={{ marginTop: '20px', padding: '16px' }}>
  <BasicTable/>
  </div>);
}

export default PokemonViewer;
