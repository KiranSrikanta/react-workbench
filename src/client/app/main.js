import Comp1 from './comp1';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>Hello World!<Comp1 /></p>;
  }
}

render(<App/>, document.getElementById('app'));