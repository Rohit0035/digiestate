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
} from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import ProjectAmenitiesOffcanvas from "./ProjectAmenitiesOffcanvas";

const Amenities = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const data = [
    {
      id: 1,
      icon: <FaLock size={30} className="bg-light p-2 rounded-circle text-st" />,
      title: "Total Units",
      value: "400",
    },
    {
      id: 2,
      icon: <FaTree size={30} className="bg-light p-2 rounded-circle text-st" />,
      title: "Project Size",
      value: "25 Acre",
    },
    {
      id: 3,
      icon: (
        <FaCalendarAlt size={30} className="bg-light p-2 rounded-circle text-st" />
      ),
      title: "Launch Date",
      value: "Jan 2023",
    },
  ];

  return (
    <>
      {/* Main Section */}
      <Card className="border-0 shadow-sm" data-aos="fade-up">
        <CardBody>
          <Row>
            {data.map((item) => (
              <Col xs="6" sm="6" md="4" lg="3" className="mb-2" key={item.id}>
                <Card className="text-center border-0 h-100">
                  <CardBody>
                    <div className="mb-2">{item.icon}</div>
                    <p className="small text-muted mb-0">{item.title}</p>
                    <small>
                      <strong>{item.value}</strong>
                    </small>
                  </CardBody>
                </Card>
              </Col>
            ))}

            <Col lg="12" className="mt-3 text-start">
              <Button
                color="link"
                className="text-st p-0 fw-semibold d-inline-flex align-items-center"
                onClick={toggle}
              >
                View Amenities (5) <FaArrowCircleRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Section 2 */}
      <Card className="border-0 mt-5 shadow-sm bg-light">
        <CardBody>
          <h4 className="fw-bold mb-1 text-dark">
            <SiSpringsecurity size={24} className="text-st me-1" />
            <span className="text-st">Most Comprehensive </span> & Credible
            Information
          </h4>
          <small>Insights you won't find anywhere else</small>

          <Row className="py-3">
            <Col xs="6" sm="6" md="4" lg="3" className="mb-2">
              <Card className="feature-card card-lift bg-white border-0 text-center h-100 rounded-3 shadow-sm">
                <Link href="#" className="w-100">
                  <CardBody>
                    <FaSwimmer className="text-st mb-2" />
                    <p className="small mb-0">Top Amenities</p>
                  </CardBody>
                </Link>
              </Card>
            </Col>

            <Col xs="6" sm="6" md="4" lg="3" className="mb-2">
              <Card className="feature-card card-pulse bg-white border-0 text-center h-100 rounded-3 shadow-sm">
                <Link href="#" className="w-100">
                  <CardBody>
                    <FaMapMarkedAlt className="text-st mb-2" />
                    <p className="small mb-0">Nearby Landmarks</p>
                  </CardBody>
                </Link>
              </Card>
            </Col>

            <Col xs="6" sm="6" md="4" lg="3" className="mb-2">
              <Card className="feature-card card-rotate bg-white position-relative border-0 text-center h-100 rounded-3 shadow-sm">
                <Link href="#" className="w-100">
                  <CardBody>
                    <Badge
                      color="success"
                      size="sm"
                      className="position-absolute top-0 start-0"
                    >
                      New
                    </Badge>
                    <FaChartLine className="text-st mb-2" />
                    <p className="small mb-0">PropWorth Insights</p>
                  </CardBody>
                </Link>
              </Card>
            </Col>

            <Col xs="6" sm="6" md="4" lg="3" className="mb-2">
              <Card className="feature-card card-zoom bg-white border-0 text-center h-100 rounded-3 shadow-sm">
                <Link href="#" className="w-100">
                  <CardBody>
                    <FaRegCommentDots className="text-st mb-2" />
                    <p className="small mb-0">Project Reviews</p>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* ✅ Use separated Offcanvas Component */}
      <ProjectAmenitiesOffcanvas isOpen={isOpen} toggle={toggle} data={data} />
    </>
  );
};

export default Amenities;
