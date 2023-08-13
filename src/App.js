import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe, fetchRecipes } from "./redux/slices/recipes-slice";
import RecipeList from "./components/Recipe/RecipeList";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const recipes = useSelector((state) => state.recipe.recipes);
  const loading = useSelector((state) => state.recipe.isLoadingRecipes);

  const dispatch = useDispatch();

  if (loading) {
    return <h2>Loading recipes...</h2>;
  }

  const showRecipes = () => {
    dispatch(fetchRecipes());
  };

  const showRecipeHandler = () => {
    dispatch(fetchRecipe());
  };

  return (
    <div className="App">
      <button onClick={showRecipes}>GET RECIPES</button>
      {recipes.map((item) => {
        return (
          <RecipeList
            key={item.id}
            title={item.title}
            image={item.image_url}
            publisher={item.publisher}
          />
        );
      })}
      <div>
        <button onClick={showRecipeHandler}>GET RECIPE</button>
        <Recipe /> 
      </div>
    </div>
  );
}

export default App;
