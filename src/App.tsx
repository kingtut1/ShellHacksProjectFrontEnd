import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route path = "/home" component = { HomePage }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
