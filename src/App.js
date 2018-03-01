import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Calendar} />
      </Switch>
    );
  }
}

export default App;
