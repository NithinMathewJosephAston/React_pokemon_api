import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { usePokedex } from './pokedexContext';

export default function PaginationRounded() {
  const { offset, setOffset, limit, pokemonCount } = usePokedex();
  return (
    <Stack spacing={2}>
      <Pagination count={Math.ceil(pokemonCount / limit)} // totalPokemons can be hardcoded as 1300 or fetched from API
        page={offset / limit + 1}
        onChange={(event, value) => setOffset((value - 1) * limit)}
        sx={{ 
            mt: 4, 
            display: 'flex', 
            justifyContent: 'center', 
            '& .MuiPaginationItem-root': 
            { 
                color: 'white',
             },
            '& .Mui-selected': 
            {
                backgroundColor: 'white',
                color: 'purple',
            },
            '& .MuiPaginationItem-root:hover': 
            {
                backgroundColor: 'red', // hover color
            }
            }} variant="outlined" shape="rounded" />
    </Stack>
  );
}