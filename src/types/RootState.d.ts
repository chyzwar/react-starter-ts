import { RouterState } from "react-router-redux";
import { TodosState } from "../reducers/todosReducer";
import { ThemeState } from "../reducers/themeReducer";

declare interface RootState{
    router: RouterState;
    theme: ThemeState;
    todos: TodosState;
}