const RecipeCard = ({recipe, setClickedRecipe}) => {
  const handleClick = () => {
    setClickedRecipe(recipe)
  };

  return (
    <div onClick={handleClick}>
      I am a recipe card
      <div>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt="img"/>
      </div>
    </div>
  )
}

export default RecipeCard
