import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './global.css';

const HelloComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>CryptoLogy</h1>
      <p>
        by
        <br />
        <h4>Rhythm Shandlya & Abhinav Sinha</h4>
      </p>
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
