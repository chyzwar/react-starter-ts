import { LocationChangeAction, RouterAction } from "react-router-redux";
import { ChangeThemeAction } from "../actions/ThemeActions";
import { AddTodoAction, EditTodoAction, DeleteTodoAction } from "../actions/TodoActions";

export type Action = RouterAction
    | LocationChangeAction
    | ChangeThemeAction
    | AddTodoAction
    | EditTodoAction
    | DeleteTodoAction;
