import React from "react";

import { Todo } from "../../store/actions/fetch-todos";
import { Action } from '../action';

export const TodoItem = ({ id, title, action }: Todo ): JSX.Element => {
  return (
    <li>
      <h4>{title}</h4>
      <Action label="Completed" action={() => action(id)} />
    </li>
  );
};
