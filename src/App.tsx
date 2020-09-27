import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InsightPage from './InsightsPage';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route path = "/home" component = { HomePage }/>
          <Route path = "/login" component = { LoginPage }/>
          <Route path = "/insights" component = {InsightPage}/>
          <Route path = "/settings" component = {SettingsPage}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
