import React from 'react';
import NavigationBar from './NavigationBar';
import {Nav, Navbar} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar/>
      <p> Hello </p>
    </div>
  );
}

export default App;
