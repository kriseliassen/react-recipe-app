import React, { useState } from 'react'

const Search = ({getRandomRecipe, getRecipes, setSearchTags}) => {
  const [query, setQuery] = useState([])
  const [value, setValue] = useState('')
  console.log(query)

  const handleBtnClick = (meal) => {
    setSearchTags(meal)
    getRandomRecipe(meal);
  }

  const handleChange = e => {
    setValue(e.target.value);
  };

  const toggleQuery = (e) => {
    const string = e.target.textContent
    if (query.includes(string)) {
      const updatedArray = query.filter(item => item !== string)
      setQuery(updatedArray)
      return
    }
    setQuery([string])
  }

  const handleSubmit = async e => {
    const searchTerm = [...query, value]
    e.preventDefault();
    setSearchTags(searchTerm.join(' '))
    getRecipes(searchTerm)
    setValue('');
    e.target.query.blur();
  };

  return (
    <div>
      <h2>What do you want for dinner?</h2>
      <p>Search using your own keyword or click one of our suggestions</p>
      <p onClick={toggleQuery}>healthy</p>
      <p onClick={toggleQuery}>salad</p>
      <p onClick={toggleQuery}>pasta</p>
      <p onClick={toggleQuery}>soup</p>
      <p onClick={toggleQuery}>potato</p>
      <p onClick={toggleQuery}>quick</p>
      <p onClick={toggleQuery}>vegetarian</p>
      <p onClick={toggleQuery}>vegan</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Form__input" className="Form__label">
        <input
            type="text"
            id="Form__input"
            className="Form__input"
            autoComplete="off"
            name="query"
            value={value || query}
            required
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
