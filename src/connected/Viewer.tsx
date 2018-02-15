import React from "react";
import { connect } from "react-redux";

import { Todo } from "../types/Todo";
import { State } from "../types/State";

interface ViewerProps{
  todos: Todo[];
}

interface ViewerState {}

class Viewer extends React.Component<ViewerProps, ViewerState> {
  public state: Object = {};

  public constructor(props: ViewerProps) {
    super(props);
  }

  public render(): JSX.Element {
    const todoList = this.props
      .todos
      .map(({ id, text }) => <li key={id}> {text} </li>);

    return (
      <div>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Viewer);
