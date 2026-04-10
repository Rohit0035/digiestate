"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  Button,
  Row,
  Col,
  Badge,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaDownload, FaShare } from "react-icons/fa";
import "swiper/css";
import Link from "next/link";
import EnquiryModal from "../EnquiryModal";

import { formatNumber } from "../../utils/formatter";
import { IMAGE_URL } from "../../utils/api-config";

const ProjectCard = ({ project = {} }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      
        <Card
          key={project._id}
          className="border-0 shadow-sm p-2 mb-4 rounded-4"
          style={{ background: "#fff" }}
        >
          <Row className="align-items-center">
            {/* LEFT IMAGE */}
            <Col lg="3" md="12" className="mb-2">
              <Link
                href={`/project-details/${project.slug}`}
                className="text-dark"
              >
                <div className="position-relative rounded-3 overflow-hidden">
                  <Image
                    src={`${IMAGE_URL}${project?.photosAndVideos?.photos?.[0]}`}
                    alt={project?.title}
                    width={400}
                    height={250}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div
                    className="position-absolute top-0 end-0 m-2 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: 28, height: 28 }}
                  >
                    <FaShare />
                  </div>

                  <div className="position-absolute bottom-0 start-0 text-white p-2">
                    <Badge color="danger" className="mb-1">
                      {project?.tag || "RERA Approved"}
                    </Badge>
                    <h6 className="fw-bold mb-0">{project?.title}</h6>
                    <small>{project?.location}</small>
                    <div className="fw-semibold small mt-1">
                      {formatNumber(project?.priceRange?.min)} Onwards
                    </div>
                    <div className="small">
                      {project?.flats?.join(", ")} | {project?.projectSize} Sqft
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            {/* MIDDLE CONTENT - PHOTOS SLIDER */}
            <Col lg="6" md="12">
              <h6 className="fw-bold mb-2">Photos</h6>

              <Swiper
                spaceBetween={6}
                slidesPerView={3}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
              >
                {project?.photosAndVideos?.photos?.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      href={`${IMAGE_URL}${photo}`}
                      target="_blank"
                    >
                      <div
                        className="position-relative rounded-3 overflow-hidden"
                        style={{ height: 85, cursor: "pointer" }}
                      >
                        <Image
                          src={`${IMAGE_URL}${photo}`}
                          alt="project"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="d-flex flex-wrap gap-3 mt-3">
                <div
                  className="p-2 rounded-3"
                  style={{ background: "#fff6e0", minWidth: 220 }}
                >
                  <Badge color="warning" className="text-dark mb-1">
                    RERA Reports
                  </Badge>
                  <div className="small">{project?.status}</div>
                </div>

                <div
                  className="p-2 rounded-3"
                  style={{ background: "#e8fafa", minWidth: 220 }}
                >
                  <Badge color="info" className="text-dark mb-1">
                    Amenities
                  </Badge>
                  <div className="small">
                    All amenities available
                  </div>
                </div>
              </div>
            </Col>

            {/* RIGHT BUTTONS */}
            <Col lg="3" md="12">
              <div className="d-flex flex-column gap-3">
                <Button
                  color="danger"
                  className="rounded-pill"
                  onClick={toggle}
                >
                  Contact Builder
                </Button>
                <Button
                  outline
                  color="danger"
                  className="rounded-pill d-flex align-items-center justify-content-center gap-2"
                >
                  <FaDownload /> Download Brochure
                </Button>
              </div>
            </Col>
          </Row>
        </Card>

      <EnquiryModal modal={modal} toggle={toggle} />
    </>
  );
};

export default ProjectCard;