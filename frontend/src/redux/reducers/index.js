import { combineReducers } from 'redux';

import userReducer from './user';
import authReducer from './auth';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
})

export default rootReducer;