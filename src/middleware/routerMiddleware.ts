import history from "../constants/History";
import { routerMiddleware } from "connected-react-router";

const middleware = routerMiddleware(history);

export default middleware;
