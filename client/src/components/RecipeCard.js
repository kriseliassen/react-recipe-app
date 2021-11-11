import React, { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5'
import './RecipeCard.css'

const RecipeCard = ({recipe, setClickedRecipe, addLikedRecipe, removeLikedRecipe}) => {
  const [isLiked, setIsLiked] = useState(false)
  const handleClick = () => {
    setClickedRecipe(recipe)
  };

  const toggleLike = (e) => {
    e.stopPropagation()
    if (!liked) {
      addLikedRecipe({...recipe, isLiked: true})
      setIsLiked(true); 
    } else {
      removeLikedRecipe(recipe)
      setIsLiked(false); 
    }
  };

  const objectLikedInRecipe = recipe.isLiked
  const liked = isLiked || objectLikedInRecipe;

  return (
    <div onClick={handleClick}>
        <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt="img"/>
        <div className="RecipeCard__text">
          <h3>{recipe.title}</h3>
          <p>Time to make: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <div>See recipe: {recipe.sourceUrl}</div>
        </div>
        <p onClick={toggleLike} className={liked ? "liked" : null}><IoHeartOutline /></p>
    </div>
  )
}

export default RecipeCard
