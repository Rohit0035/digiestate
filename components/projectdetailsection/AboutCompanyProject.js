"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import proimg from "../../assets/images/pro-1.jpg"
import EnquiryModal from "../EnquiryModal";
const AboutCompanyProject = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Card data-aos="fade-up">
                <CardBody>
                    <h4 className="fw-bold mb-3">About Sumadhura Infracon Pvt. Ltd.</h4>
                    <Row>
                        <Col lg="12">
                            <div className="d-flex p-2 bg-light">
                                <Image
                                    src={proimg}
                                    alt="smartmind"
                                    className="me-2 objectfit-cover"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '100px'
                                    }}
                                />
                                <div className="">
                                    <h5 className="fw-bold mb-1 small">
                                        Sumadhura Infracon Pvt. Ltd.
                                    </h5>
                                    <small>27 Years Experience</small>
                                    <p className="small">
                                        Sy.No.108/2,Millenia building,1st Main,MSR Layout, Munnekollala Village, Marathahalli ORR, Bangalore

                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                            <Card >
                                <CardBody>
                                    <h5 className="mb-0 small">
                                        Total Projects
                                        <span style={{ float: 'right' }}>
                                            45
                                        </span>
                                    </h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                            <Card >
                                <CardBody>
                                    <h5 className="mb-0 small">
                                        Projects Completed
                                        <span style={{ float: 'right' }}>
                                            45
                                        </span>
                                    </h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                            <Card >
                                <CardBody>
                                    <h5 className="mb-0 small">
                                        Projects Ongoing

                                        <span style={{ float: 'right' }}>
                                            45
                                        </span>
                                    </h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" md="12" lg="12" className="mb-2 mt-3">
                            <Button onClick={toggle} className="px-4 fw-bold rounded-pill btn-sm btn btn-danger me-2"> Explore Builder</Button>
                            <Button onClick={toggle} className="px-4 fw-bold rounded-pill btn-sm btn btn-danger"> Contact Builder</Button>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col lg="12">
                            <p className="small">
                                With three decades of legacy, Sumadhura's unique customer-centric approach and commitment to delivering excellence and superior products have earned
                            </p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>


            <EnquiryModal modal={modal} toggle={toggle} />

        </>
    );
};
export default AboutCompanyProject;