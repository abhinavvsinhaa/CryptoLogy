import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './global.css';

const HelloComponent = () => {
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HelloComponent} />
      </Switch>
    </Router>
  );
}
