import React from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({recipes, setClickedRecipe}) => {
  return (
    <div >
      I am a recipe list
      {recipes && recipes.map(recipe => 
        <RecipeCard recipe={recipe} key={recipe.id} setClickedRecipe={setClickedRecipe} />
      )}
    </div>
  )
}

export default Recipes
