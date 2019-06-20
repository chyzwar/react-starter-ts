import { RouterState } from "connected-react-router";
import { ThemeState } from "../reducers/themeReducer";
import { TodosState } from "../reducers/todosReducer";

interface State{
    router: RouterState;
    todos: TodosState;
    theme: ThemeState;
}

export default State;
