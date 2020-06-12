import {applyMiddleware, createStore, compose} from "redux";
import {mainReducer} from "./mainReducer";
import thunkMiddleware from 'redux-thunk';

export const store = createStore(mainReducer,
    compose(
    applyMiddleware(thunkMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);
//applyMiddleware(thunkMiddleware,
