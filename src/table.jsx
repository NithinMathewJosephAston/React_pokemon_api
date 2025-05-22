import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usePokedex } from './pokedexContext';


export default function BasicTable() {
    const { offset, pokedex} = usePokedex();
    const[rows, setRows] = useState({});

    useEffect(() => {
        for (let index = 0; index < pokedex.results.length; index++) {
            const pokemon = pokedex.results[index];
            // console.log(limit);
            fetch(pokemon.url).then(d => d.json()).then(img_png => {
                let row = {
                  [index + 1]: {
                    serial: "No." + String(offset + index + 1).padStart(3, '0'),
                    name: pokemon.name,
                    sprite: img_png.sprites.front_default
                  }
                };
                setRows(prev => ({...prev, ...row}))
            })
            
        }
    },[offset, pokedex])
    
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
      <Table sx={{ minWidth: 650 }} aria-label="pokemon table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', borderBottom: 'none' }}>Sl. No</TableCell>
            <TableCell align="right" sx={{ color: 'white', borderBottom: 'none' }}>Pokemon Name</TableCell>
            <TableCell align="right" sx={{ color: 'white', borderBottom: 'none' }}>Pokemon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rows).map(([index, row]) => (
            <TableRow key={index} sx={{
              backgroundColor: 'transparent', '&:hover': {
                backgroundColor: 'purple'}, '&:hover td': { color: 'yellow'}
                }}>
              <TableCell sx={{ color: 'white', borderBottom: 'none' }}>{row.serial}</TableCell>
              <TableCell align="right" sx={{ color: 'white', borderBottom: 'none' }}>{row.name}</TableCell>
              <TableCell align="right" sx={{ borderBottom: 'none' }}>
                <img src={row.sprite} alt={row.name} width={150} height={150} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
