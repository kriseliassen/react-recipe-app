import React from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
import '../styles/Recipes.css';

const Recipes = ({recipes, searchTags, addLikedRecipe, removeLikedRecipe, setClickedRecipe}) => {
  let title = searchTags;
  if (title === 'dinner') {
    title = 'any dinners'
  }
  if (title === 'breakfast') {
    title = 'breakfast for dinner'
  }

  if (recipes.length === 0){
    return <div className="Recipes__container">
      <h1 className="Recipes__header">Recipes</h1>
      <div className="Recipes__empty">
        <p className="Recipes__empty-text">Oh no, we have no suggested recipes for this keyword right now. Try something else!</p>
        <Link to="/" className="Recipes__empty-text">Go back to search</Link>
      </div>
    </div>
  }
  
  if (recipes) {
    return <div className="Recipes__container">
        <h1 className="Recipes__header">Recipes for<span className="Recipes__header--search-term">{title}</span></h1>
        {recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} setClickedRecipe={setClickedRecipe}  addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>)}
        <Link to="/" className="Recipes__btn-goBack">Try another keyword</Link>
  </div>
  }
  
}

export default Recipes
