"use client";

import Image from "next/image";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { FiChevronRight } from "react-icons/fi";
import lonimg from "../../assets/images/hero-img.png"
const LoanHero = () => {
    return (
        <div className="py-5" style={{ background: "#f4fbfc" }}>
            <Container>
                <Row className="align-items-center">
                    {/* LEFT SIDE */}
                    <Col md="4" className="text-center text-md-start d-none d-sm-block" data-aos="zoom-in">

                        {/* Image */}
                        <Image
                            src={lonimg}   // Replace with your image
                            alt="Home Loan Offer"
                            width={450}
                            height={450}
                            className="img-fluid"
                        />

                    </Col>

                    <Col md="4" className="text-start" data-aos="zoom-in">

                        <h2 className="fw-bold mt-3">
                            Apply Home Loan Online at <span className="text-st">SmartMind</span>
                        </h2>

                        <ul className="list-unstyled mt-3">
                            <li className="mb-2">✔ Loan Offers from 30+ Banks</li>
                            <li className="mb-2">✔ Highest Loan Value & Lowest ROI</li>
                            <li className="mb-2">✔ Dedicated RM for Property Search</li>
                            <li className="mb-2">✔ Fastest Loan Disbursal</li>
                        </ul>

                        <Button color="link" className="fw-semibold text-decoration-none">
                            Check Your Credit Score <FiChevronRight />
                        </Button>
                    </Col>

                    {/* RIGHT SIDE - FORM */}
                    <Col md="4">
                        <div className="p-4 shadow-sm rounded-4 bg-white" data-aos="zoom-in">
                            <h4 className="fw-bold mb-4 fs-5 text-center">Get your Best Home Loan offer!</h4>

                            <Form className="small">
                                {/* Loan Amount */}
                                <FormGroup>
                                    <Label>Enter Loan Amount</Label>
                                    <Input type="number" placeholder="e.g. 25,00,000" />
                                </FormGroup>

                                {/* Mobile + Country Code */}
                                <FormGroup className="mt-3">
                                    <Label>Mobile Number</Label>
                                    <div className="d-flex">
                                        <Input
                                            type="text"
                                            value="+91"
                                            className="me-2"
                                            style={{ maxWidth: "70px" }}
                                            readOnly
                                        />
                                        <Input type="number" placeholder="Enter mobile number" />
                                    </div>
                                </FormGroup>

                                {/* City */}
                                <FormGroup className="mt-3">
                                    <Label>Which city are you buying in?</Label>
                                    <Input type="text" placeholder="Enter your city" />
                                </FormGroup>

                                {/* Radio */}
                                <FormGroup tag="fieldset" className="mt-3">
                                    <Label>Have you finalized your property?</Label>
                                    <div className="d-flex">
                                        <FormGroup check className="me-2">
                                            <Input name="radio1" type="radio" /> <Label check>Yes</Label>
                                        </FormGroup>
                                        <FormGroup check className="">
                                            <Input name="radio1" type="radio" /> <Label check>No</Label>
                                        </FormGroup>
                                    </div>
                                </FormGroup>

                                {/* Submit */}
                                <Button color="danger" className="rounded-pill btn-danger w-100  btn btn-danger btn-sm px-4">
                                    Check Offers
                                </Button>

                                <p className="mt-3 small text-center text-muted">
                                    By continuing, I agree to DigiEstate GroupT&C
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoanHero;
