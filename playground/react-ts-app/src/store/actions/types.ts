import { FetchTodosAction, FetchingTodosAction } from './fetch-todos';
import { CompleteTodoAction } from './complete-todo';

export enum ActionTypes {
  fetchTodos,
  fetchingTodos,
  completeTodo
}

export type Actions = FetchTodosAction | FetchingTodosAction | CompleteTodoAction;