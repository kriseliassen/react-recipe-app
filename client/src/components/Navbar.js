import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
// import {GrSearch} from 'react-icons/gr';

const Navbar = ({recipes}) => {
  return (
    <div className="Navbar__menu">
      <Link to="/about" className="Navbar__menu-item">About</Link>
      <Link to="/" className="Navbar__menu-item">Search</Link>
      {recipes && <Link to="/recipes"className="Navbar__menu-item">Recipes</Link>}
      <Link to="/favourites"className="Navbar__menu-item">Favourites</Link>
    </div>
  )
}

export default Navbar
