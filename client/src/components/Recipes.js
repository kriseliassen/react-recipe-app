import React from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({recipes, setClickedRecipe, searchTags, addLikedRecipe, removeLikedRecipe}) => {
  let title;
  let tags = [...searchTags]
  if (tags.length !== 0) {
    const dinnerIndex = tags.findIndex(tag => tag === 'dinner');
    const breakfastIndex = tags.findIndex(tag => tag === 'breakfast');
    if (dinnerIndex >= 0 && dinnerIndex !== tags.length - 1) {
      tags.splice(dinnerIndex, 1)
      title = tags.join(', ');
      title = `dinners: ${title}`;
    } else if (breakfastIndex >= 0 && breakfastIndex !== tags.length - 1) {
      tags.splice(breakfastIndex, 1)
      title = tags.join(', ');
      title = `breakfasts: ${title}`;
    } else if (breakfastIndex >= 0) {
      title = 'any breakfasts'
    } else if (dinnerIndex >= 0) {
      title = 'any dinners'
    }
  }
  return (
    <div >
      <h1>Recipes for</h1>
      <h2>{title}</h2>
      {recipes && recipes.map(recipe => 
        <RecipeCard recipe={recipe} key={recipe.id} setClickedRecipe={setClickedRecipe} addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>)}
    </div>
  )
}

export default Recipes
