import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import thunkMiddleware from 'redux-thunk';
import {localizeReducer} from "react-localize-redux";

const rootReducers = combineReducers({
    localize: localizeReducer,
    main: mainReducer
})

export const store = createStore(
    rootReducers,
    compose(
    applyMiddleware(thunkMiddleware)
    //,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);
//applyMiddleware(thunkMiddleware,
