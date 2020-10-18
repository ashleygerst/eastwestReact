import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Nav';
import About from '../pages/About';
// import Contact from '../pages/Contact';
import Home from '../pages/Home';
// import Portfolio from '../pages/Portfolio';

class Main extends Component {
  render() {
    
    return (
      <Router>
        <Navigation />
        <Header />
          <Route path='/' component={Home}>
            <Home />
          </Route>
          <Route path='/about' render={() => <About/> }>
            <About />
          </Route>
                {/* <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} /> */}
        <Footer />
        </Router>
    );
  }
}

export default Main;

