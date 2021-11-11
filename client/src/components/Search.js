import React, { useState } from 'react'

const Search = ({getRandomRecipe, getRecipes, setSearchTags}) => {
  const [query, setQuery] = useState([])
  const [value, setValue] = useState('')

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
    getRecipes([...searchTerm, 'dinner'])
    setValue('');
    e.target.query.blur();
  };

  return (
    <div className="Search__container">
      <h2 className="Search__header">What are you in the mood for?</h2>
      <p className="Search__subheader">Search using your own keyword or click one of our suggestions</p>
      <p onClick={toggleQuery} className="Search__suggestion">salad</p>
      <p onClick={toggleQuery} className="Search__suggestion">pasta</p>
      <p onClick={toggleQuery} className="Search__suggestion">soup</p>
      <p onClick={toggleQuery} className="Search__suggestion">potato</p>
      <p onClick={toggleQuery} className="Search__suggestion">quick</p>
      <p onClick={toggleQuery} className="Search__suggestion">vegetarian</p>
      <p onClick={toggleQuery} className="Search__suggestion">vegan</p>
      <p onClick={toggleQuery} className="Search__suggestion">salmon</p>
      <form onSubmit={handleSubmit} className="Search__form">
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
        <input type="submit" className="btn Form__btn" value="Get suggestions!" />
      </form>
      <div className="Search__random-btns-container">
        <button onClick={() => handleBtnClick('dinner')} className="btn Search__btn Search__btn--dinner">I'm not picky, suggest any dinner</button>
        <button onClick={() => handleBtnClick('breakfast')} className="btn Search__btn Search__btn--dinner">I want breakfast for dinner</button>
      </div>
    </div>
  )
}

export default Search
