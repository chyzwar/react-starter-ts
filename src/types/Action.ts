import { LocationChangeAction, RouterAction } from "react-router-redux";
import { ChangeThemeAction } from "../actions/ThemeActions";
import { AddTodoAction, EditTodoAction, DeleteTodoAction, MarkTodoAction } from "../actions/TodoActions";

export type Action = RouterAction
    | LocationChangeAction
    | ChangeThemeAction
    | AddTodoAction
    | MarkTodoAction
    | EditTodoAction
    | DeleteTodoAction;
