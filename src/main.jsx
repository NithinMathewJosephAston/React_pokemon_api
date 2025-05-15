import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchAppBar from './AppBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchAppBar />
    <App />
  </StrictMode>,
)
