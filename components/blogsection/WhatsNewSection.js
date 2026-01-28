"use client";

import React, { useState } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Image from "next/image";
import proimg from "../../assets/images/pro-1.jpg";

const tabs = [
    "Mumbai MMR",
    "Delhi NCR",
    "Kolkata",
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Pune",
];

const WhatsNewSection = () => {
    const [activeTab, setActiveTab] = useState("Kolkata");

    return (
        <div className="py-5 whats-new-wrapper">
            <Container>
                {/* Heading */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="fw-bold m-0">What’s New in</h3>
                    <a href="#" className="text-primary fw-semibold">
                        View All Articles →
                    </a>
                </div>

                {/* Tabs */}
                <Nav pills className="mb-4 gap-2 flex-wrap">
                    {tabs.map((t) => (
                        <NavItem key={t}>
                            <NavLink
                                active={activeTab === t}
                                onClick={() => setActiveTab(t)}
                                className="px-3 py-2 small"
                                style={{ cursor: "pointer" }}
                            >
                                {t}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>

                {/* 3 Column Layout */}
                <Row className="">

                    {/* LEFT COLUMN (Large Feature Article) */}
                    <Col lg="5" className="mb-3" data-aos="zoom-in">
                        <div className="shadow-sm rounded overflow-hidden">
                            <Image src={proimg} alt="img" className="img-fluid w-100" />
                            <div className="p-3">
                                <span className="badge bg-info">DELHI NCR</span>
                                <h5 className="fw-bold mt-2">
                                    Greater Noida West Metro Route & Latest News (2025 Update)
                                </h5>
                                <p className="small text-muted mb-1">
                                    2025-11-12 16:00 by <strong>Anirudh Singh Chauhan</strong>
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* MIDDLE COLUMN (2 articles stacked) */}
                    <Col lg="4" className="mb-3" data-aos="zoom-in">
                        <Row>
                            <Col lg="6">
                                <div className="shadow-sm rounded overflow-hidden mb-4">
                                    <Image src={proimg} alt="img" className="img-fluid w-100" />
                                    <div className="p-3">
                                        <span className="badge bg-info">DELHI NCR</span>
                                        <h6 className="fw-bold mt-2">
                                            Guru Dronacharya Metro Station Delhi on Yellow Line
                                        </h6>
                                        <p className="small text-muted">
                                            2025-11-11 16:00 by <strong>Nupur Saini</strong>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="shadow-sm rounded overflow-hidden">
                                    <Image src={proimg} alt="img" className="img-fluid w-100" />
                                    <div className="p-3">
                                        <span className="badge bg-info">DELHI NCR</span>
                                        <h6 className="fw-bold mt-2">
                                            Top 15 Posh Areas in Delhi (Best Localities)
                                        </h6>
                                        <p className="small text-muted">
                                            2025-11-04 16:00 by <strong>Nupur Saini</strong>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/* RIGHT COLUMN (Sidebar) */}
                    <Col lg="3">
                        <div className="sidebar-box  rounded p-3" data-aos="zoom-in">
                            <h6 className="fw-bold mb-3">Popular Blogs in Mumbai MMR</h6>

                            <div className="d-flex gap-3 mb-3">
                                <span className="fw-bold">#1</span>
                                <div>
                                    <h6 className="fw-semibold m-0">YEIDA Plot Scheme 2025</h6>
                                    <small className="text-muted">2025-09-19 07:00</small>
                                </div>
                            </div>

                            <div className="d-flex gap-3 mb-3">
                                <span className="fw-bold">#2</span>
                                <div>
                                    <h6 className="fw-semibold m-0">Delhi Meerut RRTS</h6>
                                    <small className="text-muted">2025-10-15 10:00</small>
                                </div>
                            </div>

                            <div className="d-flex gap-3">
                                <span className="fw-bold">#3</span>
                                <div>
                                    <h6 className="fw-semibold m-0">13 Posh Societies in Noida</h6>
                                    <small className="text-muted">2025-07-29 13:00</small>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default WhatsNewSection;
