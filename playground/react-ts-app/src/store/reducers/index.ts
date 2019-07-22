import { combineReducers } from "redux";
import { todos } from './todos';
import { Todo } from '../actions/fetch-todos';

// Validate Store Types
// authors know what we have in store (trololol)
interface Store {
  todos: Todo[]
}


export const reducers = combineReducers<Store>({
  todos
});