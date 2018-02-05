import { LocationChangeAction, RouterAction } from "react-router-redux";
import { ChangeThemeAction } from "../actions/ThemeActions";

declare type RootAction =
  | RouterAction
  | LocationChangeAction
  | ChangeThemeAction;
