import { LocationChangeAction, RouterAction } from "react-router-redux";
import { ChangeThemeAction } from "../actions/ThemeActions";

export type Action =
  | RouterAction
  | LocationChangeAction
  | ChangeThemeAction;
