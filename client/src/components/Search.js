import React from 'react'

const Search = ({getRandomRecipe}) => {

  const handleClick = (meal) => {
    getRandomRecipe(meal);
  }

  return (
    <div>
      I am the form and the Search page
      <button onClick={() => handleClick('dinner')}>Click for random dinner</button>
      <button onClick={() => handleClick('breakfast')}>Click for random breakfast</button>
    </div>
  )
}

export default Search
