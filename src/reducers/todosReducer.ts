import { ActionTypes } from "../constants/ActionTypes";
import { Action } from "../types/Action";
import { Todo } from "../types/Todo";

const initialState: Todo[] = [];

export default function todos(state = initialState, action: Action): Todo[] {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        marked: false,
        text: action.text,
      }, ...state];

    case ActionTypes.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id);

    case ActionTypes.EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.id ?
          { ...todo, text: action.text } :
          todo));
    default:
      return state;
  }
}
