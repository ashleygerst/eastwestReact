import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ContactHeader = () => {
  return (
    <div>
      <Jumbotron className='jumbotron bg-overlay bg-img-contact'>
        <div className='overlay'></div>
        <Container className='jumboContent' fluid>
          <h1 className='jumboTitle'>Contact Us</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ContactHeader;