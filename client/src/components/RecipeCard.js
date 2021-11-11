/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { IoHeartOutline } from 'react-icons/io5'
import '../styles/RecipeCard.css'

const RecipeCard = ({recipe, setClickedRecipe, addLikedRecipe, removeLikedRecipe}) => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const objectLikedInRecipe = recipe.isLiked
    if(objectLikedInRecipe) {
      setIsLiked(true)
    }
    return
  }, [])

  const handleClick = () => {
    console.log('click click')
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

  const diets = recipe.diets.join(', ')

  return (
    <div onClick={handleClick} className="RecipeCard__container">
        <img src={recipe.image} alt="img" className="RecipeCard__image"/>
        <div className="RecipeCard__text">
          <h3 className="RecipeCard__text--title">{recipe.title}</h3>
          <p className="RecipeCard__text--details RecipeCard__text--time"><span className="text--bold">Time to make: </span>{recipe.readyInMinutes} minutes</p>
          <p className="RecipeCard__text--details RecipeCard__servings"><span className="text--bold">Servings: </span>{recipe.servings}</p>
          <div className="RecipeCard__text--details RecipeCard__diets"> {diets}
          </div>
        </div>
        <p onClick={toggleLike} className={`RecipeCard__heart ${isLiked ? "liked" : null}`}><IoHeartOutline /></p>
    </div>
  )
}

export default RecipeCard
