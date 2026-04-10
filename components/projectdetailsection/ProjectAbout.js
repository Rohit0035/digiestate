"use client";
import React, { useState, useMemo } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import {
  FaBuilding,
  FaShieldAlt,
  FaTree,
  FaLeaf,
  FaCalendarAlt,
  FaArrowCircleRight,
  FaCheckCircle,
} from "react-icons/fa";
import ProjectAboutOffcanvas from "./ProjectAboutOffcanvas";
import ProjectAmenitiesOffcanvas from "./ProjectAmenitiesOffcanvas";

const ProjectAbout = ({ project = {} }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const toggleAmenities = () => setIsAmenitiesOpen(!isAmenitiesOpen);

  if (!project) return null;

  return (
    <>
      {/* ================= ABOUT PROJECT ================= */}
      {project?.about && (
        <Card className="mt-5 border-0 shadow-sm">
          <CardBody>
            <h4 className="fw-bold mb-3">
              About {project?.title}
            </h4>

            <p className="text-muted">
              {project.about.length > 250
                ? `${project.about.slice(0, 250)}...`
                : project.about}

              {project.about.length > 250 && (
                <span
                  onClick={toggleAbout}
                  className="ms-1 text-st fw-semibold"
                  style={{ cursor: "pointer" }}
                >
                  Read More
                </span>
              )}
            </p>

            {/* ================= AMENITIES PREVIEW ================= */}
            {project?.amenities?.length > 0 && (
              <>
                <Row className="mt-4">
                  <h5 className="mb-3">
                    Top Amenities
                  </h5>

                  {project.amenities.slice(0, 4).map((item, index) => (
                    <Col
                      xs="6"
                      sm="6"
                      md="4"
                      lg="3"
                      key={index}
                      className="mb-3"
                    >
                      <Card className="shadow-sm h-100 text-center border-0 bg-light">
                        <CardBody>
                          <FaLeaf className="fs-5 text-st mb-2" />
                          <h6 className="fw-semibold mt-2">
                            {item}
                          </h6>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <Button
                  color="link"
                  className="text-st p-0 fw-semibold d-inline-flex align-items-center"
                  onClick={toggleAmenities}
                >
                  View All Amenities ({project.amenities.length})
                  <FaArrowCircleRight className="ms-2" />
                </Button>
              </>
            )}

            {/* ================= KEY USPs ================= */}
            {project?.keyUsps?.length > 0 && (
              <Row className="mt-4">
                <Col xs="12" md="8">
                  <Card
                    className="border shadow-sm"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    <CardBody>
                      <h5 className="fw-bold mb-3 text-dark">
                        Key Highlights
                      </h5>

                      <ul className="list-unstyled mb-0 small">
                        {project.keyUsps.map((item, index) => (
                          <li
                            key={index}
                            className="d-flex align-items-start mb-2"
                          >
                            <FaCheckCircle
                              className="text-st me-2 mt-1"
                              size={16}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}
          </CardBody>
        </Card>
      )}

      {/* ================= OFFCANVAS ================= */}
      <ProjectAboutOffcanvas
        isAboutOpen={isAboutOpen}
        toggle={toggleAbout}
        about={project?.about}
      />

      <ProjectAmenitiesOffcanvas
        isOpen={isAmenitiesOpen}
        toggle={toggleAmenities}
        amenities={project?.amenities || []}
      />
    </>
  );
};

export default ProjectAbout;