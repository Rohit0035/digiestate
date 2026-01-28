"use client";
import React, { useState } from "react";
import { Row, Col, Card, Collapse } from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LocalityRatings = () => {
  const [openSection, setOpenSection] = useState({
    environment: false,
    commuting: false,
    interest: false,
  });

  const toggleSection = (key) => {
    setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderProgress = (label, value) => (
    <div className="mb-2">
      <div className="d-flex justify-content-between small">
        <span>{label}</span>
        <span className="fw-semibold">{value}</span>
      </div>
      <div className="progress" style={{ height: "6px" }}>
        <div
          className="progress-bar bg-warning"
          style={{ width: `${value * 20}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <Card className=" border-0 small">
      <Row className="gy-3">
        {/* Environment */}
        <Col md="4" sm="12">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => toggleSection("environment")}
          >
            <h6 className="mb-0 fw-semibold small">Environment</h6>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold">3.8</span>
              {openSection.environment ? (
                <FaChevronUp className="text-secondary" />
              ) : (
                <FaChevronDown className="text-secondary" />
              )}
            </div>
          </div>

          <div className="progress mt-1 mb-3" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-warning"
              style={{ width: "76%" }}
            ></div>
          </div>

          <Collapse isOpen={openSection.environment}>
            {renderProgress("Neighbourhood", 3.7)}
            {renderProgress("Roads", 3.6)}
            {renderProgress("Safety", 3.8)}
            {renderProgress("Cleanliness", 4.1)}
          </Collapse>
        </Col>

        {/* Commuting */}
        <Col md="4" sm="12">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => toggleSection("commuting")}
          >
            <h6 className="mb-0 fw-semibold small">Commuting</h6>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold">3.8</span>
              {openSection.commuting ? (
                <FaChevronUp className="text-secondary" />
              ) : (
                <FaChevronDown className="text-secondary" />
              )}
            </div>
          </div>

          <div className="progress mt-1 mb-3" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-warning"
              style={{ width: "76%" }}
            ></div>
          </div>

          <Collapse isOpen={openSection.commuting}>
            {renderProgress("Public Transport", 4.2)}
            {renderProgress("Parking", 3.7)}
            {renderProgress("Connectivity", 4.3)}
            {renderProgress("Traffic", 3.0)}
          </Collapse>
        </Col>

        {/* Places of Interest */}
        <Col md="4" sm="12">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => toggleSection("interest")}
          >
            <h6 className="mb-0 fw-semibold small">Places of Interest</h6>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold">4.1</span>
              {openSection.interest ? (
                <FaChevronUp className="text-secondary" />
              ) : (
                <FaChevronDown className="text-secondary" />
              )}
            </div>
          </div>

          <div className="progress mt-1 mb-3" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-warning"
              style={{ width: "82%" }}
            ></div>
          </div>

          <Collapse isOpen={openSection.interest}>
            {renderProgress("Schools", 4.3)}
            {renderProgress("Hospitals", 4.3)}
            {renderProgress("Restaurants", 3.5)}
            {renderProgress("Markets", 4.2)}
          </Collapse>
        </Col>
      </Row>
    </Card>
  );
};

export default LocalityRatings;
