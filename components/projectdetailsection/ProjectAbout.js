"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import {
  FaBuilding,
  FaLeaf,
  FaShieldAlt,
  FaLock,
  FaTree,
  FaCalendarAlt,
  FaArrowCircleRight,
  FaCheckCircle,
} from "react-icons/fa";
import ProjectAboutOffcanvas from "./ProjectAboutOffcanvas";
import ProjectAmenitiesOffcanvas from "./ProjectAmenitiesOffcanvas";

/* ================= PROJECT STATS ================= */
const data = [
  {
    id: 1,
    icon: <FaLock size={30} className="bg-light p-2 rounded-circle text-st" />,
    title: "Total Plots",
    value: "400+",
  },
  {
    id: 2,
    icon: <FaTree size={30} className="bg-light p-2 rounded-circle text-st" />,
    title: "Project Area",
    value: "25 Acres",
  },
  {
    id: 3,
    icon: (
      <FaCalendarAlt
        size={30}
        className="bg-light p-2 rounded-circle text-st"
      />
    ),
    title: "Project Status",
    value: "Ready for Registration",
  },
];

/* ================= AMENITIES ================= */
const amenities = [
  { icon: <FaBuilding className="fs-5 text-st mb-2" />, title: "Clubhouse" },
  { icon: <FaShieldAlt className="fs-5 text-st mb-2" />, title: "24×7 Security" },
  { icon: <FaTree className="fs-5 text-st mb-2" />, title: "Landscaped Parks" },
  { icon: <FaLeaf className="fs-5 text-st mb-2" />, title: "Green Living Zones" },
];

/* ================= KEY USPs ================= */
const usps = [
  "Premium gated plotted development",
  "Clear-title & legally verified plots",
  "Dedicated water pipeline for each plot",
  "Underground electricity & drainage system",
  "Wide 30 & 40 feet asphalted roads",
  "Strategic connectivity to highways & IT corridors",
  "High appreciation investment destination",
  "Eco-friendly layout with open green spaces",
  "Peaceful residential environment",
  "Developed & marketed by DigiEstate Group",
];

const ProjectAbout = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ================= ABOUT PROJECT ================= */}
      <Card className="mt-5 border-0 shadow-sm" data-aos="fade-up">
        <CardBody>
          <h4 className="fw-bold">
            About DigiEstate Prime Plots – Patna
          </h4>

          <p className="text-muted">
            DigiEstate Prime Plots is a thoughtfully planned residential plotted
            development curated by <strong>DigiEstate Group</strong>. Designed
            for modern living and long-term investment value, the project offers
            legally clear plots, excellent connectivity, and future-ready
            infrastructure in one of Patna’s fastest-growing corridors.
            <span
              onClick={toggleAbout}
              className="ms-1 text-st fw-semibold"
              style={{ cursor: "pointer" }}
            >
              Read More
            </span>
          </p>

          {/* ================= AMENITIES ================= */}
          <Row className="mt-4">
            <h5 className="mb-3">
              DigiEstate Prime Plots – Top Amenities
            </h5>

            {amenities.map((item, index) => (
              <Col xs="6" sm="6" md="4" lg="3" key={index} className="mb-3">
                <Card className="shadow-sm h-100 text-center border-0 bg-light">
                  <CardBody>
                    {item.icon}
                    <h6 className="fw-semibold mt-2">{item.title}</h6>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <Button
            color="link"
            className="text-st p-0 fw-semibold d-inline-flex align-items-center"
            onClick={toggle}
          >
            View All Amenities <FaArrowCircleRight className="ms-2" />
          </Button>

          {/* ================= KEY USPs ================= */}
          <Row className="mt-2">
            <Col xs="12" md="6">
              <Card
                className="border shadow-sm mt-4"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <CardBody>
                  <h5 className="fw-bold mb-3 text-dark st-txt-o">
                    Key USPs –{" "}
                    <span className="text-st">DigiEstate Prime Plots</span>
                  </h5>

                  <ul className="list-unstyled mb-0 small">
                    {usps.map((item, index) => (
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
        </CardBody>
      </Card>

      {/* ================= OFFCANVAS ================= */}
      <ProjectAboutOffcanvas
        isAboutOpen={isAboutOpen}
        toggle={toggleAbout}
      />

      <ProjectAmenitiesOffcanvas
        isOpen={isOpen}
        toggle={toggle}
        data={data}
      />
    </>
  );
};

export default ProjectAbout;
