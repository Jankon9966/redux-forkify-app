import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "./redux/slices/recipes-slice";
import { useEffect } from "react";
import RecipeList from "./components/RecipeList";

function App() {
  const recipes = useSelector((state) => state.recipe.recipes);
  const loading = useSelector((state) => state.recipe.isLoadingRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  if (loading) {
    return <h2>Loading recipes...</h2>;
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
