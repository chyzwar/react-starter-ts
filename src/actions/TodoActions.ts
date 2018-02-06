import ActionTypes from "../constants/ActionTypes";

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

export function deleteTodo(id: string) {
  return {
    type: ActionTypes.DELETE_TODO,
    id,
  };
}

export function editTodo(id: number, text: string) {
  return {
    type: ActionTypes.EDIT_TODO,
    id,
    text,
  };
}

export function markTodo(id: string) {
  return {
    type: ActionTypes.MARK_TODO,
    id,
  };
}

export function markAll() {
  return {
    type: ActionTypes.MARK_ALL,
  };
}

export function clearMarked() {
  return {
    type: ActionTypes.CLEAR_MARKED,
  };
}
