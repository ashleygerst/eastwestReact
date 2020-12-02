import React, { Component } from 'react';
import { Button, Jumbotron, Container, Media } from 'reactstrap';

class Header extends Component {

    render() {
    console.log(this.props, 'image')
    return (
      <div>
        <Jumbotron className='jumbotron'>
          <Container className='jumboContent'>
              <Media fluid src={this.props.image} className={'jumbotronImage'} />
              <div className={'jumboText'}>
                <h1 className='jumboTitle'>East West Manufacturing</h1>
                <p className='jumboHeader'>Welcome to East West Manufacturing! East West Manufacturing & Supply Co., Inc. is a commercial 
                <br /> Mechanical Contractor specializing in vintage and contemporary HVAC systems.</p>
                <Button color='warning' href='/about'>About Us</Button>
              </div>
          </Container>
        </Jumbotron>
      </div>
    );
  };
}



export default Header;
