import { CHANGE_THEME } from "../constants/ActionTypes";

export interface ChangeThemeAction{
  type: typeof CHANGE_THEME,
  name: string,
};

export function changeTheme(name: string): ChangeThemeAction {
  return {
    type: CHANGE_THEME,
    name,
  };
}

