import { createSelector } from "reselect";
import { RootState } from "../store";

import { CategoriesState } from "./categoryReducer";
import { CategoryMap } from "./categoryTypes";

const selectCategoryReducer = (state: RootState): CategoriesState => {
  return state.categories;
};
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
