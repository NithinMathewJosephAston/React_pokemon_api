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
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Chip } from '@mui/material';

export default function TemporaryDrawer() {
    
    const { drawerOpen, selectedRow, setDrawerOpen} = usePokedex();
    console.log(selectedRow);
    const DrawerList = (
    <Box sx={{ width: 300, padding: 2 }}>
      <List>
        <ListItem key="INFO" disablePadding sx={{color:'pink'}}>
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
                <ExpandLessIcon sx={{ color: 'pink' }} />
            </ListItemIcon>
            <ListItemText primary="INFO" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ padding: 2 }}>
        {selectedRow && (
        <>
          <div style={{color:'pink'}} className='font-medium'>{selectedRow.species.name}</div>
          {selectedRow.types && (
          <div>
          <h4 className='font-small' style={{color:'pink'}}>TYPE:</h4>
          {selectedRow.types.map((type, index) => (
            <Chip color="secondary" key={index} label={type.type.name.toUpperCase()} sx={{ mr:1, fontSize:'8px'}}/>
          ))}
          </div>
          )}
          <img src={selectedRow.sprites.front_default} alt={selectedRow.name} width={200} height={200} />
          <div style={{marginBottom: '2rem'}}>HT {selectedRow.height} WT {selectedRow.weight} lbs</div>
          {selectedRow.abilities && (
          <div>
            <h4 className='font-small' style={{color:'pink'}}>ABILITIES:</h4>
            {selectedRow.abilities.map((ability, index) => (
              <Chip color="secondary" key={index} label={ability.ability.name.toUpperCase()} sx={{ mr:1, fontSize:'8px'}}/>
            ))}
          </div>
          )}
          {selectedRow.moves && (
          <div>
          <h4 className='font-small' style={{color:'pink'}}> MOVES:</h4>
          {selectedRow.moves?.slice(0,8).map((move, index) => (
            <Chip key={index} color="secondary" label={move.move.name.toUpperCase()} sx={{mt:1,  mr:1, fontSize:'8px'}}/>
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
              backgroundColor: 'Purple',
              color: 'white',
            },
          },
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
