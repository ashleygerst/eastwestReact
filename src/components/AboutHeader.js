import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AboutHeader = () => {
  return (
    <div>
      <Jumbotron className='jumbotron bg-overlay bg-img-about'>
        <div className='overlay'></div>
        <Container className='jumboContent' fluid>
          <h1 className='jumboTitle'>About</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AboutHeader;