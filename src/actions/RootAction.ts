import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { ChangeThemeAction } from './ThemeActions';

export type RootAction =
  | RouterAction
  | LocationChangeAction
  | ChangeThemeAction
