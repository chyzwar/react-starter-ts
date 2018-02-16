import React from "react";
import ListItem from "material-ui/List/ListItem";
import Checkbox from "material-ui/Checkbox/Checkbox";
import ListItemText from "material-ui/List/ListItemText";

import { connect } from "react-redux";
import { markTodo } from "../actions/TodoActions";
import { Dispatch } from "../types/Dispatch";
import { Todo } from "../types/Todo";

interface TodoItemProps{
  todo: Todo;
  markTodo(id: number): void;
}

class TodoItem extends React.PureComponent<TodoItemProps> {
  private markTodo = () => {
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  markTodo: (id: number) => { dispatch(markTodo(id)); },
});

export default connect(undefined, mapDispatchToProps)(TodoItem);
