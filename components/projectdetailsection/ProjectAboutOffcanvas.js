"use client";
import React from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";

const ProjectAboutOffcanvas = ({ isAboutOpen, toggle }) => {
  return (
    <Offcanvas
      direction="end"
      isOpen={isAboutOpen}
      toggle={toggle}
      className="w-75"
    >
      <OffcanvasHeader toggle={toggle} className="fw-bold">
        About BSNL Sirigandha Elite
      </OffcanvasHeader>
      <OffcanvasBody>
        <p>
          BSNL Sirigandha Elite was established in 2023. We research, analyze, and determine the best
          cost-effective and regulatory design to suit our customer needs. We accomplish this by
          listening to our clients' needs and concerns and addressing them in a timely and effective
          fashion. Our name is synonymous with quality and timely delivery. Our reputation is built
          on the strength of our relationships with our clients. We take great pride in our
          accomplishments and build on them every day.
        </p>

        <p>
          BSNL Sirigandha Elite is an ongoing project by BSNL Employees And Citizen House Building
          Co-Operative Society Ltd in Devanahalli, Bangalore, offering plot configurations.
        </p>

        <ul className="list-unstyled">
          <li><strong>Status:</strong> Ongoing</li>
          <li><strong>Launch Date:</strong> 01 January 2023</li>
          <li><strong>Possession Date:</strong> 01 December 2026</li>
          <li><strong>Area:</strong> 25 Acres</li>
          <li><strong>Total Units:</strong> 400</li>
          <li><strong>Address:</strong> Sukanahalli Village, Devanahalli Doddaballapura Road, Devanahalli – 562110</li>
        </ul>

        <h6 className="fw-bold mt-4">Top Amenities</h6>
        <ul>
          <li>Park</li>
          <li>Club House</li>
          <li>Security</li>
          <li>Garden View</li>
          <li>Kids Play Area</li>
        </ul>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ProjectAboutOffcanvas;
