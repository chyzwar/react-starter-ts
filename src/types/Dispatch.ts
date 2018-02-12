import { Dispatch } from "redux";
import { State } from "../types/State";
import { Action } from "../types/Action";

export type Dispatch = Dispatch<Action, State>
