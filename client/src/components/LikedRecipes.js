import React from 'react'
import RecipeCard from './RecipeCard'

const LikedRecipes = ({ likedRecipes, setClickedRecipe, addLikedRecipe, removeLikedRecipe }) => {
  return (
    <div >
      <h1>Your favourite recipes</h1>
      {likedRecipes && likedRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.image} setClickedRecipe={setClickedRecipe}  addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>)}
        
    </div>
  )
}

export default LikedRecipes
