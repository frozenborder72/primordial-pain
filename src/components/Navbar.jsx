import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="logo">Primordial Pain</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Horibudo I</Link>
          </li>
          <li>
            <Link to="/">Artists</Link>
          </li>
          <li>
            <Link to="/">The Book</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
