import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loggerMiddleware from "../middleware/loggerMiddleware";
import routerMiddleware from "../middleware/routerMiddleware";
import themeReducer from "../reducers/themeReducer";
import todosReducer from "../reducers/todosReducer";

import { RootState } from "../reducers/RootState";

const middlewares = applyMiddleware(
  routerMiddleware,
  loggerMiddleware,
);

const rootReducer = combineReducers<RootState, RootAction>({
  todos: todosReducer,
  theme: themeReducer,
  router: routerReducer,
});

const enhancers = composeWithDevTools(middlewares);

function configureStore(initialState: Object = {}){
  return createStore(
    rootReducer,
    initialState,
    enhancers,
  );
}

export default configureStore;