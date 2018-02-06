import BlueTheme from '../constants/BlueTheme';
import TealTheme from '../constants/TealTheme';

import ActionTypes from '../constants/ActionTypes';
import { Action } from "../types/Action";


export function themeReducer(state = BlueTheme, action: Action) {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      if (action.name === 'teal') return TealTheme;
      if (action.name === 'blue') return BlueTheme;
      return state;
    default:
      return state;
  }
}