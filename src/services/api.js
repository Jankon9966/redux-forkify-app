import axios from "axios";


export const getRecipes = async () => {
  try {
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`);
    console.log(response);
    return response.data.data.recipes;
  }  catch (error) {
    console.log(error);
  }
};

export const getRecipe = async () => {
  try {
    const response = await axios.get("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
    console.log(response)
    return response.data.data.recipe;
  } catch (error) {
    console.log(error)
  }
}