
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';


interface Props {
  color: string;
}

class App extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.color} 
      </div>
    );
  }
}

export default App;


render(<App color="orange" />, document.getElementById('root'));
