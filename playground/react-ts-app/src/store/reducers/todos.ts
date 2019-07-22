import { Todo, FetchTodosAction } from '../actions/fetch-todos';
import { ActionTypes } from '../actions/types';

// Reducers 
// --------
// A reducer updates the store based on whatever action was initiated
// the action will tell the reducer what has happened, and the reducer
// will update the store based on the new information it receives

export const todos = (state: Todo[] = [], action: FetchTodosAction) {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
}