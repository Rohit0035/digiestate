"use client";
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, CardBody, Button, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import Image from "next/image";
import agentimg from "../../assets/images/agent-pic.png"
import comimg from "../../assets/images/cpm-logo.png"
import vimg from "../../assets/images/veriy-png.png"
import { FaHome, FaHandshake, FaUsers } from "react-icons/fa";
import EnquiryModal from "../../components/EnquiryModal";
import AboutAgent from "../../components/agentsections/AboutAgent";
import AgentTeam from "../../components/agentsections/AgentTeam";
import PropertySale from "../../components/agentsections/PropertySale";
import PropertyRent from "../../components/agentsections/PropertyRent";
const AgentsDetail = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (

        <>
            <section className="py-5" style={{ backgroundColor: '#ffeff1' }}>

                <Container>
                    <Row>
                        <Col lg="1">
                        </Col>
                        <Col lg="10">
                            <Card className="border rounded-4 shadow-sm " data-aos="zoom-in-up">
                                <CardBody className="p-3">
                                    <Row className="">
                                        {/* ===== Left Side: Agent Photo + Logo ===== */}
                                        <Col md="3" className="text-center border-end mt-0">
                                            <div className=" text-center">
                                                <Image
                                                    src={agentimg}
                                                    alt="Agent"
                                                    className="border w-100 border-1 border-info  bg-light object-cover"
                                                    style={{
                                                        height: '150px'
                                                    }}
                                                />
                                                <div className="p-4 bg-light text-center">
                                                    <Image
                                                        src={comimg}
                                                        alt="Agency Logo"
                                                        className="ms-auto me-auto border w-50 border-1 border-info mb-2 bg-light object-cover"
                                                    />
                                                </div>

                                                <div>
                                                    <Button color="danger" onClick={toggle} className="rounded-pill w-100 my-2 px-4 mb-2 btn-sm">
                                                        Contact Agent
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* ===== Middle Section: Agent Info + Stats ===== */}
                                        <Col md="6">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <div>
                                                    <h5 className="fw-bold mb-0">Salman</h5>
                                                    <p className="mb-1 text-muted">
                                                        <span className="fw-semibold">B S Associates</span>
                                                    </p>
                                                    <p className="small text-secondary mb-2">RERA ID: PRM/KA/RERA/121/309/AG/210107/002175 Operating since: 2010</p>
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
                                                    <p className="mb-1 small py-2 ">
                                                        <strong>About Agent: </strong><br />
                                                        <span className="text-muted">
                                                            We deal in all types of residential and commercial properties.
                                                        </span>
                                                    </p>
                                                    <p className="mb-1 small py-2 border-top">
                                                        <strong>Deals in:</strong>{" "}<br />
                                                        <span className="text-muted">Rent/Lease, Pre-launch, Resale</span>
                                                    </p>
                                                    <p className="mb-0 small py-2 border-top">
                                                        <strong>Operates in:</strong>{" "}<br />
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

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="1">
                        </Col>
                    </Row>

                </Container>

            </section>

            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg="1"></Col>
                        <Col lg="10">
                            <AboutAgent />
                            <AgentTeam />
                            <PropertySale />
                            <PropertyRent />
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </section>


            {/*  EnquiryModal*/}
            <EnquiryModal modal={modal} toggle={toggle} />

        </>

    );
};
export default AgentsDetail;