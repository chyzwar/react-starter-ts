import history from "../constants/History";
import { connectRouter } from "connected-react-router";

const reducer = connectRouter(history);

export default reducer;
