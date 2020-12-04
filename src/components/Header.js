import React, { Component } from 'react';
import { Button, Jumbotron, Container, Media } from 'reactstrap';
import jumboContent from './Jumbotron.js'
class Header extends Component {

    render() {
    console.log(this.props, 'image')
    return (
      <div>
        <Jumbotron className='Jumbotron' jumboContent={jumboContent} />
      </div>
    );
  };
}



export default Header;
