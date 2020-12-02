import React, { Component } from 'react';
import { Button, Label, Col, Row, Form } from 'reactstrap';

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
    componentDidMount() {
    this.props.changeState('contact')
  }

    handleSubmit(values) {
        console.log(values)
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

render () {

    return (
        <div className="container">
                <div className="row row-content">
                    <div className="col-sm-6">
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
                    <div className="col-sm-6">
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
        );
    }
}

export default Contact;
