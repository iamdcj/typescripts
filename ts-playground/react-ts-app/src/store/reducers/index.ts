import { combineReducers } from "redux";
import { todos, fetchingTodos } from './todos';
import { Todo } from '../actions/fetch-todos';

// Validate Store Types
// authors know what we have in store (trololol)
export interface Store {
  todos: Todo[]
  fetchingTodos: boolean
}

export const reducers = combineReducers<Store>({
  todos,
  fetchingTodos 
});