"use client";
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap";
import classnames from "classnames";
import { FaAngleDoubleRight } from "react-icons/fa";

const HomePropertyOptions = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const linkStyle = { textDecoration: "none", color: "#000" };

    const categories = [
        {
            title: "Popular Residential Searches",
            links: [
                "Property for Sale in Bangalore",
                "Flats in Bangalore",
                "Studio Apartments in Bangalore",
                "Resale House in Bangalore",
                "House for Sale in Bangalore",
                "Villas for Sale in Bangalore",
                "Penthouse in Bangalore",
                "Ready To Move Flats in Bangalore",
                "Resale Flats in Bangalore",
            ],
        },
        {
            title: "Popular BHK Searches",
            links: [
                "1 BHK Flats in Bangalore",
                "2 BHK Flats in Bangalore",
                "3 BHK Flats in Bangalore",
                "4 BHK Flats in Bangalore",
                "1 BHK House for Sale in Bangalore",
                "2 BHK House for Sale in Bangalore",
                "3 BHK House for Sale in Bangalore",
                "4 BHK House for Sale in Bangalore",
                "1 BHK Villa for Sale in Bangalore",
            ],
        },
        {
            title: "Popular Flat Searches",
            links: [
                "Flats for Sale in Whitefield",
                "Flats for Sale in Sarjapur Road",
                "Flats for Sale in Electronic City",
                "Flats for Sale in Koramangala",
                "Flats for Sale in HSR Layout",
                "Flats for Sale in Marathahalli",
                "Flats for Sale in Hebbal",
                "Flats for Sale in Kanakapura Road",
                "Flats for Sale in Bellandur",
                "Flats for Sale in Varthur",
            ],
        },
        {
            title: "Popular House Searches",
            links: [
                "House for Sale in Whitefield",
                "House for Sale in HSR Layout",
                "House for Sale in JP Nagar",
                "House for Sale in Koramangala",
                "House for Sale in Sarjapur Road",
                "House for Sale in Hebbal",
                "House for Sale in Yelahanka",
                "House for Sale in Electronic City",
                "House for Sale in Marathahalli",
                "House for Sale in Bellandur",
            ],
        },
    ];

    return (
        <div className="container pt-5" data-aos="zoom-in">
            <h4 className="fw-bold mb-4">Property Options in Bangalore
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
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames("text-st", { active: activeTab === "1" })}
                        onClick={() => toggle("1")}
                    >
                        Buy
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames("text-st", { active: activeTab === "2" })}
                        onClick={() => toggle("2")}
                    >
                        Rent
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className="mt-4">
                <TabPane tabId="1">
                    <Row>
                        {categories.map((cat, idx) => (
                            <Col md="3" sm="6" key={idx} className="mb-4">
                                <h6 className="fw-bold mb-3">{cat.title}</h6>
                                <ul className="list-unstyled small">
                                    {cat.links.map((link, i) => (
                                        <li key={i} className="mb-2 d-flex align-items-center">
                                            <FaAngleDoubleRight className="me-2 text-st" />
                                            <a href="#" style={linkStyle}>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <p>Coming soon for Rent section...</p>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default HomePropertyOptions;
