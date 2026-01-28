"use client";
import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaWineGlassAlt,
  FaFaucet,
  FaGolfBall,
  FaHotTub,
  FaTree,
  FaRunning,
  FaGamepad,
  FaTableTennis,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ProAmenities = () => {
  const amenities = [
    { icon: <FaSwimmingPool className="text-st text-st" />, label: "Swimming Pool" },
    { icon: <FaDumbbell className="text-st text-st" />, label: "Gymnasium" },
    { icon: <FaWineGlassAlt className="text-st text-st" />, label: "Bar/Lounge" },
    { icon: <FaFaucet className="text-st text-st" />, label: "Piped Gas" },
    { icon: <FaGolfBall className="text-st text-st" />, label: "Golf Course" },
    { icon: <FaHotTub className="text-st text-st" />, label: "Health club with Steam / Jacuzzi" },
    { icon: <FaTree className="text-st text-st" />, label: "Private Garden" },
    { icon: <FaRunning className="text-st text-st" />, label: "AEROBICS ROOM" },
    { icon: <FaGamepad className="text-st text-st" />, label: "Indoor Games Room" },
    { icon: <FaTableTennis className="text-st text-st" />, label: "Indoor Squash & Badminton Courts" },
  ];

  return (
    <Card className="mt-4 shadow-sm border-0" data-aos="fade-up" id="amenities">
      <CardBody>
        <h4 className="fw-bold mb-4">Amenities</h4>
        <Row>
          {amenities.map((item, index) => (
            <Col xs="12" sm="6" lg="4" className="mb-3 d-flex align-items-center" key={index}>
              <div className="me-2 fs-5">{item.icon}</div>
              <span className="text-dark">{item.label}</span>
            </Col>
          ))}
        </Row>

        <div className="mt-3">
          <a href="#" className="text-st text-decoration-none fw-semibold">
            <IoIosArrowDown className="me-1" />
            Download Brochure
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProAmenities;
