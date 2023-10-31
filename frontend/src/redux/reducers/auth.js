import * as types from '../constants/authConstants'

const initialState = {
    userData: null,
    accessToken: null,
}
const authReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.SET_USER_DATA:
            return {
                ...state,
                userData: payload ? payload : null,
            };
        case types.LOGOUT:
            return {
                ...state,
                userData: null,
                accessToken: null,
            }
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                successMessage: payload ? payload : null
            }
        case types.SIGNUP_FAIL:
            return {
                ...state,
            }
        case types.SIGNIN_SUCCESS: 
            return {
                ...state,
                userData: payload ? payload.user : null,
                accessToken: payload ? payload.accessToken : null
            }
        case types.SIGNIN_FAIL:
            return {
                ...state,
            }
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                userData: payload ? payload.user : null,
            }
        case types.UPDATE_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default authReducer;