"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "./ProjectCard";

// images
import proimg1 from "../../assets/images/dg/pros-1.jpg";
import proimg2 from "../../assets/images/dg/pro-2.jpg";
import proimg3 from "../../assets/images/dg/pro-3.jpg";
import proimg4 from "../../assets/images/dg/pro-4.jpg";

const projects = [
  {
    id: 1,
    img: proimg4,
    name: "Radha Krishna Apartment",
    price: "₹42 Lakhs Onwards",
    size: "3 BHK • 1345 Sqft",
    location: "Bailey Road, Patna",
    status: "Completed Project",
    tag: "RERA Approved",
  },
  {
    id: 2,
    img: proimg3,
    name: "Baldev Bhawan",
    price: "₹38 Lakhs Onwards",
    size: "2 & 3 BHK",
    location: "Bailey Road, Patna",
    status: "Delivered",
    tag: "Premium",
  },
  {
    id: 3,
    img: proimg2,
    name: "Vanasthali Home LLP",
    price: "₹45 Lakhs Onwards",
    size: "3 BHK",
    location: "Boring Road, Patna",
    status: "Completed & Occupied",
    tag: "Luxury",
  },
  {
    id: 4,
    img: proimg1,
    name: "Abhinav Enclave",
    price: "₹40 Lakhs Onwards",
    size: "3 BHK • 1606 Sqft",
    location: "Kankarbagh, Patna",
    status: "Project Delivered",
    tag: "RERA",
  },
  {
    id: 5,
    img: proimg2,
    name: "Shivam Residency",
    price: "₹36 Lakhs Onwards",
    size: "2 & 3 BHK • 1180–1450 Sqft",
    location: "Rajendra Nagar, Patna",
    status: "Under Construction",
    tag: "New Launch",
  },
];

const OngoingProjectList = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg="12">
          <h3 className="fw-bold mb-4">Ongoing Projects</h3>
        </Col>

        <Col lg="12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OngoingProjectList;
