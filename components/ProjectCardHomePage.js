"use client";
import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { FaRegImage } from "react-icons/fa";
import Image from "next/image";
import { IMAGE_URL } from "../utils/api-config";
import { formatNumber } from "../utils/formatter";

const ProjectCardHomePage = ({ project = {} }) => {
  return (
    <Card className="border shadow-sm h-100">
      <div className="position-relative">
        <Image
          src={`${IMAGE_URL}${project?.photosAndVideos?.photos?.[0]}`}
          alt={project?.name}
          className="img-fluid rounded-top"
          width={600}
          height={600}
        />

        {/* Image Count */}
        <div
          className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small d-flex align-items-center gap-1"
          style={{ borderRadius: "0 0.3rem 0.3rem 0" }}
        >
          <FaRegImage size={13} /> {project?.tag || "RERA Approved"}
        </div>
      </div>

      <CardBody>
        <h6 className="fw-semibold mb-1 st-txt-o">
          {project?.title}
        </h6>

        <h6 className="fw-bold mb-1">
          {formatNumber(project?.priceRange?.min)} Onwards 
          </h6>
        <h6 className="fw-bold mb-1">
          <span className="fw-normal text-secondary">
            {project?.flats?.join(", ")} | {project?.projectSize} Sqft
          </span>
        </h6>

        <p className="text-muted mb-1 small">
          {project?.location}
        </p>
        <p className="text-muted mb-2 small">
          {project?.status}
        </p>

        <div className="text-center mt-2">
          <Button
            href="/project-details"
            color="danger"
            size="sm"
            className="rounded-pill w-100"
          >
            View Project
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCardHomePage;
