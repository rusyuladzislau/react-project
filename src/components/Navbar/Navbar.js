import React from 'react'
import './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Music</a> 
      </div>
    </nav>
  )
}

export default Navbar;