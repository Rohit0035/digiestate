"use client";
import React, { useState, useEffect } from "react";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { Nav, NavItem, NavLink, Row, Col, Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import ImageGrid from "../../components/projectdetailsection/ImageGrid";
import ProjectDetailInfo from "../../components/projectdetailsection/ProjectDetailInfo";
import Amenities from "../../components/projectdetailsection/Amenities";
import ProjectAbout from "../../components/projectdetailsection/ProjectAbout";
import Ratings from "../../components/projectdetailsection/Ratings";
import AdsFullBanner from "../../components/projectdetailsection/AdsFullBanner";
import LegalCertificates from "../../components/projectdetailsection/LegalCertificates";
import PropertyGallery from "../../components/projectdetailsection/PropertyGallery";
import FaqSection from "../../components/projectdetailsection/FaqSection";
const ProjectDetail = () => {
    const [showStickyNav, setShowStickyNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) setShowStickyNav(true);
            else setShowStickyNav(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <BreadcrumbNav />

            {/* {showStickyNav && (
                <div style={{ zIndex: '11111' }} className=" d-none d-sm-block container sticky-top bg-white ">
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="12">
                            <Nav className=" mb-1 small mt-2 ">
                                <NavItem>
                                    <NavLink href="#overview" className="text-dark fw-semibold me-2 px-2">
                                        Overview
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#moredetails" className="text-dark fw-semibold me-2 px-2">
                                        More Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#aboutlocality" className="text-dark fw-semibold px-2">
                                        About Locality
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            )} */}

            <ImageGrid />


            <section className="py-4" style={{ minHeight: "100vh" }}>
                <Container>
                    <Row>
                        {/* Main Content */}
                        <Col lg="9" md="8" sm="12" className="pe-lg-4">
                            <div
                            >
                                <ProjectDetailInfo />
                                <Amenities />
                                <ProjectAbout />
                                <Ratings />
                                <AdsFullBanner />
                                <LegalCertificates />
                                <PropertyGallery />
                                <AdsFullBanner />
                                <FaqSection/>
                            </div>
                        </Col>

                        {/* Sticky Sidebar */}
                        <Col lg="3" md="4" sm="12">
                            <div
                                className="position-sticky top-0"
                                style={{
                                    top: "200px", // adjust based on header height
                                }}
                            >
                                <Card className="bg-light">
                                    <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Label className="fw-semibold small">Your Name</Label>
                                                <Input type="text" placeholder="Your Name" />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label className="fw-semibold small">Email</Label>
                                                <Input type="email" placeholder="Email" />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label className="fw-semibold small">WhatsApp Number</Label>
                                                <Row className="g-2 align-items-center">
                                                    <Col xs="4" sm="3">
                                                        <Input type="select" defaultValue="+91">
                                                            <option>+91</option>
                                                            <option>+1</option>
                                                            <option>+44</option>
                                                        </Input>
                                                    </Col>
                                                    <Col xs="8" sm="9">
                                                        <Input type="text" placeholder="Your WhatsApp Number" />
                                                    </Col>
                                                </Row>
                                            </FormGroup>

                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="agreeCheck"
                                                />
                                                <label className="form-check-label small" htmlFor="agreeCheck">
                                                    I Agree to <span className="text-danger">DigiEstate GroupTerms of Use</span>
                                                </label>
                                            </div>

                                            <Button

                                                block
                                                className="py-2 fw-bold btn-danger btn-sm rounded-pill"
                                            >
                                                Continue
                                            </Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
};
export default ProjectDetail;