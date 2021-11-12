import React from 'react'
import RecipeCard from './RecipeCard'
import '../styles/LikedRecipes.css'

const LikedRecipes = ({ likedRecipes, setClickedRecipe, addLikedRecipe, removeLikedRecipe }) => {
  return (
    <div className="Liked__container">
      <h1 className="Liked__header">Your favourite recipes</h1>
      {likedRecipes.length === 0 && <p className="Liked__text--empty">You have no favourite recipes yet. Try searching for some new recipes first and click the heart on the ones you want to save!</p>}
      {likedRecipes && likedRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.image} setClickedRecipe={setClickedRecipe}  addLikedRecipe={addLikedRecipe} removeLikedRecipe={removeLikedRecipe}/>)}
    </div>
  )
}

export default LikedRecipes
