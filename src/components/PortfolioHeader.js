import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const PortfolioHeader = () => {
  return (
    <div>
      <Jumbotron className='jumbotron bg-overlay bg-img-portfolio'>
        <div className='overlay'></div>
        <Container className='jumboContent' fluid>
          <h1 className='jumboTitle'>Portfolio</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default PortfolioHeader;