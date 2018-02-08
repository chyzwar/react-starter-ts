import axios, { AxiosPromise } from "axios";
import { Todo } from "../types/Todo";

const TODOS_API = "/todos";

export const read = (): AxiosPromise<Todo[]> => axios.get(
  TODOS_API
);

export const create = (todo: Todo): AxiosPromise<Todo> => axios.post(
  TODOS_API,
  todo,
);

export const update = (todo: Todo): AxiosPromise<Todo> => axios.put(
  `TODOS_API/${todo.id}`,
  todo,
);

export const remove = (todo: Todo): AxiosPromise<Todo> => axios.delete(
  `TODOS_API/${todo.id}`,
);