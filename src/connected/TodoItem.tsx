import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

import { connect } from "react-redux";
import { markTodo } from "../actions/TodoActions";
import { Todo } from "../types/Todo";

interface TodoItemProps{
  todo: Todo;
  markTodo(id: number): void;
}

class TodoItem extends React.PureComponent<TodoItemProps> {
  private readonly markTodo = () => {
    this.props.markTodo(this.props.todo.id);
  }

  public render() {
    const {
      id,
      text,
      marked,
    } = this.props.todo;

    return (
      <ListItem button key={id} onClick={this.markTodo}>
        <Checkbox checked={marked} />
        <ListItemText primary={text} />
      </ListItem>
    );
  }
}

export default connect(undefined, {markTodo})(TodoItem);
