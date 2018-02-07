import { RouterState } from "react-router-redux";
import { Theme } from "material-ui/styles/createMuiTheme";
import { Todo } from "./Todo";

export interface State{
    router: RouterState;
    todos: Todo[];
    theme: Theme;
}