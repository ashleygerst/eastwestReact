import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className='jumbotron bg-overlay bg-img-home'>
        <div className='overlay'></div>
        <Container className='jumboContent' fluid>
          <h1 className='jumboTitle'>East West Manufacturing</h1>
          <p className='jumboHeader'>Welcome to East West Manufacturing! East West Manufacturing & Supply Co., Inc. is a commercial 
                    <br /> Mechanical Contractor specializing in vintage and contemporary HVAC systems.</p>
                    <Button color='warning' href='/about'>About Us</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;