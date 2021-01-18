import * as types from "../types"

const initialState = {
  inputSearch: undefined,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INPUT_SEARCH:
      return {
        ...state,
        inputSearch: action.payload.inputData,
      };

    default:
      return state;
  }
};

export default search;
