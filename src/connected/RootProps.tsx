import { Store } from "redux";
import { History } from "history";
import { Action } from "../types/Action";
import { State } from "../types/State";

export default interface RootProps{
    store: Store<State, Action>;
    history: History;
}
