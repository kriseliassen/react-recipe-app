import React from 'react'
import parser from 'html-react-parser';
import { IoHeartOutline } from 'react-icons/io5'
import '../styles/Recipe.css'

const Recipe = ({recipe}) => {
  const instructions = recipe ? parser(recipe.instructions) : '';
  const diets = recipe.diets.join(', ')

  return (
      <div className="Recipe__container">
        <h1 className="Recipe__header">{recipe.title}</h1>
        <img src={recipe.image || 'https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80'} alt="img" className="Recipe__image"/>
        <div className="Recipe__details">
          <p className="Recipe__details--text RecipeCard__details-time"><span className="text--bold">Time to make:</span> {recipe.readyInMinutes} minutes</p>
          <p className="Recipe__details--text Recipe__details--text-servings"><span className="text--bold">Servings:</span> {recipe.servings}</p>
          <div className="Recipe__text--details Recipe__diets"> {diets}
          </div>
        </div>
        <div className="Recipe__text--container">
          <div className="Recipe__text Recipe__ingredients">
            <h3 className="Recipe__ingredients--header">Ingredients</h3>
            <div className="Recipe__ingredients--list">
              {recipe.extendedIngredients.map(item => (<span key={item.id}className="Recipe__text Recipe__ingredient-item">{item.originalString}</span>))}
            </div>
          </div>
          <div className="Recipe__text Recipe__instructions">
            <h3 className="Recipe__instructions--header">Instructions</h3>
            <div className="Recipe__instructions--text">{instructions}</div>
          </div>
        </div>
      </div>
  )
}
export default Recipe;