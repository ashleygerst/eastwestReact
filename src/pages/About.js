import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AboutHeader from '../components/AboutHeader';
import AboutCarousel from '../components/aboutCarousel';

class About extends Component {

render() {    
  return (
    <Router>
      <AboutHeader />
      <div className="container">
        <div className="row mt-1">
          <div className="col mt-1">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>About</BreadcrumbItem>
              </Breadcrumb>
              <h2 className="text-center">About East West</h2>
          </div>
        </div>
            <AboutCarousel />
        <h1 className="text-center mt-5">Founded in 1982</h1>
        <h5 className="text-center">A family owned business</h5>
        <p className="text-center">East West was founded by Jim Eastly Sr and Harold West, Kenneth Gerst acquired this business in 1985. He passed away on March 17, 2017 and is survived by his four children and eight grandchildren. Ken's son, Gary Gerst, apprenticed with East West in 1987 and eventually took over the business when Ken retired. Gary currently runs the business with his wife, Stacy. Gary and Stacy operate the business out of Castle Shannon, Pennsylvania.</p>
      </div>
    </Router>
  );
}
}

export default About;