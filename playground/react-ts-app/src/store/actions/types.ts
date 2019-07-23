import { FetchTodosAction, FetchingTodosAction } from './fetch-todos';
import { CompleteTodoAction } from './complete-todo';

export enum ActionTypes {
  fetchTodos = "FETCH_TODOS",
  fetchingTodos = "FETCHING_TODOS",
  completeTodo = "COMPLETED_TODO"
}

export type Actions = FetchTodosAction | FetchingTodosAction | CompleteTodoAction;