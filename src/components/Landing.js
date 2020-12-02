import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Component, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 'Home'
    }
  }


  changeState = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render(){
    const images = {
      home: require('../assets/pgh.jpg'),
      about: require('../assets/pipes.jpg'),
      portfolio: require('../assets/carlos-lindner-unsplash.jpg'),
      contact: require('../assets/pawel-czerwinski-unsplash.jpg')
    }

    let image = this.props;
    if (this.state.currentPage === 'Home' ) {
      image = images.home;
      } if (this.state.currentPage === 'about') {
        image = images.about;
      } if (this.state.currentPage === 'portfolio') {
        image = images.portfolio;
      } if (this.state.currentPage === 'Contact') {
        image = images.contact;
      }

    const { currentPage } = this.state
    return (
      <Router>
        <Navigation />
        <Header image={image} page={this.page}/>
          <Switch>
           <Route path='/about'> 
              <About 
                currentPage={currentPage} 
                changeState={this.changeState}
              />
            </Route>
            <Route path='/portfolio'>
              <Portfolio
                currentPage={currentPage} 
                changeState={this.changeState}
              />
            </Route>
            <Route path='/contact'>
              <Contact
                currentPage={currentPage} 
                changeState={this.changeState}
              />
            </Route>
            <Route path='/'>
              <Home
                currentPage={currentPage} 
                changeState={this.changeState}
              />
            </Route>
          </Switch>
        <Footer />
        </Router>
    );}
  }

export default Main;

