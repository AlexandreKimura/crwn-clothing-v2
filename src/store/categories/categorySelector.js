import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => {
  console.log('aqui 1')
  return state.categories;
}
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log('aqui 2')
    return categoriesSlice.categories
  }
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)