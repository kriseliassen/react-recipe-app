import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({recipes}) => {
  console.log('recipes in nav', recipes)
  return (
    <div>
      <Link to="/">Search</Link>
      {recipes && <Link to="/recipes">Recipes</Link>}
      <Link to="/liked">My recipes</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
