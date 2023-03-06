import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleHamburger = () => setIsMenuOpen(isMenuOpen ? false : true)
  const closeMenuIfOpen = () => isMenuOpen && setIsMenuOpen(false)

  return (
    <header className="header">
      <Link className="logo" to="/">
        Primordial Pain
      </Link>

      <div
        className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleHamburger}>
        <div className="menu-btn__lines"></div>
      </div>

      <nav className="main-navigation">
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li className="menu-item">
            <Link to="/artists/horibudo-i" onClick={closeMenuIfOpen}>
              Horibudo I
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/artists" onClick={closeMenuIfOpen}>
              Guest Artists
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/the-book" onClick={closeMenuIfOpen}>
              The Book
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" onClick={closeMenuIfOpen}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
