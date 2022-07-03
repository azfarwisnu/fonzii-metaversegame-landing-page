import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Heroes from './pages/Heroes';
import Avatar from './pages/Avatar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HowToPlay from './pages/HowToPlay';
import Developer from './pages/Developer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Avatar} path="/avatar" exact />
          <Route component={Heroes} path="/heroes" exact />
          <Route component={HowToPlay} path="/how-to-play" exact />
          <Route component={Developer} path="/developer" exact />
          <Route component={Home} path="/home" exact />
          <Route component={Home} path="/" exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
