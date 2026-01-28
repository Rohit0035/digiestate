"use client";
import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Card,
    CardBody,
    Row,
    Col,
    Input,
    Button,
    Label,
} from "reactstrap";
import { FaStar } from "react-icons/fa";

const ReviewWriteSidebar = ({ isOpen, toggle }) => {
    // Rating state for each section
    const [ratings, setRatings] = useState({
        infrastructure: {},
        amenities: {},
        maintenance: {},
    });

    const handleStarClick = (section, item, rating) => {
        setRatings((prev) => ({
            ...prev,
            [section]: { ...prev[section], [item]: rating },
        }));
    };

    const sections = [
        {
            title: "Project Infrastructure",
            key: "infrastructure",
            items: ["Water Supply", "Main Electricity", "Power Backup", "Sewage Handling"],
        },
        {
            title: "Project Amenities",
            key: "amenities",
            items: [
                "Sports Facility",
                "Parking Facility",
                "Garden or Green Area",
                "Shops within Premises",
            ],
        },
        {
            title: "Project Maintenance",
            key: "maintenance",
            items: [
                "Construction Quality",
                "Common Area Maintenance",
                "Availability of Services",
                "24/7 Security",
            ],
        },
    ];

    return (
        <Offcanvas
            isOpen={isOpen}
            toggle={toggle}
            direction="end"
            className="w-75 side-st-top"
           
        >
            <OffcanvasHeader toggle={toggle}>Write your Review</OffcanvasHeader>
            <OffcanvasBody>
                <div>
                    <h6 className="fw-semibold mb-3">Add Rating</h6>
                    <Row>
                        {sections.map((section, index) => (
                            <Col xs="12" sm="12" md="12" lg="4" key={index}>
                                <Card className="border rounded-3 shadow-sm mb-3">
                                    <CardBody>
                                        <h6 className="fw-semibold mb-3">{section.title}</h6>
                                        <ul className="list-unstyled mb-0">
                                            {section.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="d-flex justify-content-between align-items-center mb-2 small text-muted"
                                                >
                                                    <span>{item}</span>
                                                    <span>
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <FaStar
                                                                key={star}
                                                                size={16}
                                                                style={{ cursor: "pointer", marginLeft: "2px" }}
                                                                color={
                                                                    star <= (ratings[section.key][item] || 0)
                                                                        ? "#f5c518"
                                                                        : "#ddd"
                                                                }
                                                                onClick={() =>
                                                                    handleStarClick(section.key, item, star)
                                                                }
                                                            />
                                                        ))}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="mt-3">
                        <Label className="fw-semibold">Select Ownership</Label>
                        <Input type="select" className="mb-3">
                            <option>I own a property here</option>
                            <option>I am a tenant</option>
                            <option>I am a visitor</option>
                        </Input>



                        <Label className="fw-semibold">Add a Title</Label>
                        <Input
                            type="text"
                            placeholder="Add subject line to your review"
                            className="mb-3"
                        />

                        <Label className="fw-semibold">Write Review</Label>
                        <Input
                            type="textarea"
                            rows="4"
                            placeholder="Tell us what you like & dislike about this project"
                            className="mb-4"
                        />

                        <Button color="danger" className="w-100 rounded-0 fw-semibold">
                            Submit
                        </Button>
                    </div>
                </div>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default ReviewWriteSidebar;
