import Action from "../types/Action";

import { Reducer } from "redux";
import { ActionTypes } from "../constants/ActionTypes";
import { Todo } from "../types/Todo";

export type TodosState = Todo[];

const todosReducers: Reducer<TodosState, Action> = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        marked: false,
        text: action.text,
      },      ...state];

    case ActionTypes.MARK_TODO:
      return state.map((todo) =>
        (todo.id === action.id ? {...todo, marked: !todo.marked } : todo));

    case ActionTypes.EDIT_TODO:
      return state.map((todo) =>
        (todo.id === action.id ? { ...todo, text: action.text } : todo));
    default:
      return state;
  }
};

export default todosReducers;
