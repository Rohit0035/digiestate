"use client";

import React, { useState } from "react";
import { Card, CardBody, Row, Col, Button, Badge } from "reactstrap";
import { FaHome, FaHandshake, FaUsers } from "react-icons/fa";
import Image from "next/image";
import agentimg from "../assets/images/agent-pic.png"
import comimg from "../assets/images/cpm-logo.png"
import vimg from "../assets/images/veriy-png.png"
import EnquiryModal from "./EnquiryModal";

const AgentHorizontalCard = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Card className="border rounded-4 shadow-sm ">
                <CardBody className="p-3">
                    <Row className="">
                        {/* ===== Left Side: Agent Photo + Logo ===== */}
                        <Col md="3" className="text-center border-end mt-0">
                            <div className="d-flex">
                                <Image
                                    src={agentimg}
                                    alt="Agent"
                                    className="border border-1 border-info mb-2 bg-light object-cover"
                                    width="100"
                                    height="100"
                                />
                                <div className="">
                                    <Image
                                        src={comimg}
                                        alt="Agency Logo"
                                        className="border border-1 border-info mb-2 bg-light object-cover"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                            </div>
                        </Col>

                        {/* ===== Middle Section: Agent Info + Stats ===== */}
                        <Col md="6">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h5 className="fw-bold mb-0">Jatin Gera</h5>
                                    <p className="mb-1 text-muted">
                                        Home Search Realty, <span className="fw-semibold">Mohali</span>
                                    </p>
                                    <p className="small text-secondary mb-2">Operating since: 2015</p>
                                </div>
                            </div>

                            <Row className="text-center bg-light rounded py-2 mb-2">
                                <Col>
                                    <h6 className="fw-bold mb-0">
                                        <FaHome className="me-1 text-danger" /> 38
                                    </h6>
                                    <small className="text-muted">Properties for Sale</small>
                                </Col>
                                <Col>
                                    <h6 className="fw-bold mb-0">
                                        <FaHandshake className="me-1 text-danger" /> 40
                                    </h6>
                                    <small className="text-muted">Deals Closed</small>
                                </Col>
                                <Col>
                                    <h6 className="fw-bold mb-0">
                                        <FaUsers className="me-1 text-danger" /> 2
                                    </h6>
                                    <small className="text-muted">Team Members</small>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <p className="mb-1 small">
                                        <strong>About Agent: </strong>
                                        <span className="text-muted">
                                            We deal in all types of residential and commercial properties.
                                        </span>
                                    </p>
                                    <p className="mb-1 small">
                                        <strong>Deals in:</strong>{" "}
                                        <span className="text-muted">Rent/Lease, Pre-launch, Resale</span>
                                    </p>
                                    <p className="mb-0 small">
                                        <strong>Operates in:</strong>{" "}
                                        <span className="text-muted">Zirakpur</span>
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        {/* ===== Right Side: Badge + Buttons ===== */}
                        <Col
                            md="3"
                            className="text-center border-start d-flex flex-column justify-content-center align-items-center py-3 bg-light"
                        >
                            <div className="mb-2 text-center">
                                <Image
                                    src={vimg}
                                    alt="Preferred Agent"
                                    width="65"
                                    height="65"
                                    className="ms-auto me-auto"
                                />
                                <p className="small text-muted mb-1">Trusted by Many Users</p>
                            </div>
                            <div>
                                <Button color="danger" onClick={toggle} className="rounded-pill px-4 mb-2 btn-sm">
                                    Contact Agent
                                </Button>
                                <Button outline color="danger" className="rounded-pill px-4 btn-sm">
                                    View Details
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/*  EnquiryModal*/}
            <EnquiryModal modal={modal} toggle={toggle} />

        </>

    );
};

export default AgentHorizontalCard;
