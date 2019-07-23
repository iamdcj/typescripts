import React, { Component } from 'react';

// STORE
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../../store/actions/fetch-todos';
import { completeTodo } from '../../store/actions/complete-todo';
import { Store } from '../../store/reducers/index';

// Components
import { Action } from '../action';
import { TodoItem } from './todo';

interface Props {
  todos: Todo[];
  fetchTodos: Function;
  completeTodo: Function;
  fetchingTodos: boolean;
}

class Todos extends Component<Props> {
  fetch = (): void => {
    this.props.fetchTodos();
  }

  render() {
    return (
      this.props.fetchingTodos 
      ? <div>Loading...</div>
      : <section>
        <h1>Todos: {this.props.todos.length} </h1>
        <Action label="Fetch" action={this.fetch} />
        <ul>
        {
          this.props.todos.map((todo: Todo) => 
            <TodoItem {...todo} action={this.props.completeTodo} />
          )
        }
        </ul>
      </section>
    );
  }
}


const mapStateToProps = ({ todos, fetchingTodos }: Store): { todos: Todo[], fetchingTodos: boolean } => 
  ({ todos, fetchingTodos })

  
export default connect(mapStateToProps, { fetchTodos, completeTodo })(Todos);