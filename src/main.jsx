import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokedexProvider } from './pokedexContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokedexProvider>
    <App />
    </PokedexProvider>
  </StrictMode>,
)
