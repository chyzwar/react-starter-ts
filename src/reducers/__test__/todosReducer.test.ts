import todosReducer from "../todosReducer";
import { addTodo, markTodo } from "../../actions/TodoActions";
import { Todo } from "../../types/Todo";

describe("todosReducer", () => {
  it("should handle ADD_TODO action", () => {
    const initialState: Todo[] = [];
    const text = "Test todo";
    const action = addTodo(text);
    const todos = todosReducer(initialState, action);

    expect(todos).toEqual([{
      id: 0,
      marked: false,
      text,
    }]);
  });

  it("should handle MARK_TODO action", () => {
    const initialState: Todo[] = [{
      id: 1,
      marked: false,
      text: "Test todo",
    }];
    const todoId = 1;
    const action = markTodo(todoId);
    const todos = todosReducer(initialState, action);

    expect(todos[0].marked).toEqual(true);
  });
});
