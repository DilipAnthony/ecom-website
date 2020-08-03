import { searchActionType } from "./searchActionTypes";

const INITIAL_STATE = {
  search_value: [1, 2],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionType.SEARCH_VALUE:
      return { ...state, search_value: action.payload };

    default:
      return state;
  }
};

export default searchReducer;
