"use client";

import { useState } from "react";
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Link from "next/link";
import { FaArrowRight, FaListUl } from "react-icons/fa";

// Dummy Data
const flats = [
    "Flat for Rent in Delhi",
    "Flat for Rent in Bangalore",
    "Flat for Rent in Pune",
    "Flat for Rent in Noida",
    "Flat for Rent in Hyderabad",
    "Flat for Rent in Mumbai",
    "Flat for Rent in Gurgaon",
];

const houses = [
    "House for Rent in Kolkata",
    "House for Rent in Chennai",
    "House for Rent in Lucknow",
    "House for Rent in Jaipur",
];

const QuickLinks = () => {
    const [active, setActive] = useState("1");

    return (
        <Card className=" bg-light mt-3 border-0" data-aos="zoom-in">
            <CardBody>
                <h6 className="fw-bold mb-3 d-flex align-items-center">
                    <FaListUl className="me-2 text-st" />
                    Quick Links
                </h6>

                {/* Tabs */}
                <Nav pills className="mb-3">
                    <NavItem>
                        <NavLink
                            className={`px-2 py-1 me-2 rounded-pill ${active === "1" ? "bg-info text-white" : "bg-light"
                                }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setActive("1")}
                        >
                            Flats
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={`px-2 py-1 rounded-pill ${active === "2" ? "bg-info text-white" : "bg-light"
                                }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setActive("2")}
                        >
                            House
                        </NavLink>
                    </NavItem>
                </Nav>

                {/* Content */}
                <TabContent activeTab={active}>
                    {/* Flats List */}
                    <TabPane tabId="1">
                        {flats.map((item, index) => (
                            <Link
                                href="#"
                                key={index}
                                className="d-flex bg-white justify-content-between align-items-center px-2 py-2 mb-2 small border rounded-pill text-decoration-none text-dark shadow-sm"
                            >
                                <span>{item}</span>
                                <FaArrowRight className="text-info" />
                            </Link>
                        ))}
                    </TabPane>

                    {/* House List */}
                    <TabPane tabId="2">
                        {houses.map((item, index) => (
                            <Link
                                href="#"
                                key={index}
                                className="d-flex bg-white  justify-content-between align-items-center px-2 py-2 small mb-2 border rounded-pill text-decoration-none text-dark shadow-sm"
                            >
                                <span>{item}</span>
                                <FaArrowRight className="text-info" />
                            </Link>
                        ))}
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
  );
};

export default QuickLinks;
