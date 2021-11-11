import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({recipes}) => {
  return (
    <div>
      <Link to="/">Search</Link>
      {recipes && <Link to="/recipes">Recipes</Link>}
      <Link to="/favourites">Favourites</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
