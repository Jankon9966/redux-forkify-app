import axios from "axios"

export const getRecipes = async () => {
    try {
        const response = await axios.get("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza");
        return response.data.data.recipes;
    } catch (error) {
        console.log(error);
    }
}