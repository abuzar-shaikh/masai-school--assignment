import * as types from "./actionTypes";
export const initialState = {
  isLoding: false,
  isError: false,
  Restaurants: [],
  TotalPages: 0,
  restaurant: {},
};

// complete reducer function

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_RESTAURANTS_REQUEST:
      return { ...state, isLoding: true };
    case types.GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isLoding: false,
        Restaurants: payload.data,
        TotalPages: payload.TotalPages,
      };

    case types.GET_RESTAURANTS_FAILURE:
      return { ...state, isLoding: false, isError: true };

    case types.GET_SINGLE_RESTAURANT_REQUEST:
      return { ...state, isLoding: true };

    case types.GET_SINGLE_RESTAURANT_SUCCESS:
      return { ...state, restaurant: payload, isLoding: false };

    case types.GET_SINGLE_RESTAURANT_FAILURE:
      return { ...state, isError: true };

    default:
      return state;
  }
};
