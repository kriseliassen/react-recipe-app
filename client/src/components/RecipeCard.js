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
        <img src={recipe.image || 'https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80'} alt="img" className="RecipeCard__image"/>
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
