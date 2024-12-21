import React from 'react'

import "./Navbar.css"

// Importando os links para o header
import {Link} from 'react-router-dom'

const Navbar = () => {

  // criação do header do blog:
  return (
    <nav className="navbar">
      {/* Link com 'L' MAIÚSCULO.  */}
      <h2>
        <Link to={`/`}>Blogs</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">Novo Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar