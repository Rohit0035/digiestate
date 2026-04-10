"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Badge,
} from "reactstrap";
import {
  FaLock,
  FaTree,
  FaCalendarAlt,
  FaArrowCircleRight,
  FaSwimmer,
  FaMapMarkedAlt,
  FaChartLine,
  FaRegCommentDots,
  FaBuilding,
} from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import ProjectAmenitiesOffcanvas from "./ProjectAmenitiesOffcanvas";

const Amenities = ({ project = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  /* ================= CORE PROJECT STATS (Dynamic) ================= */
  const data = useMemo(() => {
    return [
      {
        id: 1,
        icon: (
          <FaBuilding size={28} className="bg-light p-2 rounded-circle text-st" />
        ),
        title: "Total Units",
        value: project?.totalUnits ? `${project.totalUnits}+` : "N/A",
      },
      {
        id: 2,
        icon: (
          <FaTree size={28} className="bg-light p-2 rounded-circle text-st" />
        ),
        title: "Project Size",
        value: project?.projectSize || "N/A",
      },
      {
        id: 3,
        icon: (
          <FaCalendarAlt
            size={28}
            className="bg-light p-2 rounded-circle text-st"
          />
        ),
        title: "Launch Year",
        value: project?.launchDate
          ? new Date(project.launchDate).getFullYear()
          : "N/A",
      },
    ];
  }, [project]);

  if (!project) return null;


  return (
    <>
      {/* ================= PROJECT HIGHLIGHTS ================= */}
      <Card className="border-0 shadow-sm rounded-4">
        <CardBody>
          <Row>
            {data.map((item) => (
              <Col xs="6" md="4" className="mb-3" key={item.id}>
                <Card className="text-center border-0 h-100 bg-white rounded-3 shadow-sm">
                  <CardBody>
                    <div className="mb-2">{item.icon}</div>
                    <p className="small text-muted mb-0">{item.title}</p>
                    <strong className="text-dark">{item.value}</strong>
                  </CardBody>
                </Card>
              </Col>
            ))}

            {/* View All Amenities Button */}
            {project?.amenities?.length > 0 && (
              <Col lg="12" className="mt-2 text-start">
                <Button
                  color="link"
                  className="text-st p-0 fw-semibold d-inline-flex align-items-center"
                  onClick={toggle}
                >
                  View All Amenities ({project.amenities.length}+)
                  <FaArrowCircleRight className="ms-2" />
                </Button>
              </Col>
            )}
          </Row>
        </CardBody>
      </Card>

      {/* ================= TRUST & INSIGHTS SECTION ================= */}
      {project?.isVerified && (
        <Card className="border-0 mt-5 shadow-sm bg-light rounded-4">
          <CardBody>
            <h4 className="fw-bold mb-1 text-dark">
              <SiSpringsecurity size={24} className="text-st me-2" />
              <span className="text-st">Verified</span> Insights
            </h4>
            <small className="text-muted">
              Transparent, data-driven & buyer-first property intelligence
            </small>

            <Row className="pt-4">
              <Col xs="6" md="3" className="mb-3">
                <Card className="bg-white border-0 text-center h-100 rounded-3 shadow-sm">
                  <CardBody>
                    <FaSwimmer size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      {project?.amenities?.includes("Swimming Pool")
                        ? "Swimming Pool Available"
                        : "Lifestyle Amenities"}
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="6" md="3" className="mb-3">
                <Card className="bg-white border-0 text-center h-100 rounded-3 shadow-sm">
                  <CardBody>
                    <FaMapMarkedAlt size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Prime Location Advantage
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="6" md="3" className="mb-3">
                <Card className="bg-white border-0 text-center h-100 rounded-3 shadow-sm position-relative">
                  <CardBody>
                    <Badge
                      color="success"
                      className="position-absolute top-0 start-0"
                    >
                      ROI
                    </Badge>
                    <FaChartLine size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Growth Potential
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="6" md="3" className="mb-3">
                <Card className="bg-white border-0 text-center h-100 rounded-3 shadow-sm">
                  <CardBody>
                    <FaRegCommentDots size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Buyer Feedback
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}

      {/* ================= OFFCANVAS ================= */}
      <ProjectAmenitiesOffcanvas
        isOpen={isOpen}
        toggle={toggle}
        amenities={project?.amenities || []}
      />
    </>
  );
};

export default Amenities;