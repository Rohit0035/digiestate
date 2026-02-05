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
        About DigiEstate Prime Plots – Patna
      </OffcanvasHeader>

      <OffcanvasBody>
        <p className="text-muted">
          <strong>DigiEstate Prime Plots</strong> is a premium plotted development
          by <strong>DigiEstate Group</strong>, crafted to deliver secure
          investments and high-quality living spaces. The project focuses on
          transparent transactions, legally approved layouts, and future-ready
          infrastructure to meet the evolving needs of modern homeowners and
          investors.
        </p>

        <p className="text-muted">
          Strategically located in one of Patna’s fastest-developing zones,
          DigiEstate Prime Plots offers excellent connectivity to major highways,
          IT hubs, and essential civic amenities. Each plot is meticulously
          planned to ensure optimal space utilization, green living, and long-
          term value appreciation.
        </p>

        {/* ================= PROJECT DETAILS ================= */}
        <ul className="list-unstyled small mt-3">
          <li><strong>Project Type:</strong> Residential Plotted Development</li>
          <li><strong>Project Status:</strong> Ready for Registration</li>
          <li><strong>Total Project Area:</strong> 25 Acres</li>
          <li><strong>Total Plots:</strong> 400+</li>
          <li><strong>Developer:</strong> DigiEstate Group</li>
          <li>
            <strong>Location:</strong> North Patna – Near NH & IT Corridors
          </li>
        </ul>

        {/* ================= AMENITIES ================= */}
        <h6 className="fw-bold mt-4 mb-2">Top Amenities</h6>
        <ul className="small">
          <li>Grand entrance with gated security</li>
          <li>Landscaped parks & green open spaces</li>
          <li>Children’s play & recreation zones</li>
          <li>Wide 30 & 40 feet internal roads</li>
          <li>Underground electricity & drainage</li>
          <li>Dedicated water pipeline for each plot</li>
          <li>Street lighting & pedestrian pathways</li>
          <li>Peaceful & pollution-free environment</li>
        </ul>

        {/* ================= NOTE ================= */}
        <p className="small text-muted mt-3">
          DigiEstate Group is committed to delivering projects that combine
          strategic location, legal clarity, and superior infrastructure—making
          DigiEstate Prime Plots an ideal choice for both end-users and long-term
          investors.
        </p>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ProjectAboutOffcanvas;
