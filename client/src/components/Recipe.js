import React from 'react'
import parser from 'html-react-parser';
import { IoHeartOutline } from 'react-icons/io5'

const Recipe = ({recipe}) => {
  const instructions = recipe ? parser(recipe.instructions) : '';
  return (
      <div>
        <h1>{recipe.title}</h1>
        <p><IoHeartOutline /></p>
        <img src={recipe.image} alt="img"/>
        <div>
          <p>Time to make: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <div>Suitable for: {recipe.diets.map(diet => <p key={diet}>{diet}</p>)}</div>
        </div>
        <div>{recipe.extendedIngredients.map(item => <p key={item.id}>{item.originalString}</p>)}</div>
        <div>{instructions}</div>
      </div>
  )
}

export default Recipe;
