import React from 'react'

const Search = ({getRandomRecipe, searchTags, setSearchTags}) => {

  const handleBtnClick = (meal) => {
    setSearchTags([meal])
    getRandomRecipe(meal);
  }

  return (
    <div>
      <h2>What do you want for dinner?</h2>
      <p>Search using your own keywords or click some of our suggestions</p>
      <button onClick={() => handleBtnClick('dinner')}>Click for random dinner</button>
      <button onClick={() => handleBtnClick('breakfast')}>Click for random breakfast</button>
    </div>
  )
}

export default Search
