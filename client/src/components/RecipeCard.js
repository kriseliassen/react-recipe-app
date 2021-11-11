import React, { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5'
import './RecipeCard.css'

const RecipeCard = ({recipe, setClickedRecipe, addLikedRecipe, removeLikedRecipe}) => {
  const [isLiked, setIsLiked] = useState(false)
  console.log(isLiked)
  const handleClick = () => {
    setClickedRecipe(recipe)
  };

  const toggleLike = (e) => {
    e.stopPropagation()
    if (!isLiked) {
      addLikedRecipe({...recipe, isLiked: true})
      setIsLiked(true); 
    } else {
      removeLikedRecipe(recipe)
      setIsLiked(false); 
    }
  };

  return (
    <div onClick={handleClick}>
        <img src={recipe.image} alt="img"/>
        <div className="RecipeCard__text">
          <h3>{recipe.title}</h3>
          <p>Time to make: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <div>Suitable for: {recipe.diets.map(diet => <p key={diet}>{diet}</p>)}</div>
        </div>
        <p onClick={toggleLike} className={isLiked ? "liked" : null}><IoHeartOutline /></p>
    </div>
  )
}

export default RecipeCard
