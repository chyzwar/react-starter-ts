import { RouterState } from "react-router-redux";
import { TodosState } from "../reducers/todosReducer";
import { ThemeState } from "../reducers/themeReducer";

export interface State{
    router: RouterState;
    theme: ThemeState;
    todos: TodosState;
}