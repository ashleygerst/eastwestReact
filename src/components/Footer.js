import React from 'react';
import { Button, NavLink, NavItem, Row } from 'reactstrap';
import LoginModal from './Login';

function Footer(props) {
    return (
        <div className='siteFooter'>     
                    <div className='footerLinks' xs='6'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                          <NavItem>
                            <NavLink>Home</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink>About</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink>Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink>Contact</NavLink>
                          </NavItem>
                        </ul>
                    </div>
                    <div className='footerContact' xs='6'>
                        <a role='button' className='btn btn-link' href='tel:+12065551234'><i className='fa fa-phone' /> (412) 207-7385</a><br />
                        <a role='button' className='btn btn-link' href='mailto:notreal@notreal.co'><i className='fa fa-envelope-o' /> office@eastwestmfg.com</a>
                    </div>
                    <div className='loginButton'>
                        <LoginModal />
                    </div>
        </div>
    )
}

export default Footer;