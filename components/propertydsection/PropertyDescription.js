"use client";
import React, { useState } from "react";
import {
    Card, CardBody, Row, Col, UncontrolledPopover,
    PopoverHeader,
    PopoverBody,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import ImageGridWithLightbox from "./ImageGridWithLightbox";
import { IoBedOutline } from "react-icons/io5";
import { FaBath, FaChair, FaCheckCircle, FaUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import EnquiryModal from "../EnquiryModal";

const PropertyDescription = () => {

    // modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Card className="border-0" data-aos="zoom-in" id="Overview">
                <CardBody>
                    <Row>
                        <Col lg="12">
                            <div className="d-flex justify-content-between">
                                <h4>
                                    ₹3.3 Lac
                                    <span id="PopoverCharges"
                                        color="link" style={{ cursor: 'pointer' }} className="small ms-1 fs-6 text-scondary cursor-pointer ">
                                        See other charges
                                        <UncontrolledPopover
                                            placement="bottom"
                                            target="PopoverCharges"
                                            trigger="legacy"
                                            className="shadow-lg border-0 rounded-3"
                                        >
                                            <PopoverBody>
                                                <div className="small">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Rent</span>
                                                        <span className="fw-semibold">₹25,000</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-3">
                                                        <span>Monthly Maintenance</span>
                                                        <span className="fw-semibold">₹3,000</span>
                                                    </div>

                                                    <div className="border-top pt-2 mb-2 d-flex justify-content-between fw-bold">
                                                        <span>Monthly Charges</span>
                                                        <span>₹28,000</span>
                                                    </div>

                                                    <div className="bg-light rounded-3 p-3 mb-2">
                                                        <div className="fw-semibold mb-2">First Month Charges</div>

                                                        <div className="d-flex justify-content-between mb-1">
                                                            <span>Monthly Charges</span>
                                                            <span>₹28,000</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <span>Security Deposit</span>
                                                            <span>₹2,50,000</span>
                                                        </div>

                                                        <div className="border-top pt-2 d-flex justify-content-between fw-bold">
                                                            <span>Total First Month Amount</span>
                                                            <span>₹2,78,000</span>
                                                        </div>
                                                    </div>

                                                    <small className="text-muted">
                                                        Electricity and water charges excluded
                                                    </small>
                                                </div>
                                            </PopoverBody>
                                        </UncontrolledPopover>
                                    </span>

                                </h4>
                                <UncontrolledDropdown direction="down" className="d-inline-block">
                                    <DropdownToggle
                                        caret={false}
                                        color="light"
                                        className="border-0 bg-transparent p-0"
                                        style={{ boxShadow: "none" }}
                                    >
                                        <BiDotsVerticalRounded size={22} className="text-dark" />
                                    </DropdownToggle>
                                    <DropdownMenu
                                        end
                                        className="shadow-sm border-0 rounded-3 py-2"
                                        style={{ minWidth: "160px" }}
                                    >
                                        <DropdownItem>Share Property</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </Col>
                        <Col lg="12">
                            <h6 className="mb-3">
                                3 BHK Flat 1180 Sq-ft For Rent in Sundher Classic,
                                <span className="ms-1 me-2">
                                    <Link href="/" className="text-st">
                                        Banashankari, Bangalore
                                    </Link>
                                </span>
                                <span className="ms-1 ">
                                    <Link href="/" className="text-st">
                                        <IoLocationOutline className="" /> View on map
                                    </Link>
                                </span>
                            </h6>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="4">
                            <ImageGridWithLightbox />
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="8">
                            <Row className="bg-light py-2">
                                <Col xs="6" sm="6" md="3" lg="3" className="d-flex align-items-center gap-2 border-end">
                                    <IoBedOutline size={18} className="text-st" />
                                    <span><b>3</b> Beds</span>
                                </Col>

                                <Col xs="6" sm="6" md="3" lg="3" className="d-flex align-items-center gap-2 border-end">
                                    <FaBath size={18} className="text-st" />
                                    <span><b>2</b> Baths</span>
                                </Col>

                                <Col xs="6" sm="6" md="3" lg="3" className="d-flex align-items-center gap-2 border-end">
                                    <FaBuilding size={18} className="text-st" />
                                    <span><b>2</b> Balconies</span>
                                </Col>

                                <Col xs="6" sm="6" md="3" lg="3" className="d-flex align-items-center gap-2">
                                    <FaChair size={18} className="text-st" />
                                    <span>Unfurnished</span>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Carpet Area</p>
                                    <strong className="d-flex small"> 1750
                                        <span>
                                            <UncontrolledDropdown>
                                                <DropdownToggle caret className="ms-1 bg-transparent text-dark border-0 p-0" >
                                                    sqft
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>sqft</DropdownItem>
                                                    <DropdownItem>sqyrd</DropdownItem>
                                                    <DropdownItem>sqm</DropdownItem>
                                                    <DropdownItem>acre</DropdownItem>
                                                    <DropdownItem>bigha</DropdownItem>
                                                    <DropdownItem>hectare</DropdownItem>
                                                    <DropdownItem>marla</DropdownItem>
                                                    <DropdownItem>kanal</DropdownItem>
                                                    <DropdownItem>biswal</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </span>
                                    </strong>
                                    <p className="small mb-0">₹63/sqft</p>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Developer</p>
                                    <strong className="d-flex small"> <Link href="3" className="text-dark">L&T Realty</Link></strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Project</p>
                                    <strong className="d-flex small"> <Link href="#" className="text-dark st-txt-o">L&T Raintree Boulevard</Link></strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Floor</p>
                                    <strong className="d-flex small"> 7(Out of 14 Floors)</strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Status</p>
                                    <strong className="d-flex small"> Immediately</strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Additional Rooms</p>
                                    <strong className="d-flex small"> 1 Store Room</strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Facing</p>
                                    <strong className="d-flex small"> East</strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Lift</p>
                                    <strong className="d-flex small"> 1</strong>
                                </Col>
                                <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                                    <p className="text-secondary mb-0">Furnished Status</p>
                                    <strong className="d-flex small"> Semi-Furnished</strong>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12">
                            <p className="mb-0 mt-3">
                                <span>
                                    <FaCheckCircle className="me-2" />
                                </span>
                                East Facing Property
                            </p>
                            <hr />
                        </Col>
                        <Col md="6">
                            <Button onClick={toggle} className="me-2 rounded-pill mb-2 btn btn-danger btn-sm">
                                Contact Agent
                            </Button>
                            <Button onClick={toggle} className="me-2 rounded-pill mb-2 btn btn-danger btn-sm">
                                Get Phone No.
                            </Button>
                        </Col>
                        <Col md="6">
                            <div className="text-sm-start text-md-end mb-0">
                                <p>
                                    <FaUser className="me-1" />
                                    Last contact made 3 days ago
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};
export default PropertyDescription;