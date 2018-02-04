import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import routerMiddleware from '../middleware/routerMiddleware';
import loggerMiddleware from '../middleware/loggerMiddleware';
import todosReducer from '../reducers/todosReducer';
import themeReducer from '../reducers/themeReducer';

import { RootAction } from '../actions/RootAction';
import { RootState } from '../reducers/RootState';

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
// https://github.com/piotrwitek/react-redux-typescript-guide#store-configuration