import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Drums from './components/1_Drums';
import Clock from './components/2_Clock';
import Variables from './components/3_Variables';
import Cardio1 from './components/4_Cardio1';
import Flex from './components/5_Flex';
import Canvas from './components/8_Canvas';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/drums" component={Drums} />
        <Route exact path="/variables" component={Variables} />
        <Route exact path="/cardio1" component={Cardio1} />
        <Route exact path="/flex" component={Flex} />
        <Route exact path="/canvas" component={Canvas} />
      </Switch>
    );
  }
}

export default App;
