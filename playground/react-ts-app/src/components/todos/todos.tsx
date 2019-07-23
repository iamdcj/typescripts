import React, { Component } from 'react';

// STORE
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../../store/actions/fetch-todos';
import { Store } from '../../store/reducers/index';

// Components
import { Action } from '../action';

interface Props {
  todos: Todo[],
  fetchTodos(): any
}

class Todos extends Component<Props> {
  
  increment = (): void => {
  }

  decrement = (): void => {
  }

  render() {

    return (
      <section>
        <h1>Todos: {this.props.todos.length} </h1>
        <Action label="increment" action={this.increment} />
        <Action label="decrement" action={this.decrement} />
      </section>
    );
  }
}


const mapStateToProps = ({ todos }: Store): { todos: Todo[] } => 
  ({ todos })

  
export default connect(mapStateToProps, { fetchTodos })(Todos);