import { searchActionType } from "./searchActionTypes";

export const setSearchValue = (value) => ({
  type: searchActionType.SEARCH_VALUE,
  payload: value,
});
