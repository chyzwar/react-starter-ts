import {createBrowserHistory} from "history";

/**
 * Create browser history IE => 11
 *
 * @see https://github.com/ReactTraining/history
 */
const browserHistory = createBrowserHistory({
  basename: "",
  forceRefresh: false,
  keyLength: 6,
});

export default browserHistory;
