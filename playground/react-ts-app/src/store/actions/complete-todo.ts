import { ActionTypes } from "./types";

export interface CompleteTodoAction {
  type: ActionTypes.completeTodo;
  id: number;
}

export const completeTodo = (id: number): CompleteTodoAction => ({
  type: ActionTypes.completeTodo,
  id
});
