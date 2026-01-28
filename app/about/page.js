"use client";
import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";
import {
    FaBuilding,
    FaBullseye,
    FaEye,
    FaHandshake,
    FaUsers,
    FaCity,
    // FaHome,
    FaCheckCircle,
    FaSmile,
    FaHome,
    FaBriefcase,
    FaMapMarkedAlt,
} from "react-icons/fa";

import aboutimg from "../../assets/images/dg/abt-1.jpeg"
import Image from "next/image";
import Counter from "../../components/Counter";


const About = () => {
    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-4">

                        {/* LEFT IMAGE */}
                        <div
                            className="col-lg-6 col-md-12"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <Image
                                src={aboutimg}
                                alt="Digi Estate Group Real Estate"
                                className="img-fluid rounded "
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div
                            className="col-lg-6 col-md-12"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span className="text-st fw-semibold text-uppercase">
                                About Digi Estate Group
                            </span>
                            <h2 className="fw-bold mt-2">
                                Building Trust Through <br className="d-none d-md-block" />
                                Smart Real Estate Solutions
                            </h2>
                            <p className="text-muted mt-2">
                                Digi Estate Group is a trusted real estate and property consulting
                                company offering residential and commercial property solutions
                                backed by transparency, expertise, and market insight.
                            </p>
                            <p className="text-muted">
                                From property consultation and project marketing to site visits
                                and investment guidance, we help our clients make confident and
                                informed real estate decisions that deliver long-term value.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


            {/* ================= VISION & MISSION ================= */}
            <section className="py-5">
                <Container>
                    <Row className="g-4">
                        {/* Vision */}
                        <Col md="6" data-aos="zoom-in"
                            data-aos-duration="1000">
                            <Card className="h-100 shadow-sm border-0 bg-light">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <FaEye className="fs-1 text-warning me-3" />
                                        <h4 className="fw-bold mb-0">Our Vision</h4>
                                    </div>
                                    <hr />
                                    <p className="text-muted">
                                        To become the most trusted real estate brand by redefining property
                                        buying through innovation, transparency, and customer-first
                                        solutions.
                                    </p>

                                    <ul className="list-unstyled mt-3 mb-0">
                                        <li className="mb-2">
                                            <FaCheckCircle className="text-warning me-2" />
                                            Build long-term relationships based on trust
                                        </li>
                                        <li className="mb-2">
                                            <FaCheckCircle className="text-warning me-2" />
                                            Set new benchmarks in real estate advisory
                                        </li>
                                        <li>
                                            <FaCheckCircle className="text-warning me-2" />
                                            Enable smarter property investments
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* Mission */}
                        <Col md="6" data-aos="zoom-in"
                            data-aos-duration="1000">
                            <Card className="h-100 shadow-sm border-0 bg-light">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <FaBullseye className="fs-1 text-warning me-3" />
                                        <h4 className="fw-bold mb-0">Our Mission</h4>
                                    </div>
                                    <hr />
                                    <p className="text-muted">
                                        To simplify real estate decisions by providing verified
                                        properties, expert consultation, and complete support from search
                                        to possession.
                                    </p>

                                    <ul className="list-unstyled mt-3 mb-0">
                                        <li className="mb-2">
                                            <FaCheckCircle className="text-warning me-2" />
                                            100% verified and transparent listings
                                        </li>
                                        <li className="mb-2">
                                            <FaCheckCircle className="text-warning me-2" />
                                            Personalized guidance for every buyer
                                        </li>
                                        <li>
                                            <FaCheckCircle className="text-warning me-2" />
                                            End-to-end support including legal & documentation
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* Core Values */}
                        <Col md="12" className="mt-5">
                            <Card className="border-0 bg-white">
                                <CardBody>
                                    <h4 className="fw-bold mb-4 text-center">
                                        Our <span className="text-warning">Core Values</span>
                                    </h4>

                                    <Row className="g-4">
                                        {/* Trust */}
                                        <Col md="3" data-aos="fade-up">
                                            <div className="p-4 h-100 rounded-4 bg-success bg-opacity-10">
                                                <div className="d-flex align-items-start">
                                                    <FaHandshake className="fs-2 text-warning me-3 mt-1" />
                                                    <div>
                                                        <h6 className="fw-bold mb-1">Trust</h6>
                                                        <p className="text-muted small mb-0">
                                                            Transparent dealings and honest guidance in every property
                                                            transaction.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* Customer First */}
                                        <Col md="3" data-aos="fade-up" data-aos-delay="100">
                                            <div className="p-4 h-100 rounded-4 bg-primary bg-opacity-10">
                                                <div className="d-flex align-items-start">
                                                    <FaUsers className="fs-2 text-warning me-3 mt-1" />
                                                    <div>
                                                        <h6 className="fw-bold mb-1 text-dark">Customer First</h6>
                                                        <p className="text-muted small mb-0">
                                                            Every decision is driven by client satisfaction and long-term
                                                            value.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* Expertise */}
                                        <Col md="3" data-aos="fade-up" data-aos-delay="200">
                                            <div className="p-4 h-100 rounded-4 bg-warning bg-opacity-10">
                                                <div className="d-flex align-items-start">
                                                    <FaCity className="fs-2 text-warning me-3 mt-1" />
                                                    <div>
                                                        <h6 className="fw-bold mb-1">Expertise</h6>
                                                        <p className="text-muted small mb-0">
                                                            In-depth market knowledge to help you invest with confidence.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* Integrity */}
                                        <Col md="3" data-aos="fade-up" data-aos-delay="300">
                                            <div className="p-4 h-100 rounded-4 bg-danger bg-opacity-10">
                                                <div className="d-flex align-items-start">
                                                    <FaBuilding className="fs-2 text-warning me-3 mt-1" />
                                                    <div>
                                                        <h6 className="fw-bold mb-1">Integrity</h6>
                                                        <p className="text-muted small mb-0">
                                                            Ethical practices and transparency in every real estate deal.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>




            {/* ================= COUNTER SECTION ================= */}
            <section className="py-5" style={{ backgroundColor: "#3d7866" }}>
                <Container>
                    <Row className="text-center g-4">
                        {/* Happy Clients */}
                        <Col md="3" data-aos="fade-up">
                            <FaSmile className="fs-1 text-white mb-2" />
                            <Counter end={10000} suffix="+" />
                            <p className="text-white">Happy Clients</p>
                        </Col>

                        {/* Verified Properties */}
                        <Col md="3" data-aos="fade-up" data-aos-delay="100">
                            <FaHome className="fs-1 text-white mb-2" />
                            <Counter end={1000} suffix="+" />
                            <p className="text-white">Verified Properties</p>
                        </Col>

                        {/* Experience */}
                        <Col md="3" data-aos="fade-up" data-aos-delay="200">
                            <FaBriefcase className="fs-1 text-white mb-2" />
                            <Counter end={15} suffix="+" />
                            <p className="text-white">Years Experience</p>
                        </Col>

                        {/* Cities */}
                        <Col md="3" data-aos="fade-up" data-aos-delay="300">
                            <FaMapMarkedAlt className="fs-1 text-white mb-2" />
                            <Counter end={5} suffix="+" />
                            <p className="text-white">Cities Covered</p>
                        </Col>
                    </Row>
                </Container>
            </section>


           
        </>
    );
};

export default About;
