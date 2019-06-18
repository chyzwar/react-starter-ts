import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper/Paper";
import TodoItem from "./TodoItem";

import { connect } from "react-redux";
import { Todo } from "../types/Todo";
import { State } from "../types/State";

interface ViewerProps{
  todos: Todo[];
}

class Viewer extends React.PureComponent<ViewerProps> {
  public render() {
    const {
      todos,
    } = this.props;

    return (
      <Paper elevation={0}>
        <List>
          {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Viewer);
