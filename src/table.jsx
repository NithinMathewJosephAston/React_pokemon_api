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
    const { offset, pokedex, setDrawerOpen, setSelectedRow} = usePokedex();
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
                    sprite: img_png.sprites.front_default,
                    url: pokemon.url
                  }
                };
                setRows(prev => ({...prev, ...row}))
            })
            
        }
    },[offset, pokedex])
    
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
      <Table sx={{ width: "100%"}} aria-label="pokemon table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', borderBottom: 'none' }} style={{fontSize: '20px'}}>Sl. No</TableCell>
            <TableCell align="right" sx={{ color: 'white', borderBottom: 'none' }} style={{fontSize: '20px'}}>Pokemon Name</TableCell>
            <TableCell align="right" sx={{ color: 'white', borderBottom: 'none' }} style={{fontSize: '20px'}}>Pokemon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rows).map(([index, row]) => (
            <TableRow key={index} hover
            onClick={() => {
              fetch(row.url)
                .then(res => res.json())
                .then(data => {
                  setSelectedRow(data);      // full JSON info
                  setDrawerOpen(true);       // open the Drawer
                });
            }} 
            sx={{ backgroundColor: 'transparent', '&:hover td': {
                  backgroundColor: 'rgba(138, 43, 226, 0.3)', color: 'black'}
                }}>
              <TableCell sx={{ color: 'white', borderBottom: 'none' }} style={{fontSize: '18px'}}>{row.serial}</TableCell>
              <TableCell align="right" sx={{ color: 'white', borderBottom: 'none' }} style={{fontSize: '18px'}}>{row.name}</TableCell>
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
