import * as api from "../api/userAPI";
import * as types from "../constants/userConstants";

export const getUserAction = (id) => async (dispatch) => {
    try {
      const { error, data } = await api.getUser(id);
  
      if (error) {
        throw new Error(error);
      }
  
      dispatch({
        type: types.GET_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_USER_FAIL,
        payload: error.message,
      });
    }
  };
  
export const updateUserAction = (formData) => async (dispatch) => {
  try {
    const { error, data } = await api.updateUser(formData);

    if (error) {
      throw new Error(error);
    }

    dispatch({
      type: types.GET_USER_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: types.GET_USER_FAIL,
      payload: error.message,
    });
  }
};