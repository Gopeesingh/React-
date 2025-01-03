import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Service from './components/Service/Service.jsx'
import Gallary from './components/Gallary/Gallary.jsx'
import Clients from './components/Clients/Clients.js'
import Contact from './components/Contact/Contact.jsx'

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service />} />
      <Route path='gallary' element={<Gallary />} />
      <Route path='clients' element={<Clients />} />
      <Route path='contact' element={<Contact />} />
  </ Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
