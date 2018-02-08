import { Action } from "redux";
import { ActionTypes } from "../constants/ActionTypes";

export interface ChangeThemeAction extends Action{
  type: ActionTypes.CHANGE_THEME;
  name: string;
}

export function changeTheme(name: string): ChangeThemeAction {
  return {
    type: ActionTypes.CHANGE_THEME,
    name,
  };
}