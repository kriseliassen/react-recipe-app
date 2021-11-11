import React from 'react'
import parser from 'html-react-parser';

const Recipe = ({recipe}) => {
  const instructions = recipe ? parser(recipe.instructions) : '';

  return (
      <div className="Recipe__container">
        <div className="Recipe__flag--favourite">Favourite</div>
        <h1 className="Recipe__header">{recipe.title}</h1>
        <img src={recipe.image} alt="img" className="Recipe__image"/>
        <div className="Recipe__details">
          <p className="Recipe__details--text RecipeCard__details-time">Time to make: {recipe.readyInMinutes} minutes</p>
          <p className="Recipe__details--text Recipe__details--text-servings">Servings: {recipe.servings}</p>
          <div className="Recipe__details--text Recipe__details--text-diets">Suitable for: {recipe.diets.map(diet => <p key={diet} className="Recipe__details--text Recipe__details--diet">{diet}</p>)}</div>
        </div>
        <div className="Recipe__text--container">
          <div className="Recipe__text Recipe__ingredients">{recipe.extendedIngredients.map(item => <p key={item.id}className="Recipe__text Recipe__ingredient-item">{item.originalString}</p>)}</div>
          <div className="Recipe__text Recipe__instructions">{instructions}</div>
        </div>
      </div>
  )
}
export default Recipe;