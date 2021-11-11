import React from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({recipes, searchTags, addLikedRecipe, removeLikedRecipe, setClickedRecipe}) => {
  let title = searchTags;
  if (title === 'dinner') {
    title = 'any dinners'
  }
  if (title === 'breakfast') {
    title = 'breakfast for dinner'
  }

  return (
    <div >
      <h1>Recipes for</h1>
      <h2>{title}</h2>
      {recipes && recipes.map(recipe => 
        <RecipeCard recipe={recipe} key={recipe.id} setClickedRecipe={setClickedRecipe}  addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>)}
    </div>
  )
}

export default Recipes