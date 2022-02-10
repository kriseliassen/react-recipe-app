import React, { useState } from "react";
import "../styles/Search.css";

const Search = ({ getRandomRecipe, getRecipes, setSearchTags }) => {
	// const [query, setQuery] = useState([])
	const [value, setValue] = useState("");
	const [activeItemId, setActiveItemId] = useState(null);

	const handleBtnClick = (meal) => {
		setSearchTags(meal);
		getRandomRecipe(meal);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = async (e) => {
		const searchTerm = [value];
		console.log("searchTerm: ", searchTerm);
		e.preventDefault();
		setSearchTags(searchTerm + "");
		getRecipes([...searchTerm, "dinner"]);
		setValue("");
		e.target.query.blur();
	};

	const toggleActive = (id) => {
		if (activeItemId === id) {
			setActiveItemId(null);
			setValue("");
			return;
		}
		setActiveItemId(id);
		setValue(id);
		// setQuery([id])
	};

	const searchSuggestions = [
		"salad",
		"pasta",
		"soup",
		"potato",
		"quick",
		"vegetarian",
		"vegan",
		"salmon",
	];

	return (
		<div className="Search__container">
			<h2 className="Search__header">What are you in the mood for?</h2>
			<p className="Search__subheader">
				Search using your own keyword or click one of our suggestions
			</p>
			<div className="Search__suggestion--list">
				{searchSuggestions.map((item) => (
					<p
						className={`Search__suggestion ${
							activeItemId === item ? "active" : null
						}`}
						key={item}
						onClick={() => toggleActive(item)}
					>
						{item}
					</p>
				))}
			</div>
			<form onSubmit={handleSubmit} className="Search__form">
				<label htmlFor="Form__input" className="Form__label">
					<input
						type="text"
						id="Form__input"
						className="Form__input"
						autoComplete="off"
						name="query"
						value={value}
						required
						onChange={handleChange}
					/>
				</label>
				<input
					type="submit"
					className="btn Form__btn"
					value="Get suggestions!"
				/>
			</form>
			<div className="Search__random-btns-container">
				<button
					onClick={() => handleBtnClick("dinner")}
					className="btn Search__btn Search__btn--dinner"
				>
					I'm not picky, suggest any dinner
				</button>
				<button
					onClick={() => handleBtnClick("breakfast")}
					className="btn Search__btn Search__btn--dinner"
				>
					I want breakfast for dinner
				</button>
			</div>
		</div>
	);
};

export default Search;
