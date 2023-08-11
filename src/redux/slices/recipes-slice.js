import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../../services/api";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecpies",
  async () => await getRecipes()
);

const initialState = {
  recipes: [],
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
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
