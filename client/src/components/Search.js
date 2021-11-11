import React, { useState } from 'react'

const Search = ({getRandomRecipe, getRecipes, setSearchTags}) => {
  const [value, setValue] = useState('')

  const handleBtnClick = (meal) => {
    setSearchTags(meal)
    getRandomRecipe(meal);
  }

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchTags('dinner ' + value)
    getRecipes('dinner ' + value)
    setValue('');
    e.target.query.blur();
  };

  return (
    <div>
      <h2>What do you want for dinner?</h2>
      <p>Search using your own keywords or click some of our suggestions</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Form__input" className="Form__label">
        <input
            type="text"
            id="Form__input"
            className="Form__input"
            autoComplete="off"
            name="query"
            value={value}
            required
            list="queries"
            onChange={handleChange} />
        </label>
        <input type="submit" className="Form__btn" value="Get suggestions!" />
      </form>
      <button onClick={() => handleBtnClick('dinner')}>Click for random dinner</button>
      <button onClick={() => handleBtnClick('breakfast')}>Click for random breakfast</button>
    </div>
  )
}

export default Search
