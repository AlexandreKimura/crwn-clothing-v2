import { createAction } from '../../utils/reducer'
import { CATEGORIES_ACTION_TYPES } from './categoryTypes'

const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_USER, categoriesMap)