import React from "react";
import { useSelector } from "react-redux";

const Recipe = () => {

  const recipe = useSelector((state) => state.recipe.recipe);

  return (
    <div>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.cookingTime}</p>
      <h4>{recipe.servings}</h4>
      <h3>{recipe.publisher}</h3>
    </div>
  );
};

export default Recipe;
