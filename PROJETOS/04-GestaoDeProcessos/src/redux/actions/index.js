import * as types from "../types"

export const setInputSearch = (inputData) => ({
  type: types.SET_INPUT_SEARCH,
  payload: {
    inputData,
  },
});
