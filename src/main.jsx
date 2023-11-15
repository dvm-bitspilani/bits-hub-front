import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './routes/LandingPage.jsx'
import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <h1>home</h1>,
  },
  {
    path: '/login',
    element: <h1>login</h1>,
  },
  {
    path: '/events',
    element: <h1>events</h1>,
  },
  {
    path: '/clubs',
    element: <h1>clubs</h1>,
  },
  //....... add more routes
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
