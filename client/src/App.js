/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import LikedRecipes from './components/LikedRecipes';
import About from './components/About';
import Search from './components/Search'
import Recipes from './components/Recipes';
import Recipe from './components/Recipe'
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [clickedRecipe, setClickedRecipe] = useState(null);
  console.log('recipes', recipes)
  console.log('clicked', clickedRecipe)
  
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedRecipe === null) {
      return
    }
    navigate(`/recipes/${clickedRecipe.id}`);
  }, [clickedRecipe])

  const fetchData = async (meal, tags) => {
    await fetch(`/api/random/${meal}`)
      .then(res => res.json())
      .then(data => {
        const recipesData = JSON.parse(data);
        setRecipes(recipesData.recipes)
      })
      // .then(data => setRecipes(data.recipes));
    return
  }

  const getRandomRecipe = async (meal) => {
    console.log('clicked', meal);
    await fetchData(meal);
    navigate('/recipes')
  }

  return (
    <div className="App">
      <Navbar recipes={recipes}/>
      <Routes>
        <Route path="/" element={<Search getRandomRecipe={getRandomRecipe}/>}/>
        <Route path="/recipes" element={<Recipes recipes={recipes} setClickedRecipe={setClickedRecipe} />}/>
        <Route path="/liked" element={<LikedRecipes />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipes/:id" element={<Recipe recipe={clickedRecipe}/>}/>
      </Routes>
    </div>
  );
}

export default App;
