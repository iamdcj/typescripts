
import React, { Component } from 'react';

interface Props {
  color?: string;
}

interface State {
  counter: number;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = { counter: 0 }
  }
  

  increment = (): void => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = (): void => {
    this.setState({
      counter: this.state.counter ? this.state.counter - 1 : 0
    })
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


export default App;
