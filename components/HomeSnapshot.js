"use client";
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const HomeSnapshot = () => {
  const [readMore, setReadMore] = useState(false);

  const text =
    `A home to about 11 million people, Bangalore, now known as Bengaluru, is India's fourth largest city after Delhi, Kolkata and Mumbai. There is no doubt about the fact that Bangalore's unique climate has always attracted people to relocate from all parts of India. The climate in Bangalore is so pleasant and calming that it lets you have a whale of a time. The city has become the 4th largest technology hub in the world after London, Boston and San Francisco.`;

  const shortText = text.slice(0, 260) + "...";

  return (
    <Container className="my-5" data-aos="zoom-in">
      {/* Heading */}
      <h4 className="fw-bold mb-3">
        Bangalore Property Snapshot
        <span
          style={{
            display: "block",
            width: "50px",
            height: "3px",
            background: "#6e2e36",
            marginTop: "5px",
          }}
        ></span>
      </h4>

      {/* Description */}
      <Card className="border rounded-3 shadow-sm mb-4 " data-aos="zoom-in">
        <CardBody>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            {readMore ? text : shortText}
            <Button
              color="link"
              className="text-danger fw-bold p-0 ms-1"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show less" : "Read more"}
            </Button>
          </p>

          {/* Stats */}
          <Row className="text-center mt-4">
            <Col xs="6" md="3" className="mb-3">
              <h5 className="fw-bold mb-0">733+</h5>
              <small className="text-muted">
                Low Budget Flats <br /> in Bangalore
              </small>
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <h5 className="fw-bold mb-0">67722+</h5>
              <small className="text-muted">
                Properties for Rent <br /> in Bangalore
              </small>
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <h5 className="fw-bold mb-0">119+</h5>
              <small className="text-muted">
                Residential Property <br /> Agents in Bangalore
              </small>
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <h5 className="fw-bold mb-0">17168+</h5>
              <small className="text-muted">
                Residential Projects <br /> in Bangalore
              </small>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Post Property Section */}
      <div
        className="p-4 rounded-3"
        style={{ backgroundColor: "#fff8e1", border: "1px solid #ffeeba" }}
      >
        <Row className="align-items-center">
          <Col md="8" className="mb-3 mb-md-0">
            <h5 className="mb-1">
              Post your Property for <span className="fw-bold fst-italic">free</span>
            </h5>
            <p className="mb-0 text-muted" style={{ fontSize: "15px" }}>
              List it on DigiEstate Groupand get genuine leads
            </p>
          </Col>
          <Col md="4" className="text-md-end text-center">
            <Button
              color="warning"
              className="rounded-pill fw-bold text-dark px-4 py-2 d-inline-flex align-items-center"
            >
              Post Property{" "}
              <span
                className="bg-dark text-white ms-2 px-2 py-0 rounded-pill small"
                style={{ fontSize: "11px" }}
              >
                FREE
              </span>
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomeSnapshot;
