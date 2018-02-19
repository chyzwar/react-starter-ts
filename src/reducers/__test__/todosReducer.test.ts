import todosReducer from "../todosReducer";

describe("todosReducer", () => {
  it("should return current state if nothing is matched", () => {
    const state  = [];
    const todos = todosReducer(state);

    expect(todos).toEqual(state);
  });
});
