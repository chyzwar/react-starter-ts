import { routerReducer, RouterState } from "react-router-redux";
import { Reducer } from "redux";
import { Action } from "../types/Action";

const initialState: RouterState = {
  location: null,
};

// tslint:disable-next-line
const reducer: Reducer<RouterState, Action> = (state = initialState, action) =>
  routerReducer(state, action);

export default reducer;
