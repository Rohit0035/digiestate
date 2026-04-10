"use client";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Badge
} from "reactstrap";
import {
  FaMapMarkerAlt,
  FaDownload,
  FaShareAlt,
  FaInfoCircle
} from "react-icons/fa";
import { formatNumber } from "../../utils/formatter";
import { IMAGE_URL } from "../../utils/api-config";

const ProjectDetailInfo = ({ project = {} }) => {
  if (!project) return null;

  return (
    <section className="py-0 mb-5">
      <Container>
        <Card
          className="border shadow-sm rounded-4 p-1 bg-light"
          id="overview"
        >
          <CardBody>
            <Row className="align-items-start">
              {/* Project Title & Location */}
              <Col lg="10" md="9" sm="12">
                <h4 className="fw-bold mb-1 text-dark">
                  {project?.title}
                </h4>

                <p className="text-secondary mb-1 d-flex align-items-center gap-1">
                  <FaMapMarkerAlt className="text-st" />
                  {project?.location}
                </p>

                {project?.builder && (
                  <p className="text-muted small mb-3">
                    By <strong>{project?.builder}</strong>
                  </p>
                )}
              </Col>

              {/* Right icons */}
              <Col
                lg="2"
                md="3"
                sm="12"
                className="d-flex justify-content-end align-items-start gap-2"
              >
                <Badge
                  color="light"
                  className="rounded-pill text-info border small d-flex align-items-center gap-1"
                >
                  <FaInfoCircle /> {project?.tag || "RERA Verified"}
                </Badge>

                <Button
                  color="light"
                  size="sm"
                  className="rounded-circle border shadow-sm"
                >
                  <FaShareAlt />
                </Button>
              </Col>
            </Row>

            {/* Price Box */}
            <Row className="mt-3">
              <Col md="12">
                <div
                  className="p-3 rounded-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #f8ffff 0%, #ffffff 100%)",
                    border: "1px solid #eef2f4",
                    position: "relative"
                  }}
                >
                  <div>
                    <h5 className="fw-bold text-st mb-1">
                      ₹ {formatNumber(project?.priceRange?.min)} 
                      {project?.priceRange?.max &&
                        ` – ₹ ${formatNumber(project?.priceRange?.max)}`}
                      *
                    </h5>

                    <p className="mb-1 fw-semibold text-dark">
                      {project?.flats?.join(", ")} 
                      {project?.projectSize && ` | ${project?.projectSize} Sqft`}
                    </p>

                    <p className="text-muted small mb-0">
                      {project?.status} &nbsp;|&nbsp;
                      <span className="text-st fw-semibold">
                        Easy EMI Options
                      </span>
                    </p>
                  </div>

                  {/* Brochure Download */}
                  {project?.brochure && (
                    <a
                      href={`${IMAGE_URL}${project?.brochure}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="position-absolute top-50 end-0 translate-middle-y me-3 text-decoration-none"
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "1rem",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          padding: "10px 18px",
                          fontSize: "14px",
                          cursor: "pointer"
                        }}
                      >
                        <FaDownload className="text-st me-2" />
                        Project Brochure
                      </div>
                    </a>
                  )}
                </div>
              </Col>
            </Row>

            {/* Buttons */}
            <Row className="mt-3">
              <Col md="12" className="d-flex flex-wrap gap-3">
                {project?.brochure && (
                  <a
                    href={`${IMAGE_URL}${project?.brochure}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      color="light"
                      className="border border-danger text-st fw-semibold rounded-pill px-4 btn-sm"
                    >
                      Download Details
                    </Button>
                  </a>
                )}

                <Button
                  color="danger"
                  className="rounded-pill fw-semibold px-4 shadow-sm btn-sm"
                >
                  Talk to Expert
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};

export default ProjectDetailInfo;