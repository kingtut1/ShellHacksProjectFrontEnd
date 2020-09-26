import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router>
        <Switch>
          
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
