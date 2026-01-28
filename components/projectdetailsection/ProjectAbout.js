"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import ProjectAboutOffcanvas from "./ProjectAboutOffcanvas";
import {
    FaBuilding, FaChild, FaLeaf, FaShieldAlt, FaLock,
    FaTree,
    FaCalendarAlt,
    FaArrowCircleRight,
    FaCheckCircle
} from "react-icons/fa";
import ProjectAmenitiesOffcanvas from "./ProjectAmenitiesOffcanvas";
const data = [
    {
        id: 1,
        icon: <FaLock size={30} className="bg-light p-2 rounded-circle text-st" />,
        title: "Total Units",
        value: "400",
    },
    {
        id: 2,
        icon: <FaTree size={30} className="bg-light p-2 rounded-circle text-st" />,
        title: "Project Size",
        value: "25 Acre",
    },
    {
        id: 3,
        icon: (
            <FaCalendarAlt size={30} className="bg-light p-2 rounded-circle text-st" />
        ),
        title: "Launch Date",
        value: "Jan 2023",
    },
];
const amenities = [
    { icon: <FaBuilding className="fs-5 text-st mb-2" />, title: "Club House" },
    { icon: <FaShieldAlt className="fs-5 text-st mb-2" />, title: "Security" },
    { icon: <FaTree className="fs-5 text-st mb-2" />, title: "Park" },
    { icon: <FaLeaf className="fs-5 text-st mb-2" />, title: "Garden View" },
];
const usps = [
    "Gated Community",
    "Water pipeline for each plot",
    "Electrical supply",
    "UGD connection",
    "40 and 30 feet huge road",
    "Attached to STRR/NH-207",
    "3kms from NH-7",
    "2kms to 12000acres ITIR",
    "3kms to Rural DC office",
    "Close to DC Office, 500mts",
];
const ProjectAbout = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Card className="mt-5 border-0 shadow-sm" data-aos="fade-up">
                <CardBody>
                    <h4 className="fw-bold">About BSNL Sirigandha Elite Bangalore</h4>
                    <p>
                        BSNL Sirigandha Elite was established in 2023. We research, analyze, and determine
                        the best cost-effective and regulatory design to suit our customer ...
                        <span
                            onClick={toggleAbout}
                            className="ms-1 text-st fw-semibold cursor-pointer"
                            style={{ cursor: "pointer" }}
                        >
                            Read More
                        </span>
                    </p>
                    <Row className="mt-4">
                        <h5 className="mb-3">BSNL Sirigandha Elite Bangalore Top Amenities</h5>
                        {amenities.map((item, index) => (
                            <Col xs="6" sm="6" md="4" lg="3" key={index} className="mb-3">
                                <Card className="shadow-sm h-100 text-center border-0 bg-light">
                                    <CardBody>
                                        {item.icon}
                                        <h6 className="fw-semibold mt-2">{item.title}</h6>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Button
                        color="link"
                        className="text-st p-0 fw-semibold d-inline-flex align-items-center"
                        onClick={toggle}
                    >
                        View Amenities (5) <FaArrowCircleRight className="ms-2" />
                    </Button>

                    <Row className="mt-2">
                        <Col xs="12" sm="12" md="6" col-lg="6">
                            <Card className="border shadow-sm mt-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
                                <CardBody>
                                    <h5 className="fw-bold mb-3 text-dark st-txt-o">
                                        Key USPs - <span className="text-st">BSNL Sirigandha Elite Bangalore</span>
                                    </h5>
                                    <ul className="list-unstyled mb-0 small">
                                        {usps.map((item, index) => (
                                            <li key={index} className="d-flex align-items-start mb-2">
                                                <FaCheckCircle className="text-st me-2 mt-1" size={16} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <ProjectAboutOffcanvas isAboutOpen={isAboutOpen} toggle={toggleAbout} />

            {/* ✅ Use separated Offcanvas Component */}
            <ProjectAmenitiesOffcanvas isOpen={isOpen} toggle={toggle} data={data} />
        </>
    );
};

export default ProjectAbout;
