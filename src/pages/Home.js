import Header from '../components/Header';
import React, { Component } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: "Home"
    }
  }

  render() {

  return (
    <Router>
      <Header />
      <CardGroup>
        <Card>
          <CardImg top width='100%' height='350vw' src={require('../assets/pink.jpg')} alt='Card image cap' />
          <CardBody>
            <CardTitle>Steam & Hot Water Boiler Systems</CardTitle>
            <CardText>With over forty years of industry experience, East West Manufacturing is a leader in the region in HVAC</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width='100%' height='350vw' src={require('../assets/commercial.jpg')} alt='Card image cap' />
          <CardBody>
            <CardTitle>Chillers and Air Handlers</CardTitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width='100%' height='350vw' src={require('../assets/pipes.jpg')} alt='Card image cap' />
          <CardBody>
            <CardTitle>Cooling Towers and DX Cooling Systems</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </Router>
  );
  }
};


export default Home;

