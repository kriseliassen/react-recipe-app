/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { IoHeartOutline } from 'react-icons/io5'
import './RecipeCard.css'

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

  return (
    <div onClick={handleClick} className="RecipeCard__container">
        <img src={recipe.image} alt="img" className="RecipeCard__image"/>
        <div className="RecipeCard__text">
          <h3 className="RecipeCard__text--details RecipeCard__text--title">{recipe.title}</h3>
          <p className="RecipeCard__text--details RecipeCard__text--time">Time to make: {recipe.readyInMinutes} minutes</p>
          <p className="RecipeCard__text--details RecipeCard__servings">Servings: {recipe.servings}</p>
          <div className="RecipeCard__text--details RecipeCard__diets"> Suitable for
            {recipe.diets.map(item => <p key={item} className="RecipeCard__diets--diet">{item}</p>)}
          </div>
        </div>
        <p onClick={toggleLike} className={`RecipeCard__heart ${isLiked ? "liked" : null}`}><IoHeartOutline /></p>
    </div>
  )
}

export default RecipeCard
