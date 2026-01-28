"use client";
import React, { useState } from "react";
import { Card, CardBody, Row, Col, Button, Collapse } from "reactstrap";
import EnquiryModal from "../EnquiryModal";

const ProMoreDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    // modal
        const [modal, setModal] = useState(false);
        const togglemodal = () => setModal(!modal);
    

    const details = [
        { label: "Rental Value", value: "₹1 Lac" },
        { label: "Security Deposit", value: "₹5.0 Lac" },
        {
            label: "Address",
            value:
                "Bellary Rd, Indra Nagar, Shabhari Nagar, Byatarayanapura, Bengaluru, Karnataka, Hebbal, Bangalore - North, Karnataka",
        },
        { label: "Landmarks", value: "Hebbal, Bellary Road, Bangalore." },
        { label: "Furnishing", value: "Semi-Furnished" },
        { label: "Flooring", value: "Granite, Marble, Vitrified, Wooden" },
        { label: "Overlooking", value: "Garden/Park, Pool, Main Road" },
        { label: "Age of Construction", value: "Less than 5 years" },
        {
            label: "Additional Rooms",
            value: "Puja Room, Study, Store, Servant Room",
        },
        { label: "Water Availability", value: "24 Hours Available" },
        { label: "Status of Electricity", value: "No/Rare Powercut" },
        { label: "Floors allowed for construction", value: "1" },
        { label: "Lift", value: "1" },
    ];

    return (
        <>
            <Card
                className="mt-4 shadow-sm border-0 small"
                data-aos="zoom-in"
                id="moredetails"
            >
                <CardBody>
                    <h4 className="mb-3 fw-bold">More Details</h4>

                    {/* Details Section */}
                    {details.map((item, index) => (
                        <Row
                            key={index}
                            className="py-2  align-items-start text-start"
                        >
                            <Col xs="12" sm="4" className="fw-semibold  text-start">
                                {item.label}:
                            </Col>
                            <Col xs="12" sm="8" className="text-muted text-sm-start">
                                {item.value}
                            </Col>
                        </Row>
                    ))}

                    {/* Description with Collapse */}
                    <div className="mt-3">
                        <p className="mb-1">
                            <strong>Description:</strong> The residential enclave LT Raintree
                            Boulevard Phase 3 features the very best in LT Realty’s luxury
                            living segment. The project offers spacious Apartments with
                            luxurious features.
                        </p>
                        <Collapse isOpen={isOpen}>
                            <p className="text-muted mb-0">
                                Beautiful landscapes all around L&T Raintree Boulevard make it
                                more special & elite. The builder is guaranteed to bring a quality
                                living experience with brilliant architecture and an equivalent
                                lifestyle. The project is located at Hebbal, one of the prime
                                locations in Bangalore, with excellent connectivity.
                            </p>
                        </Collapse>
                        <Button
                            color="link"
                            className="p-0 text-decoration-none text-st"
                            onClick={toggle}
                        >
                            {isOpen ? "Read Less" : "Read More"}
                        </Button>
                    </div>

                    {/* Contact Agent Button */}
                    <div className="mt-3 text-center text-sm-start">
                        <Button onClick={togglemodal} color="danger" className="rounded-pill px-4 btn-sm">
                            Contact Agent
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <EnquiryModal modal={modal} toggle={togglemodal} />

        </>

    );
};

export default ProMoreDetail;
