import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import SignIn from './components/SignIn'

import About from './components/About';
import Blog from './components/Blog'
import Bot from './components/ChatBot'
import SignUp from './components/SignUp'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Container } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div>
  
      <div>
        <Header />
        </div>
        <div style={{ marginTop: "90px", fontFamily: "Comic Sans, Comic Sans MS, cursive", fontSize: "24px" }}>
          <center>
            <b>
              Efficient and user-friendly Chabot Based 
            </b>
          </center>
        </div>
        <div>
         <Router>
        <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/home" component={Home} />
</Switch>

    </Router> *
    </div> 
    
    </div>
  );
}

export default App;
