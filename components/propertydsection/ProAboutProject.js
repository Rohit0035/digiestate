"use client";
import React from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Badge,
} from "reactstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import projectImg from "../../assets/images/pro-1.jpg"; 
import Link from "next/link";

const ProAboutProject = () => {
    return (
        <Card className="mt-4 shadow-sm border-0" data-aos="fade-up" id="aboutproject">
            <CardBody>
                <Row>
                    <Col lg="12">
                        <div className="d-flex justify-content-between mb-4">
                            <h4 className="fw-bold mb-0">About Project</h4>
                            <a href="#" className="text-st fw-semibold text-decoration-none small">
                                Explore Project <IoIosArrowForward />
                            </a>
                        </div>
                    </Col>
                    <Col lg="12">
                        <Row>
                            <Col md="6">
                                <div className="d-flex">
                                    <div className="me-3 mb-3">
                                        <Image
                                            src={projectImg}
                                            alt="Project"
                                            width={120}
                                            height={120}
                                            className="rounded"
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="border-end">
                                        <h5 className="fw-bold mb-1 small">
                                            <Link href="/" className="st-txt-o text-dark">
                                                L&T Raintree Boulevard
                                            </Link>
                                        </h5>
                                        <p className="text-muted mb-1 small">by <span className="fw-semibold text-dark">L&T Realty</span></p>

                                        {/* Rating */}
                                        <div className="d-flex align-items-center mb-2 small ">
                                            <span className="fw-bold me-1">1.8</span>
                                            <FaStar className="text-warning" />
                                            <FaStar className="text-warning" />
                                            <FaStar className="text-warning" />
                                            <FaRegStar className="text-secondary" />
                                            <FaRegStar className="text-secondary" />
                                            <span className="text-muted ms-2 small me-2">17 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="small ms-1">
                                        <p className="mb-1">Price</p>
                                        <span className="small">
                                            ₹ 2.27 Cr - ₹ 4.82 Cr
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="border rounded p-3 bg-light mb-3 small">
                                    <p className="fw-semibold mb-2 text-dark">
                                        Check Market Price of
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button color="light" className="border rounded-pill fw-semibold btn-sm">
                                            3 BHK <IoIosArrowForward />
                                        </Button>
                                        <Button color="light" className="border rounded-pill fw-semibold btn-sm">
                                            4 BHK <IoIosArrowForward />
                                        </Button>
                                        <Button color="light" className="border rounded-pill fw-semibold btn-sm">
                                            5 BHK <IoIosArrowForward />
                                        </Button>
                                    </div>
                                    <div className="text-end mt-2 small text-muted">
                                        Powered by <span className="fw-semibold">PropWorth</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="12">
                        <Row>
                            <Col md="6" className="mb-3">
                                <Row>
                                    <Col xs="6" sm="6" md="6" lg="4">
                                        <div className="mb-2 small border-end">
                                            <p className="text-muted mb-0 small">Price per sqft</p>
                                            <p className="fw-semibold mb-0 small">₹ 9,098 - ₹ 27,273</p>
                                        </div>

                                    </Col>
                                    <Col xs="6" sm="6" md="6" lg="4">
                                        <div className="mb-2 small border-end">
                                            <p className="text-muted mb-0 small">Configuration</p>
                                            <p className="fw-semibold mb-0 small">3, 4, 5 BHK Flats</p>
                                        </div>

                                    </Col>
                                    <Col xs="6" sm="6" md="6" lg="4">
                                        <div className="mb-2 small border-end">
                                            <p className="text-muted mb-0 small">Tower & Unit</p>
                                            <p className="fw-semibold mb-0 small">17 Towers, 1088 Units</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="6">
                                <div className="text-center">
                                    <Button outline color="dark"  className="rounded-pill btn-sm  btn-danger text-white me-2 fw-semibold">
                                        Download Brochure
                                    </Button>
                                    <Button outline color="dark" className="rounded-pill btn-sm fw-semibold">
                                        Compare Projects
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ProAboutProject;
