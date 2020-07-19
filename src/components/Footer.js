import React from 'react';
import { NavLink, NavItem } from 'reactstrap';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
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
                    <div className="col-4">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> (412) 207-7385</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> office@eastwestmfg.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;