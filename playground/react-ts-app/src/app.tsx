import React, { Component } from 'react';

// STORE
import { connect } from 'react-redux';
import { Todo, fetchTodos } from './store/actions/fetch-todos';
import { Store } from './store/reducers/index';

interface Props {
  todos: Todo[],
  fetchTodos(): any
}

class App extends Component<Props> {
  
  increment = (): void => {
  }

  decrement = (): void => {
  }

  render() {

    return (
      <section>
        <h1>Todos: {this.state.counter} </h1>
        <Action label="increment" action={this.increment} />
        {
          this.state.counter > 0 &&
          <Action label="decrement" action={this.decrement} />
        }
      </section>
    );
  }
}


interface ActionProps {
  action(): void;
  label: string;
}

const Action = ({ action, label }: ActionProps): JSX.Element => {
  return <button onClick={action}>{label}</button>
}


const mapStateToProps = ({ todos }: Store): { todos: Todo[] } => 
  ({ todos })

export default connect(mapStateToProps, { fetchTodos })(App);