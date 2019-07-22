
import React, { Component } from 'react';

interface Props {
  color?: string;
}

class App extends Component<Props> {
  state = { counter: 0 }

  increment = (): void => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = (): void => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <section>
        <h1>Todos: {this.state.counter} </h1>
        <Action label="increment" action={this.increment} />
        <Action label="decrement" action={this.decrement} />
      </section>
    );
  }
}


interface ActionProps {
  action(): void;
  label: string;
}

const Action = ({ action, label }: ActionProps) => {
  return (
    <button onClick={action}>{label}</button>
  )
}


export default App;
