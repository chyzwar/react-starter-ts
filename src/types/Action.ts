import { LocationChangeAction } from "connected-react-router";
import { ChangeThemeAction } from "../actions/ThemeActions";
import { AddTodoAction, EditTodoAction, MarkTodoAction } from "../actions/TodoActions";

export type Action =
    | LocationChangeAction
    | ChangeThemeAction
    | AddTodoAction
    | MarkTodoAction
    | EditTodoAction;
