'use client'; // Ensures the component is client-side rendered in Next.js 13+

import React, { useState } from "react";
import { Card, CardBody, Col, Row, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FaBuilding, FaCheck, FaMapMarkerAlt } from "react-icons/fa"; // Icons for the landmarks and map
import Image from "next/image"; // Image component for Next.js
import banimg from "../../assets/images/map-img.jpg"; // Replace with the correct map image path

const NearbySection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

    // Toggle function to open/close the map modal
    const toggleMapModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Card className="border-0 bg-light mt-5" data-aos="fade-up">
                <CardBody>
                    <h4 className="fw-bold mb-0">What's Nearby</h4>
                    <small>View Sumadhura Capitol Residences on Map</small>

                    <Row>
                        <Col md="12" className="mt-3">
                            {/* Clickable map image */}
                            <Image
                                src={banimg}
                                alt="Sumadhura Capitol Residences Map"
                                className="img-fluid"
                                style={{ cursor: "pointer" }}
                                onClick={toggleMapModal} // Trigger modal on image click
                            />
                        </Col>
                    </Row>

                    {/* Landmarks section */}
                    <Row className="mt-4">
                        <h6 className="fw-bold mb-2">Landmarks near Sumadhura Capitol Residences</h6>

                        {/* Educational Institute */}
                        <Col xs="12" sm="12" md="6" lg="4" className="mb-3">
                            <div className="d-flex border p-2 bg-white h-100" data-aos="fade-up">
                                <FaBuilding className="me-2 text-st" />
                                <div className="small">
                                    <h6 className="mb-1">Educational Institute</h6>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li className="st-txt-o"> <FaCheck color="success" className="me-1 "/> Shri Ram Global School (6.3 Km)</li>
                                        <li className="st-txt-o"> <FaCheck color="success" className="me-1 "/> Akash IIT JEE (2.7 Km)</li>
                                        <li className="st-txt-o"> <FaCheck color="success" className="me-1 "/> Sve Techno School (2.1 Km)</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                       
                    </Row>
                </CardBody>
            </Card>

            {/* Map Modal */}
            <Modal isOpen={isModalOpen} toggle={toggleMapModal} size="lg">
                <ModalHeader toggle={toggleMapModal}>Map</ModalHeader>
                <ModalBody>
                    {/* Embed Google Map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0100326363977!2d85.84255131541965!3d20.304870801459728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1971a12a299f99%3A0xbf90e3d5fa074590!2sThe%20Oxford%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1605242067438!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </ModalBody>
            </Modal>
        </>
    );
};

export default NearbySection;
