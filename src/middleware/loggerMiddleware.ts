import { createLogger } from "redux-logger";
import { Middleware } from "redux";

const loggerMiddleware: Middleware = createLogger({});

export default loggerMiddleware;
