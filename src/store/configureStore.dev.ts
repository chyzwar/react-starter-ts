import * as redux from "redux";

/**
 * Workaround for redux 4 incompatibility
 *
 * @see https://github.com/gaearon/redux-devtools/issues/391
 * @see https://github.com/zalmoxisus/redux-devtools-instrument/pull/17
 */
declare module "redux"{
  // tslint:disable-next-line
  const __DO_NOT_USE__ActionTypes: {
    INIT: string;
    REPLACE: string;
  };
}

redux.__DO_NOT_USE__ActionTypes.INIT = "@@redux/INIT";
redux.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/REPLACE";

import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loggerMiddleware from "../middleware/loggerMiddleware";
import routerMiddleware from "../middleware/routerMiddleware";
import themeReducer from "../reducers/themeReducer";
import todosReducer from "../reducers/todosReducer";
import routerReducer from "../reducers/routerReducer";

import { State } from "../types/State";
import { Action } from "../types/Action";
import { DeepPartial } from "redux";

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
