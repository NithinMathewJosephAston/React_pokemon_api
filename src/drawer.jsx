import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { usePokedex } from './pokedexContext';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Chip } from '@mui/material';

export default function TemporaryDrawer() {
    
  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };
  
    const { drawerOpen, selectedRow, setDrawerOpen} = usePokedex();
    const primaryType = selectedRow?.types?.[0]?.type?.name;
    const DrawerList = (
    <Box sx={{ width: 350, padding: 2 }}>
      <List sx={{ backgroundColor: typeColors[primaryType], color:'white','& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: 'white',},}}>
        <ListItem key="INFO" disablePadding sx={{color:'purple'}}>
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemIcon sx={{ color: 'inherit' }}>
                <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText primary="INFO" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* <Divider /> */}
      <Box sx={{ padding: 2 }}>
        {selectedRow && (
        <>
          <div style={{color:typeColors[primaryType]}} className='font-medium'>{selectedRow.species.name}</div>
          {selectedRow.types && (
          <div>
          <h4 className='font-small' style={{color:'purple'}}>TYPE:</h4>
          {selectedRow.types.map((type, index) => (
            <Chip key={index} label={type.type.name.toUpperCase()} sx={{ mr:1, fontSize:'8px', backgroundColor:typeColors[type.type.name], color: 'white'}}/>
          ))}
          </div>
          )}
          <img src={selectedRow.sprites.front_default} alt={selectedRow.name} width={200} height={200} />
          <div style={{marginBottom: '2rem', color:typeColors[primaryType]}}>HT {selectedRow.height} WT {selectedRow.weight} lbs</div>
          {selectedRow.abilities && (
          <div>
            <h4 className='font-small' style={{color:'purple'}}>ABILITIES:</h4>
            {selectedRow.abilities.map((ability, index) => (
              <Chip key={index} label={ability.ability.name.toUpperCase()} sx={{ mt:1, mr:1, fontSize:'8px', backgroundColor:typeColors[primaryType], color:'white'}}/>
            ))}
          </div>
          )}
          {selectedRow.moves && (
          <div>
          <h4 className='font-small' style={{color:'purple'}}> MOVES:</h4>
          {selectedRow.moves?.slice(0,8).map((move, index) => (
            <Chip key={index} label={move.move.name.toUpperCase()} sx={{mt:1,  mr:1, fontSize:'8px', backgroundColor:typeColors[primaryType], color:'white'}}/>
          ))}
          </div>
          )}
        </>
        )}
      </Box>
    </Box>
    );

  return (
    <div>
      <Drawer anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx:{
              backgroundColor: 'rgba(230, 225, 255, 1)',
              color: 'purple',
            },
          },
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
