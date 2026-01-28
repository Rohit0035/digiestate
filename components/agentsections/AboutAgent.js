"use client";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const AboutAgent = () => {
  return (
    <>
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="fw-bold">
            About S2 Milkyway Links
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
        </Col>
      </Row>

      <Card data-aos="zoom-in-up">
        <CardBody>
          <p >
            Maisai Realty is a dynamic real estate firm dedicated to helping
            clients find their perfect property. Whether you,re buying, selling,
            or investing, our expert team combines market insight with
            personalized service to ensure a smooth and successful experience.
            At Maisai, we make your real estate journey our top priority.
          </p>

          <Row className="mt-4">
            <Col md="6" className="mb-2">
              <strong>Team Size</strong>
              <p className="mb-0 small">11 people</p>
            </Col>
            <Col md="6">
              <strong>Address</strong>
              <p className="mb-0 small">
                457 1st floor 7th cross 5th Main Dollars Colony RMV 2nd
                Stage 560094
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default AboutAgent;
