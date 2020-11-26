import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { createRootReducer } from "../reducers";

// @ts-ignore
if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "function") {
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ = (_) => (next) => (action) => next(action);
}

export const store = createStore(
    createRootReducer(),
    compose(
        applyMiddleware(thunk),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
