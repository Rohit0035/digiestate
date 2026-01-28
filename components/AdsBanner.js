"use client";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Image from "next/image";
import AdsBanner1 from "../assets/images/dg/ads1.png";
import AdsBanner2 from "../assets/images/dg/ads2.png";


const AdsBanner = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col md='12'>
                        <h4 className="fw-bold mb-4">
                            PataBadloLifeBadlo Inspiration
                            <span
                                style={{
                                    display: "block",
                                    width: "60px",
                                    height: "3px",
                                    background: "#6e2e36",
                                    marginTop: "5px",
                                }}
                            ></span>
                        </h4>
                    </Col>
                    <Col md="6" className="mb-2 ">
                        <Card className="border-top rounded-2 h-100" data-aos="zoom-in-up">
                            <CardBody className="p-2">
                                <Image src={AdsBanner1} alt="smartmind" className="w-100 rounded " />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" className="mb-2">
                        <Card className="border-top rounded-2 h-100" data-aos="zoom-in-up">
                            <CardBody className="p-2">
                                <Image src={AdsBanner2} alt="smartmind" className="w-100 rounded " />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default AdsBanner;
