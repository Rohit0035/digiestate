"use client";
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaClock, FaKey, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const HomeStatus = () => {
  return (
    <Container className="my-5">
      <h4 className="mb-4" data-aos="fade-right">
        Because you searched <span className="fw-bold">Patna</span>
      </h4>

      <Row>
        {/* Card 1 */}
        <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up">
          <Card
            className="border-0 shadow-sm h-100 position-relative"
            style={{ backgroundColor: "#f9d2d736" }}
          >
            <CardBody>
              <h5 className="text-dark">
                <span className="text-st fw-bold me-2 fs-2">18K+</span>
                Verified properties available
              </h5>
              <a
                href="/property"
                className="text-st fw-semibold text-decoration-none mt-2 d-inline-block"
              >
                Continue last search →
              </a>
              <FaClock
                size={35}
                color="#f9b2344f"
                className="position-absolute"
                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
              />
            </CardBody>
          </Card>
        </Col>

        {/* NEW CARD (Replaced Image) */}
        <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up" data-aos-delay="100">
          <Card
            className="border-0 shadow-sm h-100 position-relative"
            style={{ backgroundColor: "#eef7f4" }}
          >
            <CardBody>
              <h5 className="text-dark">
                <span className="text-st fw-bold me-2 fs-2">45+</span>
                Ongoing & upcoming projects
              </h5>
              <a
                href="/projects"
                className="text-st fw-semibold text-decoration-none mt-2 d-inline-block"
              >
                View projects →
              </a>
              <FaBuilding
                size={35}
                color="#7cc4b24f"
                className="position-absolute"
                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
              />
            </CardBody>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up" data-aos-delay="200">
          <Card
            className="border-0 shadow-sm h-100 position-relative"
            style={{ backgroundColor: "#fff7e8" }}
          >
            <CardBody>
              <h5 className="text-dark">
                <span className="text-st fw-bold me-2 fs-2">250+</span>
                Owner-listed properties in Patna
              </h5>
              <a
                href="/property"
                className="text-st fw-semibold text-decoration-none mt-2 d-inline-block"
              >
                View owner listings →
              </a>
              <FaKey
                size={35}
                color="#f9b2344f"
                className="position-absolute"
                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
              />
            </CardBody>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up" data-aos-delay="300">
          <Card
            className="border-0 shadow-sm h-100 position-relative"
            style={{ backgroundColor: "#fff8f2" }}
          >
            <CardBody>
              <h5 className="text-dark">
                <span className="text-st fw-bold me-2 fs-2">300+</span>
                Properties in prime Patna localities
              </h5>
              <a
                href="/property"
                className="text-st fw-semibold text-decoration-none mt-2 d-inline-block"
              >
                Explore localities →
              </a>
              <FaMapMarkerAlt
                size={35}
                color="#f9b2344f"
                className="position-absolute"
                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeStatus;
