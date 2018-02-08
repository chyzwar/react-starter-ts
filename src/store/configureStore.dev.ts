import thunkMiddleware from "redux-thunk";

import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loggerMiddleware from "../middleware/loggerMiddleware";
import routerMiddleware from "../middleware/routerMiddleware";
import themeReducer from "../reducers/themeReducer";
import todosReducer from "../reducers/todosReducer";

import { State } from "../types/State";
import { Action } from "../types/Action";
import { DeepPartial } from "redux";
// https://github.com/reactjs/redux/issues/2715
const middlewares = applyMiddleware(
  thunkMiddleware,
  routerMiddleware,
  loggerMiddleware,
);

const rootReducer = combineReducers<State, Action>({
  todos: todosReducer,
  theme: themeReducer,
  router: routerReducer,
});

const enhancers = composeWithDevTools(middlewares);

function configureStore(initialState: DeepPartial<State> = {}) {
  return createStore(
    rootReducer,
    initialState,
    enhancers,
  );
}

export default configureStore;