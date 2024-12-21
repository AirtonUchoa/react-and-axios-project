import { useState } from 'react'

import Navbar from './components/Navbar'

// para que a home estaja no caminho '/home' do site:
import {Outlet} from "react-router-dom"


import './App.css'

// PROJETO DE REACT UTILIZANDO A BIBLIOTECA AXIOS

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
