import * as types from '../constants/userConstants'
import { LOGOUT } from '../constants/authConstants'
const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case LOGOUT:
            return {
                ...state,
                user: {},
            }
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                userError: null
            };
        case types.GET_USER_FAIL:
            return {
                ...state,
                userError: payload
            }
        default: 
            return state;
    }
}
export default userReducer;