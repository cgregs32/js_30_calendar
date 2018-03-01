import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Clock from './components/2_Clock';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/clock" component={Clock} />
      </Switch>
    );
  }
}

export default App;
