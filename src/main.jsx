import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Weatherapp } from './Weatherapp'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weatherapp/>
  </StrictMode>,
)
