"use client";

import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import homeloanimg from "../../assets/images/img-loan-abt.png"
const PropertyNotFinalized = () => {
    return (
        <section className="py-0 bg-white">
            <Container>
                <Row className="align-items-center">
                    {/* Left Image */}
                    <Col md="5" className="text-center mb-4 mb-md-0">
                        <Image
                            src={homeloanimg}
                            alt="Property Illustration"
                            className="img-fluid w-100 rounded"
                        />
                    </Col>

                    {/* Right Content */}
                    <Col md="7">
                        <h3 className="fw-bold mb-3">Property not finalized yet?</h3>

                        <p className="text-muted mb-3">
                            Unlock the power of a Pre-approved Loan. Apply now and make your
                            property search more focused and easy.
                        </p>

                        <h6 className="fw-bold mb-3">Benefits of Pre-approved loans</h6>

                        <Row>
                            <Col sm="6">
                                <p className="mb-2">
                                    <FaCheck color="green" size={14} className="me-2" />
                                    Plan your budget smartly
                                </p>
                                <p className="mb-2">
                                    <FaCheck color="green" size={14} className="me-2" />
                                    Negotiate a better deal with the seller
                                </p>
                            </Col>

                            <Col sm="6">
                                <p className="mb-2">
                                    <FaCheck color="green" size={14} className="me-2" />
                                    Get the loan processed quickly
                                </p>
                            </Col>
                        </Row>

                        <Button
                            className="mt-4 btn btn-danger rounded-pill btn-sm px-5 py-2"
                        >
                            Explore Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PropertyNotFinalized;
