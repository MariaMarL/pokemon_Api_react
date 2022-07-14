import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import AppRoutes from './routes/AppRoutes'
import NavBar from './routes/NavBarLogged'

function App() {
  

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
