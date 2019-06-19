import { connectRouter, LocationChangeAction, RouterState } from "connected-react-router";
import history from "../constants/History";
import { Reducer } from "react";

const reducer: Reducer<RouterState, LocationChangeAction> = connectRouter(history);

export default reducer;
