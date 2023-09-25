import * as api from "../api/authAPI";
import * as types from "../constants/authConstants";

export const initializeAuth = () => async (dispatch) => {
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
  if(accessToken){
    if(isValidToken(accessToken)){
      dispatch(setUserData(JSON.parse(localStorage.getItem("profile")).user));
    }
  }
};
export const isValidToken = () => {
  return true;
}
export const setUserData = (userData) => async (dispatch) => {
  dispatch({ type: types.SET_USER_DATA, payload: userData });
};
export const logoutAction = () => async (dispatch) => {
    try {
      const { data } = await api.logout();
      localStorage.removeItem("profile");
      dispatch({ type: types.LOGOUT, payload: data });
    } catch (error) {
      dispatch({ type: types.LOGOUT, payload: types.ERROR_MESSAGE });
    }
  };

  export const signUpAction =
  (formData, navigate) =>
  async (dispatch) => {
    try {
      const response = await api.signUp(formData);
      const { error } = response;
      if (error) {
        dispatch({
          type: types.SIGNUP_FAIL,
          payload: error,
        });
      } else {
        dispatch({
            type: types.SIGNUP_SUCCESS,
            payload: types.SIGNUP_SUCCESS_MESSAGE,
          });
          navigate("/signin");
      }
    } catch (error) {
      dispatch({
        type: types.SIGNUP_FAIL,
        payload: types.ERROR_MESSAGE,
      });
    }
  };

export const signInAction = (formData, setShowPopupcorrect, setShowPopup) => async (dispatch) => {
  try {
    const response = await api.signIn(formData);
    const { error, data } = response;
    if (error || !data.status) {
      dispatch({
        type: types.SIGNIN_FAIL,
        payload: error,
      });
      setShowPopup(true)
    } else {
      const { user, accessToken } = data;
      const profile = {
        user,
        accessToken,
      };
      localStorage.setItem("profile", JSON.stringify(profile));
      dispatch({
        type: types.SIGNIN_SUCCESS,
        payload: profile,
      });
      setShowPopupcorrect(true)
    }
  } catch (error) {
    console.log("Catch error ")
    console.log(error)
    await dispatch({
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
  }
};

export const updateUserDataAction = (formData) => async (dispatch) => {
    try {
      const response = await api.updateUserData(formData);
      const { error, data } = response;
      if (error) {
        dispatch({
          type: types.UPDATE_FAIL,
          payload: error,
        });
      } else {
        const { user } = data;
        const profile = { user };
        dispatch({
            type: types.UPDATE_SUCCESS,
            payload: profile,
        });
      }
    } catch (error) {
      dispatch({
        type: types.UPDATE_FAIL,
        payload: types.ERROR_MESSAGE,
      });
    }
  };