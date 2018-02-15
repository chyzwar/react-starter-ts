import { Action } from "redux";
import { ActionTypes } from "../constants/ActionTypes";

export interface AddTodoAction extends Action {
  type: ActionTypes.ADD_TODO;
  text: string;
}

export function addTodo(text: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    text,
  };
}

export interface DeleteTodoAction extends Action {
  type: ActionTypes.DELETE_TODO;
  id: number;
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: ActionTypes.DELETE_TODO,
    id,
  };
}

export interface EditTodoAction extends Action {
  type: ActionTypes.EDIT_TODO;
  id: number;
  text: string;
}

export function editTodo(id: number, text: string): EditTodoAction {
  return {
    type: ActionTypes.EDIT_TODO,
    id,
    text,
  };
}

export interface MarkTodoAction extends Action {
  type: ActionTypes.MARK_TODO;
  id: number;
}

export function markTodo(id: number): MarkTodoAction {
  return {
    type: ActionTypes.MARK_TODO,
    id,
  };
}
