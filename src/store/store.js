import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { deviceReducer } from "../reducers/deviceReducer";
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    devices: deviceReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);