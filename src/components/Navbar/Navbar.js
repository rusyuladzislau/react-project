import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/profile/">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs/">Dialogs</NavLink>
      </div>
      <div>
        <NavLink to="/music/">Music</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;