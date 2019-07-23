import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  action?: any;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface FetchingTodosAction {
  type: ActionTypes.fetchingTodos;
  fetching: boolean;
}

const url = `https://jsonplaceholder.typicode.com/todos/`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch)  => {

    dispatch<FetchingTodosAction>({
      type: ActionTypes.fetchingTodos,
      fetching: true
    })

    const { data } = await axios.get<Todo[]>(url); // array of Todos

    // Make it clear what this dispatch is doing,
    // and what it relates to; ACs can get lengthy
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: data
    })

    dispatch<FetchingTodosAction>({
      type: ActionTypes.fetchingTodos,
      fetching: false
    })

  }
}