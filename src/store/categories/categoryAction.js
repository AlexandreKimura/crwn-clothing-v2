import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
}
