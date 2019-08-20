import { Todo } from '../actions/fetch-todos';
import { ActionTypes, Actions } from '../actions/types';

// Reducers 
// --------
// A reducer updates the store based on whatever action was initiated
// the action will tell the reducer what has happened, and the reducer
// will update the store based on the new information it receives

export const todos = (
  state: Todo[] = [], 
  action: Actions
): Todo[] => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    case ActionTypes.completeTodo:
      return state.filter((todo: Todo) => 
        todo.id !== action.id
      )
    default:
      return state;
  }
}

export const fetchingTodos = (
  state = false, 
  action: Actions
): boolean => {
  switch (action.type) {
    case ActionTypes.fetchingTodos:
      return action.fetching
    default:
      return state;
  }
}
