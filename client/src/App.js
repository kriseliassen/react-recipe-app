/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import LikedRecipes from './components/LikedRecipes';
import About from './components/About';
import Search from './components/Search'
import Recipes from './components/Recipes';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [searchTags, setSearchTags] = useState(null)
  const [likedRecipes, setLikedRecipes] = useState([])
  // console.log('recipes', recipes)
  // console.log('clicked', clickedRecipe)
  // console.log('tags', searchTags)
  // console.log('liked', likedRecipes)
  
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageData = localStorage.getItem('likedRecipes');
    setLikedRecipes(localStorageData ? JSON.parse(localStorageData) : []);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
  }, [likedRecipes]);

  const fetchData = async (tags = 'salad') => {
    const path = `/api/random/${tags}`
    await fetch(path)
      .then(res => res.json())
      .then(data => {
        const recipesData = JSON.parse(data);
        setRecipes(recipesData.recipes)
      })
      // .then(data => setRecipes(data));
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
  }

  return (
    <div className="App">
      <Navbar recipes={recipes}/>
      <Routes>
        <Route path="/" element={<Search getRandomRecipe={getRandomRecipe} getRecipes={getRecipes} searchTags={searchTags} setSearchTags={setSearchTags}/>}/>
        <Route path="/recipes" element={<Recipes recipes={recipes} searchTags={searchTags} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
        <Route path="/liked" element={<LikedRecipes likedRecipes={likedRecipes} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
