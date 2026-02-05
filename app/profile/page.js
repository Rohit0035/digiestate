"use client";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Button,
    Badge,
} from "reactstrap";
import classnames from "classnames";
import {
    FaUserCircle,
    FaHome,
    FaHeart,
    FaFileInvoice,
    FaSignOutAlt,
    FaBell,
} from "react-icons/fa";
import InfoTab from "../../components/profiles/InfoTab";
import SaveProperties from "../../components/profiles/SaveProperties";
import MyEnquiries from "../../components/profiles/MyEnquiries";

const CustomerAccount = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <section className="py-4 bg-light">
            <div className="container">
                <Row>
                    {/* LEFT VERTICAL TABS */}
                    <Col lg="3" md="4" className="mb-3">
                        <Card className="border-0 shadow-sm">
                            <CardBody className="p-0">
                                <div className="text-center p-4 border-bottom">
                                    <FaUserCircle size={60} className="text-success mb-2" />
                                    <h6 className="mb-0 fw-bold">Welcome, John</h6>
                                    <small className="text-muted">Customer Account</small>
                                </div>

                                <Nav vertical pills className="p-2">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames("d-flex align-items-center text-dark ", {
                                                active: activeTab === "1",
                                            })}
                                            onClick={() => setActiveTab("1")}
                                        >
                                            <FaHome className="me-2" /> Dashboard
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames("d-flex align-items-center text-dark", {
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => setActiveTab("2")}
                                        >
                                            <FaUserCircle className="me-2" /> Profile
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames("d-flex align-items-center text-dark", {
                                                active: activeTab === "3",
                                            })}
                                            onClick={() => setActiveTab("3")}
                                        >
                                            <FaHeart className="me-2" /> Saved Properties
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames("d-flex align-items-center text-dark ", {
                                                active: activeTab === "4",
                                            })}
                                            onClick={() => setActiveTab("4")}
                                        >
                                            <FaFileInvoice className="me-2" /> Enquiries
                                        </NavLink>
                                    </NavItem>

                                    <NavItem className="mt-2">
                                        <NavLink className="text-danger d-flex align-items-center text-dark">
                                            <FaSignOutAlt className="me-2" /> Logout
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* RIGHT CONTENT */}
                    <Col lg="9" md="8">
                        <TabContent activeTab={activeTab}>
                            {/* DASHBOARD */}
                            <TabPane tabId="1">
                                <Row>
                                    <Col md="4">
                                        <Card className="border-0 shadow-sm mb-3">
                                            <CardBody>
                                                <h6>Total Enquiries</h6>
                                                <h3 className="fw-bold text-success">12</h3>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card className="border-0 shadow-sm mb-3">
                                            <CardBody>
                                                <h6>Saved Properties</h6>
                                                <h3 className="fw-bold text-warning">5</h3>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card className="border-0 shadow-sm mb-3">
                                            <CardBody>
                                                <h6>Status</h6>
                                                <Badge color="success">Active</Badge>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>

                            {/* PROFILE */}
                            <TabPane tabId="2">
                                <Card className="border-0 shadow-sm">
                                    <CardBody>
                                        <InfoTab />
                                    </CardBody>
                                </Card>
                            </TabPane>

                            {/* SAVED PROPERTIES */}
                            <TabPane tabId="3">
                                <Card className="border-0 shadow-sm">
                                    <CardBody>
                                        <SaveProperties />
                                    </CardBody>
                                </Card>
                            </TabPane>

                            {/* ENQUIRIES */}
                            <TabPane tabId="4">
                                <MyEnquiries />
                            </TabPane>


                        </TabContent>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default CustomerAccount;
