import React from 'react'
import parser from 'html-react-parser';
import '../styles/Recipe.css'

const Recipe = ({recipe}) => {
  const instructions = recipe ? parser(recipe.instructions) : '';
  const diets = recipe.diets.join(', ')
  return (
      <div className="Recipe__container">
        <div className="Recipe__flag--favourite">Favourite</div>
        <h1 className="Recipe__header">{recipe.title}</h1>
        <img src={recipe.image} alt="img" className="Recipe__image"/>
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
              {recipe.extendedIngredients.map(item => <p key={item.id}className="Recipe__text Recipe__ingredient-item">{item.originalString}</p>)}
            </div>
          </div>
          <div className="Recipe__text Recipe__instructions">
            <h3 className="Recipe__instructions--header">Instructions</h3>
            <p className="Recipe__instructions--text">{instructions}</p>
          </div>
        </div>
      </div>
  )
}
export default Recipe;