import axios from "axios";
import * as types from "./actionTypes";
// complete below functions for api requests

export const getRestaurants = (params) => (dispatch) => {
  dispatch({ type: types.GET_RESTAURANTS_REQUEST });
  axios(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`,
    { params: params }
  )
    .then((res) => {
      dispatch({ type: types.GET_RESTAURANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_RESTAURANTS_FAILURE });
    });
};

export const getSingleRestaurant = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_RESTAURANT_REQUEST });
  axios(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  )
    .then((res) => {
      dispatch({
        type: types.GET_SINGLE_RESTAURANT_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({type:types.GET_SINGLE_RESTAURANT_FAILURE});
    });
};
