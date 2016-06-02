import React from 'react';
import {render} from 'react-dom';
import Comp1 from './comp1';

class App extends React.Component {
  render () {
    return <p>Hello World!<Comp1 /></p>;
  }
}

render(<App/>, document.getElementById('app'));