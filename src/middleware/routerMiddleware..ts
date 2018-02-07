import history from "../constants/History";
import { routerMiddleware } from "react-router-redux";

const middleware = routerMiddleware(history);

export default middleware;