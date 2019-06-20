import thunkMiddleware from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
  Store,
  DeepPartial,
  Reducer,
} from "redux";

import loggerMiddleware from "../middleware/loggerMiddleware";
import routerMiddleware from "../middleware/routerMiddleware";
import themeReducer from "../reducers/themeReducer";
import todosReducer from "../reducers/todosReducer";
import routerReducer from "../reducers/routerReducer";
import State from "../types/State";
import Action from "../types/Action";

const middlewares = applyMiddleware(
  thunkMiddleware,
  routerMiddleware,
  loggerMiddleware,
);

const rootReducer: Reducer<State, Action> = combineReducers({
  router: routerReducer,
  theme: themeReducer,
  todos: todosReducer,
});

const enhancers = compose(middlewares);

function configureStore(initialState: DeepPartial<State> = {}): Store<State, Action> {
  return createStore(
    rootReducer,
    initialState,
    enhancers,
  );
}
export default configureStore;
