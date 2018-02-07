import BlueTheme from "../constants/BlueTheme";
import TealTheme from "../constants/TealTheme";

import { ActionTypes } from "../constants/ActionTypes";
import { Action } from "../types/Action";
import { Theme } from "material-ui/styles/createMuiTheme";

export default function themeReducer(state = BlueTheme, action: Action): Theme {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      if (action.name === "teal") {
        return TealTheme;
      }
      if (action.name === "blue") {
        return BlueTheme;
      }
    default:
      return state;
  }
}