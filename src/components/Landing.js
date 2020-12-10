import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

class Main extends Component {

  render() {
    return (
      <Router>
        <Navigation />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        <Footer />
        </Router>
    );
  }
}

export default Main;