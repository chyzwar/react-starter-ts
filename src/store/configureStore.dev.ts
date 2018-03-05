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
