/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(null);
  console.log('state: recipes,', recipes)

  const getRandomRecipe = () => {
    fetch("/api/random")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
  }

  const handleClick = () => {
    getRandomRecipe()
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <button onClick={handleClick}>Click for random</button>
      {recipes && recipes.map(recipe => 
      <div key={recipe.id}>
        <p>{recipe.title}</p>
        <img src={recipe.image}/>
      </div>
      )}
    </div>
  );
}

export default App;
