"use client";
import Link from "next/link";
import React, { useState } from "react";
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

const Amenities = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  /* ================= CORE PROJECT STATS ================= */
  const data = [
    {
      id: 1,
      icon: (
        <FaBuilding size={28} className="bg-light p-2 rounded-circle text-st" />
      ),
      title: "Total Units",
      value: "400+",
    },
    {
      id: 2,
      icon: (
        <FaTree size={28} className="bg-light p-2 rounded-circle text-st" />
      ),
      title: "Project Area",
      value: "25 Acres",
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
      value: "2023",
    },
    {
      id: 4,
      icon: (
        <FaLock size={28} className="bg-light p-2 rounded-circle text-st" />
      ),
      title: "Security",
      value: "24×7 Gated",
    },
  ];

  return (
    <>
      {/* ================= PROJECT HIGHLIGHTS ================= */}
      <Card className="border-0 shadow-sm rounded-4" data-aos="fade-up">
        <CardBody>
          <Row>
            {data.map((item) => (
              <Col xs="6" md="3" className="mb-3" key={item.id}>
                <Card className="text-center border-0 h-100 bg-white rounded-3 shadow-sm">
                  <CardBody>
                    <div className="mb-2">{item.icon}</div>
                    <p className="small text-muted mb-0">{item.title}</p>
                    <strong className="text-dark">{item.value}</strong>
                  </CardBody>
                </Card>
              </Col>
            ))}

            <Col lg="12" className="mt-2 text-start">
              <Button
                color="link"
                className="text-st p-0 fw-semibold d-inline-flex align-items-center"
                onClick={toggle}
              >
                View All Amenities (20+)
                <FaArrowCircleRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= TRUST & INSIGHTS SECTION ================= */}
      <Card
        className="border-0 mt-5 shadow-sm bg-light rounded-4"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <CardBody>
          <h4 className="fw-bold mb-1 text-dark">
            <SiSpringsecurity size={24} className="text-st me-2" />
            <span className="text-st">Digi Estate Verified </span>
            Insights
          </h4>
          <small className="text-muted">
            Transparent, data-driven & buyer-first property intelligence
          </small>

          <Row className="pt-4">
            <Col xs="6" md="3" className="mb-3">
              <Card className="feature-card bg-white border-0 text-center h-100 rounded-3 shadow-sm card-lift">
                <Link href="#" className="w-100">
                  <CardBody>
                    <FaSwimmer size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Lifestyle Amenities
                    </p>
                  </CardBody>
                </Link>
              </Card>
            </Col>

            <Col xs="6" md="3" className="mb-3">
              <Card className="feature-card bg-white border-0 text-center h-100 rounded-3 shadow-sm card-pulse">
                <Link href="#" className="w-100">
                  <CardBody>
                    <FaMapMarkedAlt size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Location Advantages
                    </p>
                  </CardBody>
                </Link>
              </Card>
            </Col>

            <Col xs="6" md="3" className="mb-3">
              <Card className="feature-card bg-white position-relative border-0 text-center h-100 rounded-3 shadow-sm card-rotate">
                <Link href="#" className="w-100">
                  <CardBody>
                    <Badge
                      color="success"
                      size="sm"
                      className="position-absolute top-0 start-0"
                    >
                      New
                    </Badge>
                    <FaChartLine size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Price & ROI Trends
                    </p>
                  </CardBody>
                </Link>
              </Card>
            </Col>

            <Col xs="6" md="3" className="mb-3">
              <Card className="feature-card bg-white border-0 text-center h-100 rounded-3 shadow-sm card-zoom">
                <Link href="#" className="w-100">
                  <CardBody>
                    <FaRegCommentDots size={26} className="text-st mb-2" />
                    <p className="small fw-semibold mb-0">
                      Resident Reviews
                    </p>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= OFFCANVAS ================= */}
      <ProjectAmenitiesOffcanvas
        isOpen={isOpen}
        toggle={toggle}
        data={data}
      />
    </>
  );
};

export default Amenities;
