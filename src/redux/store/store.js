import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "../slices/recipes-slice";

const store = configureStore({
    reducer: {
        recipe: recipeSlice.reducer,
    }
})

export default store;