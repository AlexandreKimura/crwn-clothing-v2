import { USER_ACTION_TYPES } from "./userTypes";
import { createAction } from "../../utils/reducer";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
