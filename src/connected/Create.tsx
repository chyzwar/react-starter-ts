import React from "react";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

import { connect } from "react-redux";
import { ChangeEvent, FormEvent } from "react";
import { addTodo } from "../actions/TodoActions";

interface CreateProps{
  addTodo(text: string): void;
}

interface CreateState{
  input: string;
}

class Create extends React.Component<CreateProps, CreateState> {
  public constructor(props: CreateProps) {
    super(props);

    this.state = {
      input: "",
    };
  }

  private readonly onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    this.setState({
      input: event.target.value,
    });
  }

  private readonly onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.props.addTodo(this.state.input);
    this.setState({
      input: "",
    });
  }

  public render() {
    return (
      <div>
        <h1> Create Todo </h1>
        <form onSubmit={this.onSubmit}>
          <Input
            value={this.state.input}
            onChange={this.onChange}
          />
          <Button type="submit"> Add Todo </Button>
        </form>
      </div>
    );
  }
}

export default connect(undefined, {addTodo})(Create);
