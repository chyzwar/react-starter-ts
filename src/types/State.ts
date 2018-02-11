import { RouterState } from "react-router-redux";
import { ThemeState } from "../reducers/themeReducer";
import { TodosState } from "../reducers/todosReducer";

export interface State{
    router: RouterState;
    todos: TodosState;
    theme: ThemeState;
}