import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import PortfolioHeader from '../components/PortfolioHeader';
import { BrowserRouter as Router } from 'react-router-dom';

class Portfolio extends Component {
    
    render() {
        return (
            <Router>
                <PortfolioHeader />
                    <div className="container">
                        <div className="row mt-1">
                            <div className="col mt-1">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Portfolio</BreadcrumbItem>
                                </Breadcrumb>
                                <h2 className="text-center">East West's Portfolio</h2>
                                <hr />
                            </div>
                        </div>
                        <div className="row ml-4">
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="imgBx">
                                        <Media src={require('../assets/joshua-hoehne-unsplash.jpg')}/>
                                    </div>
                                    <div className="layer layer1"></div>
                                    <div className="layer layer2"></div>
                                    <div className="contentBx">
                                        <h2>Schools</h2>
                                        <p>Ringgold School District, Quaker Valley, University of Pittsburgh, California University of Pennsylvania.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="imgBx">
                                        <Media src={require('../assets/enric-moreu-unsplash.jpg')}/>
                                    </div>
                                    <div className="layer layer1"></div>
                                    <div className="layer layer2"></div>
                                    <div className="contentBx">
                                        <h2>Healthcare</h2>
                                        <p>UPMC Hospital</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="imgBx">
                                        <Media src={require('../assets/joao-marcelo-unsplash.jpg')}/>
                                    </div>
                                    <div className="layer layer1"></div>
                                    <div className="layer layer2"></div>
                                    <div className="contentBx">
                                        <h2>Hospitality</h2>
                                        <p>Wyndham Grand Hotel Pittsburgh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 ml-4">
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="imgBx">
                                        <Media src={require('../assets/hohyeong-lee-unsplash.jpg')}/>
                                    </div>
                                    <div className="layer layer1"></div>
                                    <div className="layer layer2"></div>
                                    <div className="contentBx">
                                        <h2>Commercial</h2>
                                        <p>
                                            PPG Paints
                                            Rycon
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="imgBx">
                                        <Media width='500vw' height='400vw' src={require('../assets/patrick-tomasso-unsplash.jpg')}/>
                                    </div>
                                    <div className="layer layer1"></div>
                                    <div className="layer layer2"></div>
                                    <div className="contentBx">
                                        <h2>Food and Beverage</h2>
                                        <p>
                                            Sienna Mercato
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="imgBx">
                                        <Media width='500vw' height='400vw' src={require('../assets/boudhayan-bardhan-unsplash.jpg')}/>
                                    </div>
                                    <div className="layer layer1"></div>
                                    <div className="layer layer2"></div>
                                    <div className="contentBx">
                                        <h2>Retail</h2>
                                        <p>
                                            Pittsburgh Mills Mall
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
            </Router>
        );
    }
}

export default Portfolio;