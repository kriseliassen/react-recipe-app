/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import LikedRecipes from './components/LikedRecipes';
import About from './components/About';
import Search from './components/Search'
import Recipe from './components/Recipe'
import Recipes from './components/Recipes';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [searchTags, setSearchTags] = useState(null)
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [likedRecipes, setLikedRecipes] = useState([])
  
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedRecipe === null) {
      return
    }
    navigate(`/recipes/${clickedRecipe.title}`);
  }, [clickedRecipe])

  useEffect(() => {
    const localStorageData = localStorage.getItem('likedRecipes');
    setLikedRecipes(localStorageData ? JSON.parse(localStorageData) : []);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
  }, [likedRecipes]);

  const fetchData = async (tags) => {
    const path = `/api/random/${tags}`
    await fetch(path)
      .then(res => res.json())
      .then(data => setRecipes(data));
    return
  }

  const getRecipes = async (tags) => {
    await fetchData(tags);
    navigate('/recipes')
  };

  const getRandomRecipe = async (tags) => {
    await fetchData(tags);
    navigate('/recipes')
  }

  const addLikedRecipe = (recipe) => {
    setLikedRecipes([...likedRecipes, recipe]);
  }

  const removeLikedRecipe = (recipe) => {
    const updatedList = likedRecipes.filter(item => item.id !== recipe.id)
    setLikedRecipes(updatedList);
    const recipeInState = recipes.find(item => item.id === recipe.id)
    const updatedRecipe = {...recipeInState, isLiked: false}
    const updatedState = recipes.map(item => item.id === updatedRecipe.id ? updatedRecipe : item)
    setRecipes(updatedState)
  }

  return (
    <div className="App__container">
        <div className="App__navbar--container">
          <p className="App__navbar--logo">What's for dinner?</p>
          <Navbar recipes={recipes}/>
        </div>
        <Routes>
          <Route path="/" element={<Search getRandomRecipe={getRandomRecipe} getRecipes={getRecipes} searchTags={searchTags} setSearchTags={setSearchTags}/>}/>
          <Route path="/recipes" element={<Recipes recipes={recipes} setClickedRecipe={setClickedRecipe} searchTags={searchTags} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
          <Route path="/recipes/:title" element={<Recipe recipe={clickedRecipe} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
          <Route path="/favourites" element={<LikedRecipes likedRecipes={likedRecipes} addLikedRecipe={addLikedRecipe} setClickedRecipe={setClickedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
          <Route path="/about" element={<About />}/>
        </Routes>
    </div>
  );
}

export default App;
