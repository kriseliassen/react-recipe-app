/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Search from './components/Search'
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(null);
  console.log('state: recipes,', recipes)

  const getRandomRecipe = (meal) => {
    fetch(`/api/random/${meal}`)
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
  }
  return (
    <div className="App">
      <Navbar />
      <Search getRandomRecipe={getRandomRecipe}/>
      {/* {recipes && recipes.map(recipe => 
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image}/>
        </div>
      )} */}
    </div>
  );
}

export default App;
