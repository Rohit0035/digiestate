"use client";
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import {
    FaSchool,
    FaBusAlt,
    FaShoppingCart,
    FaHospitalAlt,
    FaBuilding,
    FaMapMarkerAlt,
} from "react-icons/fa";

const landmarksData = [
    {
        title: "Educational Institute",
        icon: <FaSchool className="text-st fs-4" />,
        places: [
            { name: "Air Force School", distance: "3.0 Km" },
            { name: "Jain Heritage School", distance: "1.5 Km" },
            { more: "+1 More" },
        ],
    },
    {
        title: "Transportation Hub",
        icon: <FaBusAlt className="text-st fs-4" />,
        places: [{ name: "Bangalore Baptist Hospital", distance: "0.9 Km" }],
    },
    {
        title: "Shopping Centre",
        icon: <FaShoppingCart className="text-st fs-4" />,
        places: [{ name: "Esteem Mall", distance: "1.6 Km" }],
    },
    {
        title: "Hospital",
        icon: <FaHospitalAlt className="text-st fs-4" />,
        places: [
            { name: "Columbia Asia Hospital", distance: "1.8 Km" },
            { name: "Hebbal", distance: "0.9 Km" },
        ],
    },
    {
        title: "Commercial Hub",
        icon: <FaBuilding className="text-st fs-4" />,
        places: [{ name: "Brigade Opus", distance: "2.5 Km" }],
    },
];

const NearbyLandmarks = () => {
    return (
        <Card className="my-4 border-0">
            <CardBody>
                <h5 className="fw-bold mb-4">
                    Landmarks Near L&T Raintree Boulevard
                </h5>
                <Row className="gy-3">
                    {landmarksData.map((item, index) => (
                        <Col key={index} xs="12" sm="6" lg="6">
                            <Card className="border rounded-3 h-100 shadow-sm">
                                <CardBody>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h6 className="fw-semibold mb-0">{item.title}</h6>
                                        {item.icon}
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        {item.places.map((place, i) => (
                                            <li
                                                key={i}
                                                className="d-flex align-items-center text-muted small mb-1"
                                            >
                                                <FaMapMarkerAlt className="text-success me-2" />
                                                {place.name ? (
                                                    <>
                                                        <span className="text-dark fw-semibold me-1">
                                                            {place.name}
                                                        </span>
                                                        <span>({place.distance})</span>
                                                    </>
                                                ) : (
                                                    <span className="text-danger fw-semibold ms-1">
                                                        {place.more}
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    );
};

export default NearbyLandmarks;
