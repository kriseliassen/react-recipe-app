/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
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
  const [searchTags, setSearchTags] = useState([])
  const [likedRecipes, setLikedRecipes] = useState([])
  // console.log('recipes', recipes)
  // console.log('clicked', clickedRecipe)
  // console.log('tags', searchTags)
  console.log('liked', likedRecipes)
  
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedRecipe === null) {
      return
    }
    navigate(`/recipes/${clickedRecipe.title}`);
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
    await fetchData(meal);
    navigate('/recipes')
  }

  const addLikedRecipe = (recipe) => {
    setLikedRecipes([...likedRecipes, recipe]);
  }

  const removeLikedRecipe = (recipe) => {
    const updatedList = likedRecipes.filter(item => item.id !== recipe.id)
    setLikedRecipes(updatedList);
  }

  return (
    <div className="App">
      <Navbar recipes={recipes}/>
      <Routes>
        <Route path="/" element={<Search getRandomRecipe={getRandomRecipe} searchTags={searchTags} setSearchTags={setSearchTags}/>}/>
        <Route path="/recipes" element={<Recipes recipes={recipes} setClickedRecipe={setClickedRecipe} searchTags={searchTags} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
        <Route path="/recipes/:title" element={<Recipe recipe={clickedRecipe} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
        <Route path="/liked" element={<LikedRecipes likedRecipes={likedRecipes}/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
