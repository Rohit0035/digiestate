"use client";

import React, { useState } from "react";
import {
    Card,
    CardBody,
    Button,
    Collapse,
    Modal,
    ModalBody,
    Row,
    Col,
    Badge,
} from "reactstrap";
import { FaStar, FaPlayCircle, FaTrain, FaUsers, FaWifi } from "react-icons/fa";
import Image from "next/image";
import whitefieldImg from "../../assets/images/pro-1.jpg";

const AboutWhitefield = () => {
    const [readMore, setReadMore] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <section className="pt-0">
            <Card className="border-0 shadow-sm bg-light" data-aos="fade-up">
                <CardBody>
                    {/* Header */}
                    <h5 className="fw-bold mb-3">About Whitefield</h5>

                    {/* Top Section */}
                    <Row className="align-items-center">
                        <Col md="6" className="mb-3 mb-md-0 position-relative">
                            <div className="position-relative rounded overflow-hidden">
                                <Image
                                    src={whitefieldImg}
                                    alt="Whitefield Bengaluru"
                                    className="img-fluid rounded"
                                />
                                {/* Play Button Overlay */}
                                <Button
                                    color="danger"
                                    className="position-absolute top-50 start-50 translate-middle rounded-circle p-0"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        fontSize: "28px",
                                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                                    }}
                                    onClick={() => setVideoOpen(true)}
                                >
                                    <FaPlayCircle />
                                </Button>
                            </div>
                        </Col>

                        <Col md="6">
                            <div className="d-flex ">
                                {/* Rating */}
                                <div>
                                    <h6 className="fw-bold mb-1">
                                        4.1{" "}
                                        <FaStar className="text-warning mb-1" />{" "}
                                        <small className="text-muted">(454 reviews)</small>
                                    </h6>
                                    <p className="mb-1 text-muted">
                                        <strong>Rank:</strong> 152 out of 4755 localities
                                    </p>

                                    {/* Price Info */}
                                    <div className="tet-start">
                                        <p className="mb-1 fw-bold text-secondary small">
                                            Locality Average Price
                                        </p>
                                        <h6 className="fw-bold text-st mb-0">
                                            ₹12,789/sq.ft{" "}
                                            <Badge color="light" className="text-success">
                                                +3.43% (3 Mo)
                                            </Badge>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Locality Description */}
                    <div className="mt-4 text-muted small">
                        <p className="mb-2">
                            Whitefield is a developed residential locality and a well-known IT
                            hub situated on the eastern periphery of Bengaluru. The locality
                            is known for housing offices of several IT companies. It is
                            primarily an end-user driven residential market, with completion
                            of mix of completed as well as under-construction projects.
                            Prominent residential projects situated nearby are Prestige
                            Shantiniketan, Prestige Lakeside Habitat, Brigade Cosmopolis, and
                            Divyasree Republic of Whitefield.
                        </p>

                        <Collapse isOpen={readMore}>
                            <p className="mb-2">
                                Whitefield offers good road connectivity and social
                                infrastructure. With several upcoming projects and metro line
                                extensions, it continues to attract both end-users and investors
                                alike.
                            </p>
                        </Collapse>

                        <Button
                            color="link"
                            className="p-0 fw-bold text-st"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less ▲" : "Read More ▼"}
                        </Button>
                    </div>

                    {/* Things to Keep in Mind */}
                    <div className="mt-4">
                        <h6 className="fw-bold">Things to keep in mind</h6>
                        <ul className="list-unstyled small text-muted mb-0">
                            <li className="mb-2 d-flex align-items-start">
                                <FaTrain className="me-2 text-st mt-1" />
                                A dedicated train station on the Chennai Central-Bangalore City
                                Line allows for extensive connectivity.
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                                <FaUsers className="me-2 text-st mt-1" />
                                Preferred residential destination for people working in nearby
                                tech parks such as International Tech Park, EPIP Zone, GR Tech
                                Park, and Sigma Tech Park.
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                                <FaWifi className="me-2 text-st mt-1" />
                                Enjoys presence of all key amenities and excellent road and rail
                                connectivity with the rest of the city.
                            </li>
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="text-start mt-4">
                        <Button color="danger" className="px-4 fw-bold rounded-pill btn-sm">
                            Explore Whitefield
                        </Button>
                    </div>
                </CardBody>
            </Card>

            {/* Video Modal */}
            <Modal
                isOpen={videoOpen}
                toggle={() => setVideoOpen(!videoOpen)}
                centered
                size="lg"
            >
                <ModalBody className="p-0">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/ysz5S6PUM-U"
                            title="Whitefield Overview"
                            allowFullScreen
                        ></iframe>
                    </div>
                </ModalBody>
            </Modal>
        </section>
    );
};

export default AboutWhitefield;
