import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RoutesHandler from './RoutesHandler.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesHandler />
    </BrowserRouter>
  </React.StrictMode>
)
