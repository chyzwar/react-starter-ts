import BlueTheme from "../constants/BlueTheme";
import TealTheme from "../constants/TealTheme";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Reducer } from "redux";
import { ActionTypes } from "../constants/ActionTypes";
import { Action } from "../types/Action";

export type ThemeState = Theme;

const themeReducer: Reducer<ThemeState, Action> = (state = BlueTheme, action: Action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      switch (action.name) {
        case "TealTheme":
          return TealTheme;
        case "BlueTheme":
          return BlueTheme;
        default:
          return state;
      }
    default:
      return state;
  }
};

export default themeReducer;
