import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { dummyMiddleware } from "../middlewares/dummyMiddleware";
import { initializeAuth } from "./actions/authActions";

const createAppStore = () => {
    try{
        const store = configureStore(
            {
                reducer: rootReducer,
                middleware: [thunk, dummyMiddleware]
            }
        );
        store.dispatch(initializeAuth());
        return store;
    } catch (error){
        throw new Error("Some error occurred");
    }
}

export default createAppStore;