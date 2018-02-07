import { ActionTypes } from "../constants/ActionTypes";

export interface AddTodoAction{
  type: ActionTypes.ADD_TODO;
  text: string;
}

export function addTodo(text: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    text,
  };
}

export interface DeleteTodoAction{
  type: ActionTypes.DELETE_TODO;
  id: number;
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: ActionTypes.DELETE_TODO,
    id,
  };
}

export interface EditTodoAction{
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