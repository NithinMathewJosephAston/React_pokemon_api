import './App.css'
import SearchAppBar from './AppBar.jsx'
// import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';


function App() {

  // const theme = createTheme({
  //   typography: {
  //     fontFamily: 'Press Start 2P',
  //   },
  // });
  

  return (
    <div className='pixel-font'>
    <SearchAppBar />
    </div>
  )
}

export default App
