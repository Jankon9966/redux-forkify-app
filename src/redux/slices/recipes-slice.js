import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipe, getRecipes } from "../../services/api";


export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecpies",
  async () => await getRecipes()
);

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async () => await getRecipe()
);

const initialState = {
  recipes: [],
  recipe: [],
  isLoadingRecipes: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoadingRecipes = true;
    });

    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.isLoadingRecipes = false;
      state.recipes = action.payload;
    });

    builder.addCase(fetchRecipes.rejected, (state) => {
      state.isLoadingRecipes = false;
    });


    builder.addCase(fetchRecipe.pending, (state) => {
      state.isLoadingRecipes = true;
    })

    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.isLoadingRecipes = false;
      state.recipe = {
        id: action.payload.id,
        title: action.payload.title,
        imageUrl: action.payload.image_url,
        servings: action.payload.servings,
        cookingTime: action.payload.cooking_time,
        sourceUrl: action.payload.source_url,
        publisher: action.payload.publisher,
      }
    })
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
