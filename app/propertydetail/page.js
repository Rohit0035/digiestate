"use client"
import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Badge,
    Nav,
    NavLink,
    NavItem,
} from "reactstrap";
import {
    FaBed,
    FaBath,
    FaCarAlt,
    FaArrowUp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaDownload,
    FaUserCircle,
} from "react-icons/fa";
import PropertyDescription from "../../components/propertydsection/PropertyDescription";
import ProMoreDetail from "../../components/propertydsection/ProMoreDetail";
import ProAboutProject from "../../components/propertydsection/ProAboutProject";
import ProAmenities from "../../components/propertydsection/ProAmenities";
import PropertyLiked from "../../components/propertydsection/PropertyLiked";
import ProLocalitySection from "../../components/propertydsection/ProLocalitySection";
import ProReviews from "../../components/propertydsection/ProReviews";
import NearbyLandmarks from "../../components/propertydsection/NearbyLandmarks";
// import NearbyLandmarkMap from "../../components/propertydsection/NearbyLandmarkMap";
import "leaflet/dist/leaflet.css";
import WonerProperty from "../../components/propertydsection/WonerProperty";
import VerifiedSmartMind from "../../components/propertydsection/VerifiedSmartMind";
import ProPriceTrends from "../../components/propertydsection/ProPriceTrends";
import ProAdsBanner from "../../components/propertydsection/ProAdsBanner";
import ProAgentsList from "../../components/propertydsection/ProAgentsList";
import ProTools from "../../components/propertydsection/ProTools";
import ProCloserSearch from "../../components/propertydsection/ProCloserSearch";
import dynamic from "next/dynamic";
const NearbyLandmarkMap = dynamic(
    () => import("../../components/propertydsection/NearbyLandmarkMap"),
    { ssr: false }
);
const PropertyDetail = () => {
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
        <div className="property-detail-page position-relative bg-light py-4">
            {/* ✅ Sticky Product Navbar (hidden by default, shows on scroll) */}
            {/* {showStickyNav && (
                <div style={{ zIndex: '11111' }} className=" d-none d-sm-block container sticky-top bg-white ">
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="4">
                            <h6 className="mb-0 fw-bold st-txt-o mt-3">₹3.3 Lac | 4 BHK - Whitefield, Bangalore</h6>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="4">
                            <Nav className=" mb-1 small mt-2 ">
                                <NavItem>
                                    <NavLink href="#Overview" className="text-dark fw-semibold me-2 px-2">
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
                        <Col xs="12" sm="12" md="12" lg="4">
                            <div className="text-end mt-2 mb-1">
                                <Button color="danger" className="rounded-pill px-3 py-1 ">
                                    Contact Agent
                                </Button>
                            </div>

                        </Col>
                    </Row>
                </div>
            )} */}
            <div className="">
                <Container>
                    <Row>
                        {/*LEFT SIDE */}
                        <Col lg="9" md="12">
                            <Row>
                                <Col lg="12">
                                    <PropertyDescription />
                                </Col>
                                <Col lg="12">
                                    <ProMoreDetail />
                                </Col>
                                <Col lg="12">
                                    <ProAboutProject />
                                </Col>
                                <Col lg="12">
                                    <ProAmenities />
                                </Col>
                                <Col lg="12">
                                    <PropertyLiked />
                                </Col>
                                <Col lg="12">
                                    <ProLocalitySection />
                                </Col>
                                <Col lg="12">
                                    <ProReviews />
                                </Col>
                                <Col lg="12">
                                    <NearbyLandmarks />
                                </Col>
                                <Col lg="12">
                                    <NearbyLandmarkMap />
                                </Col>
                            </Row>

                        </Col>

                        {/*RIGHT SIDE - Sticky Sidebar */}
                        <Col lg="3" md="12">
                            <div className="position-sticky" style={{ top: showStickyNav ? "80px" : "20px" }}>
                                <Card className="shadow-sm mb-4 border-0">
                                    <CardBody className="text-center">
                                        <h6 className="fw-bold mb-1">Contact Agent</h6>
                                        <p className="text-muted">Lavanya</p>
                                        <Button color="danger" className="w-100 rounded-pill mb-2">
                                            <FaPhoneAlt className="me-2" /> Get Phone No.
                                        </Button>
                                    </CardBody>
                                </Card>

                                <Card className="shadow-sm mb-4 text-center border-0">
                                    <CardBody>
                                        <Button color="outline-danger" className="rounded-pill w-100">
                                            <FaDownload className="me-2" /> Download Brochure
                                        </Button>
                                    </CardBody>
                                </Card>

                                <Card className="shadow-sm mb-2 border-0">
                                    <CardBody className="text-center">
                                        <h6 className="fw-bold">Top Agent in this Locality</h6>
                                        <div className="text-center my-3">
                                            <FaUserCircle size={60} className="text-secondary" />
                                            <p className="mb-0 fw-bold mt-2">Nausheen</p>
                                            <small className="text-muted">White City Properties</small>
                                        </div>
                                        <div className="d-flex justify-content-around mt-2">
                                            <div>
                                                <h6 className="fw-bold mb-0">21</h6>
                                                <small>For Sale</small>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-0">30</h6>
                                                <small>For Rent</small>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2 mt-3">
                                            <Button color="outline-dark" className="w-50 rounded-pill btn-sm">
                                                View Profile
                                            </Button>
                                            <Button color="danger" className="w-50 rounded-pill btn-sm">
                                                View Properties
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card className="shadow-sm mb-2 border-0">
                                    <CardBody className="text-center">
                                        <h6 className="fw-bold">Top Agent in this Locality</h6>
                                        <div className="text-center my-3">
                                            <FaUserCircle size={60} className="text-secondary" />
                                            <p className="mb-0 fw-bold mt-2">Nausheen</p>
                                            <small className="text-muted">White City Properties</small>
                                        </div>
                                        <div className="d-flex justify-content-around mt-2">
                                            <div>
                                                <h6 className="fw-bold mb-0">21</h6>
                                                <small>For Sale</small>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-0">30</h6>
                                                <small>For Rent</small>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2 mt-3">
                                            <Button color="outline-dark" className="w-50 rounded-pill btn-sm">
                                                View Profile
                                            </Button>
                                            <Button color="danger" className="w-50 rounded-pill btn-sm">
                                                View Properties
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>

                        {/* owner property list */}
                        <Col lg="12">
                            <WonerProperty />
                        </Col>

                        {/* verify property smartmind  */}
                        <Col lg="12">
                            <VerifiedSmartMind />
                        </Col>

                        {/* with graph section */}
                        <Col lg="12">
                            <ProPriceTrends />
                        </Col>

                        {/* ads banner section */}
                        <Col lg="12">
                            <ProAdsBanner />
                        </Col>

                        {/* Agents section */}
                        <Col lg="12">
                            <ProAgentsList />
                        </Col>

                        {/* pro tolls  */}
                        <Col lg="12">
                            <ProTools />
                        </Col>

                        {/* close serach */}
                        <Col lg="12">
                            <ProCloserSearch />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PropertyDetail;
