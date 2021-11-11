import React from 'react'
import parser from 'html-react-parser';

const Recipe = ({recipe}) => {
  const instructions = recipe ? parser(recipe.instructions) : '';
  return (
      <div>
        <p>I am a full recipe</p>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt="img"/>
        <div>{instructions}</div>
      </div>
  )
}

export default Recipe;
