import React, { Component } from 'react';
import { Button, Label, Col, Row, Form, Media, Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactHeader from '../components/ContactHeader';
import { BrowserRouter as Router } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Contact",
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            feedback: ''
    }
}

    handleSubmit(values) {
        console.log(values)
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

render () {
    return (
        <Router>
            <ContactHeader />
            <div className="container">
                <div className="row mt-1">
                    <div className="col mt-1">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active> Contact</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="text-center"></h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content contact">
                    <Media src={require('../assets/googlemap.png')}/>
                </div>
                <div className="row row-content">
                    <div className="col-sm-6 text-center mt-2">
                        <h5>Business Hours</h5>
                        <hours>
                                Mon: 7:00 AM – 4:00 PM<br />
                                Tue: 7:00 AM – 4:00 PM<br />
                                Wed: 7:00 AM – 4:00 PM<br />
                                Thu: 7:00 AM – 4:00 PM<br />
                                Fri: 7:00 AM – 4:00 PM<br />
                                Sat: Closed<br />
                                Sun: Closed<br />
                        </hours>
                    </div>
                    <div className="col-sm-6 text-center mt-2">
                        <h5>Address</h5>
                        <address>
                            3849 Willow Avenue<br />
                            Pittsburgh, PA 15234<br />
                        </address>
                        <a role="button" className="btn btn-link" href="tel:4122077385"><i className="fa fa-phone"></i> (412) 207-7385</a><br />
                        <a role="button" className="btn btn-link" href="mailto:office@eastwestmfg.com"><i className="fa fa-envelope-o"></i> office@eastwestmfg.com</a>
                    </div>
                </div>
                <div className="row row-content">
                   <div className="col-12 mt-5">
                      <h2>Contact Us!</h2>
                      <h5>We will do our best to reply within 24 hours.</h5>
                      <hr />
                   </div>
                    <div className="col-md-10">
                        <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>       
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Tel. Number</Label>
                                    <Col md={10}
                                        placeholder="Tel. Number"
                                        className="form-control"
                                    />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}
                                        placeholder="Email"
                                        className="form-control"
                                    />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Leave A Message</Label>
                                    <Col md={10}
                                        rows="12"
                                        className="form-control"
                                    />
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </Router>
        );
    }
}

export default Contact;
