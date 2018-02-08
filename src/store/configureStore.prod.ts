import thunkMiddleware from "redux-thunk";

import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import loggerMiddleware from "../middleware/loggerMiddleware";
import routerMiddleware from "../middleware/routerMiddleware";
import themeReducer from "../reducers/themeReducer";
import todosReducer from "../reducers/todosReducer";

import { State } from "../types/State";
import { Action } from "../types/Action";
import { DeepPartial } from "redux";

const middlewares = applyMiddleware(
  thunkMiddleware,
  routerMiddleware,
  loggerMiddleware,
);

const rootReducer = combineReducers<State, Action>({
  router: routerReducer,
  theme: themeReducer,
  todos: todosReducer,
});

const enhancers = compose(middlewares);

function configureStore(initialState: DeepPartial<State> = {}) {
  return createStore(
    rootReducer,
    initialState,
    enhancers,
  );
}
export default configureStore;
